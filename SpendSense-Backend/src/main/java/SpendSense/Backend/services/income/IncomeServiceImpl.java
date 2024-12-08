package SpendSense.Backend.services.income;

import SpendSense.Backend.dto.IncomeDTO;
import SpendSense.Backend.entity.Income;
import SpendSense.Backend.entity.User;
import SpendSense.Backend.repository.IncomeRepository;
import SpendSense.Backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IncomeServiceImpl implements IncomeService {

    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;

    @Override
    public Income postIncome(IncomeDTO incomeDTO, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));

        Income income = new Income();
        income.setUser(user);
        return saveOrUpdateIncome(income, incomeDTO);
    }

    private Income saveOrUpdateIncome(Income income, IncomeDTO incomeDTO) {
        income.setTitle(incomeDTO.getTitle());
        income.setDate(incomeDTO.getDate());
        income.setAmount(Double.valueOf(incomeDTO.getAmount()));
        income.setCategory(incomeDTO.getCategory());
        income.setDescription(incomeDTO.getDescription());
        return incomeRepository.save(income);
    }

    @Override
    public List<IncomeDTO> getAllIncomes(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));

        return incomeRepository.findByUser(user).stream()
                .sorted(Comparator.comparing(Income::getDate).reversed())
                .map(Income::getIncomeDTO) // Convert Income entity to IncomeDTO
                .collect(Collectors.toList());
    }

    @Override
    public Income updateIncome(Long id, IncomeDTO incomeDTO, String username) {
        Income income = findIncomeByIdAndUser(id, username);
        return saveOrUpdateIncome(income, incomeDTO);
    }

    @Override
    public IncomeDTO getIncomeById(Long id, String username) {
        Income income = findIncomeByIdAndUser(id, username);
        return income.getIncomeDTO(); // Convert Income entity to IncomeDTO
    }

    @Override
    public void deleteIncome(Long id, String username) {
        Income income = findIncomeByIdAndUser(id, username);
        incomeRepository.delete(income);
    }

    private Income findIncomeByIdAndUser(Long id, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));

        return incomeRepository.findByIdAndUser(id, user)
                .orElseThrow(() -> new EntityNotFoundException("Income not found with id: " + id + " for user: " + username));
    }
}
