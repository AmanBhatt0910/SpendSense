package SpendSense.Backend.services.stats;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.dto.StatsDTO;
import SpendSense.Backend.dto.IncomeDTO;
import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.Income;
import SpendSense.Backend.entity.User;
import SpendSense.Backend.repository.ExpenseRepository;
import SpendSense.Backend.repository.IncomeRepository;
import SpendSense.Backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.OptionalDouble;

@Service
@RequiredArgsConstructor
public class StatsServiceImpl implements StatsService {

    private final IncomeRepository incomeRepository;
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    @Override
    public GraphDTO getChartData(String username) {
        User user = findUserByUsername(username);
        LocalDate startDate = LocalDate.now().minusDays(28);
        LocalDate endDate = LocalDate.now();
        List<Expense> expenseList = expenseRepository.findByUserAndDateBetween(user, startDate, endDate);
        List<Income> incomeList = incomeRepository.findByUserAndDateBetween(user, startDate, endDate);
        return new GraphDTO(expenseList, incomeList);
    }

    @Override
    public StatsDTO getStats(String username) {
        User user = findUserByUsername(username);

        Double totalIncome = incomeRepository.sumAllAmountsByUser(user);
        Double totalExpense = expenseRepository.sumAllAmountsByUser(user);

        StatsDTO statsDTO = new StatsDTO();
        statsDTO.setExpense(totalExpense);
        statsDTO.setIncome(totalIncome);
        statsDTO.setBalance(totalIncome - totalExpense);

        setLatestIncomeAndExpense(user, statsDTO);
        setMinMaxValues(user, statsDTO);

        return statsDTO;
    }

    private User findUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
    }

    private void setLatestIncomeAndExpense(User user, StatsDTO statsDTO) {
        Optional<Income> latestIncome = incomeRepository.findFirstByUserOrderByDateDesc(user);
        Optional<Expense> latestExpense = expenseRepository.findFirstByUserOrderByDateDesc(user);

        latestIncome.ifPresent(income -> statsDTO.setLatestIncome(mapIncomeToDTO(income)));
        latestExpense.ifPresent(expense -> statsDTO.setLatestExpense(mapExpenseToDTO(expense)));
    }

    private void setMinMaxValues(User user, StatsDTO statsDTO) {
        List<Income> incomeList = incomeRepository.findByUser(user);
        List<Expense> expenseList = expenseRepository.findByUser(user);

        OptionalDouble minIncome = incomeList.stream().mapToDouble(Income::getAmount).min();
        OptionalDouble maxIncome = incomeList.stream().mapToDouble(Income::getAmount).max();
        OptionalDouble minExpense = expenseList.stream().mapToDouble(Expense::getAmount).min();
        OptionalDouble maxExpense = expenseList.stream().mapToDouble(Expense::getAmount).max();

        statsDTO.setMaxIncome(maxIncome.orElse(0.0));
        statsDTO.setMinIncome(minIncome.orElse(0.0));
        statsDTO.setMaxExpense(maxExpense.orElse(0.0));
        statsDTO.setMinExpense(minExpense.orElse(0.0));
    }

    private IncomeDTO mapIncomeToDTO(Income income) {
        if (income == null) return null;

        IncomeDTO incomeDTO = new IncomeDTO();
        incomeDTO.setAmount(income.getAmount());
        incomeDTO.setDescription(income.getDescription());
        incomeDTO.setDate(LocalDate.parse(income.getDate().toString())); // Convert to string if necessary
        return incomeDTO;
    }

    private ExpenseDTO mapExpenseToDTO(Expense expense) {
        if (expense == null) return null;

        ExpenseDTO expenseDTO = new ExpenseDTO();
        expenseDTO.setAmount(expense.getAmount());
        expenseDTO.setCategory(expense.getCategory());
        expenseDTO.setDate(LocalDate.parse(expense.getDate().toString())); // Convert to string if necessary
        return expenseDTO;
    }
}
