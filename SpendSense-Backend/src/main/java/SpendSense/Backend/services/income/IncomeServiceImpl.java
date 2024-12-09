package SpendSense.Backend.services.income;

import SpendSense.Backend.dto.IncomeDTO;
import SpendSense.Backend.entity.Income;
import SpendSense.Backend.entity.User;
import SpendSense.Backend.repository.IncomeRepository;
import SpendSense.Backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IncomeServiceImpl implements IncomeService {

    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;

    @Override
    public IncomeDTO postIncome(IncomeDTO incomeDTO, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Income income = new Income();
        income.setTitle(incomeDTO.getTitle());
        income.setAmount(incomeDTO.getAmount());
        income.setDate(incomeDTO.getDate());
        income.setCategory(incomeDTO.getCategory());
        income.setDescription(incomeDTO.getDescription());
        income.setUser(user);

        Income savedIncome = incomeRepository.save(income);
        return savedIncome.toDTO();
    }

    @Override
    public List<IncomeDTO> getAllIncomes(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<Income> incomes = incomeRepository.findByUser(user);
        return incomes.stream().map(Income::toDTO).collect(Collectors.toList());
    }

    @Override
    public IncomeDTO updateIncome(Long id, IncomeDTO incomeDTO, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Income income = incomeRepository.findByIdAndUser(id, user)
                .orElseThrow(() -> new EntityNotFoundException("Income not found"));

        income.setTitle(incomeDTO.getTitle());
        income.setAmount(incomeDTO.getAmount());
        income.setDate(incomeDTO.getDate());
        income.setCategory(incomeDTO.getCategory());
        income.setDescription(incomeDTO.getDescription());

        Income updatedIncome = incomeRepository.save(income);
        return updatedIncome.toDTO();
    }

    @Override
    public IncomeDTO getIncomeById(Long id, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Income income = incomeRepository.findByIdAndUser(id, user)
                .orElseThrow(() -> new EntityNotFoundException("Income not found"));

        return income.toDTO();
    }

    @Override
    public void deleteIncome(Long id, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Income income = incomeRepository.findByIdAndUser(id, user)
                .orElseThrow(() -> new EntityNotFoundException("Income not found"));

        incomeRepository.delete(income);
    }
}
