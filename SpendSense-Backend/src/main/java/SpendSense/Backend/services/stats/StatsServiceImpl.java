package SpendSense.Backend.services.stats;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.dto.StatsDTO;
import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.Income;
import SpendSense.Backend.entity.User;
import SpendSense.Backend.repository.ExpenseRepository;
import SpendSense.Backend.repository.IncomeRepository;
import SpendSense.Backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;  // Import for LocalDate
import java.util.List;  // Import for List
import java.util.Optional;  // Import for Optional
import java.util.OptionalDouble;  // Import for OptionalDouble

@Service
@RequiredArgsConstructor
public class StatsServiceImpl implements StatsService {

    private final IncomeRepository incomeRepository;
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    @Override
    public GraphDTO getChartData(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(28);

        GraphDTO graphDTO = new GraphDTO();
        graphDTO.setExpenseList(expenseRepository.findByUserAndDateBetween(user, startDate, endDate));
        graphDTO.setIncomeList(incomeRepository.findByUserAndDateBetween(user, startDate, endDate));

        return graphDTO;
    }

    @Override
    public StatsDTO getStats(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));

        Double totalIncome = incomeRepository.sumAllAmountsByUser(user);
        Double totalExpense = expenseRepository.sumAllAmountsByUser(user);

        Optional<Income> optionalIncome = incomeRepository.findFirstByUserOrderByDateDesc(user);
        Optional<Expense> optionalExpense = expenseRepository.findFirstByUserOrderByDateDesc(user);

        StatsDTO statsDTO = new StatsDTO();
        statsDTO.setExpense(totalExpense);
        statsDTO.setIncome(totalIncome);

        optionalIncome.ifPresent(statsDTO::setLatestIncome);
        optionalExpense.ifPresent(statsDTO::setLatestExpense);

        statsDTO.setBalance(totalIncome - totalExpense);

        List<Income> incomeList = incomeRepository.findByUser(user);
        List<Expense> expenseList = expenseRepository.findByUser(user);

        OptionalDouble minIncome = incomeList.stream().mapToDouble(Income::getAmount).min();
        OptionalDouble maxIncome = incomeList.stream().mapToDouble(Income::getAmount).max();

        OptionalDouble minExpense = expenseList.stream().mapToDouble(Expense::getAmount).min();
        OptionalDouble maxExpense = expenseList.stream().mapToDouble(Expense::getAmount).max();

        statsDTO.setMaxExpense(maxExpense.isPresent() ? maxExpense.getAsDouble() : null);
        statsDTO.setMinExpense(minExpense.isPresent() ? minExpense.getAsDouble() : null);
        statsDTO.setMaxIncome(maxIncome.isPresent() ? maxIncome.getAsDouble() : null);
        statsDTO.setMinIncome(minIncome.isPresent() ? minIncome.getAsDouble() : null);

        return statsDTO;
    }
}
