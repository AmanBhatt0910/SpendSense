package SpendSense.Backend.services.expense;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.User;
import SpendSense.Backend.repository.ExpenseRepository;
import SpendSense.Backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    @Override
    public Expense postExpense(ExpenseDTO expenseDTO, String username) {
        User user = getUserByUsername(username);
        Expense expense = new Expense();
        return saveOrUpdateExpense(expense, expenseDTO, user);
    }

    private Expense saveOrUpdateExpense(Expense expense, ExpenseDTO expenseDTO, User user) {
        // Set fields from DTO
        expense.setTitle(expenseDTO.getTitle());
        expense.setDate(expenseDTO.getDate());
        expense.setAmount(expenseDTO.getAmount());
        expense.setCategory(expenseDTO.getCategory());
        expense.setDescription(expenseDTO.getDescription());
        expense.setUser(user);
        return expenseRepository.save(expense);
    }

    @Override
    public ExpenseDTO updateExpense(Long id, ExpenseDTO expenseDTO, String username) {
        User user = getUserByUsername(username);
        Expense expense = expenseRepository.findById(id)
                .filter(e -> e.getUser().equals(user))
                .orElseThrow(() -> new EntityNotFoundException("Expense not found for user with id: " + id));
        Expense updatedExpense = saveOrUpdateExpense(expense, expenseDTO, user);
        return mapToDTO(updatedExpense);
    }

    @Override
    public List<ExpenseDTO> getAllExpenses(String username) {
        User user = getUserByUsername(username);
        return expenseRepository.findByUser(user).stream() // Fetch all expenses for the user
                .sorted(Comparator.comparing(Expense::getDate).reversed()) // Sort by date (most recent first)
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ExpenseDTO getExpenseById(long id, String username) {
        User user = getUserByUsername(username);
        Expense expense = expenseRepository.findById(id)
                .filter(e -> e.getUser().equals(user))
                .orElseThrow(() -> new EntityNotFoundException("Expense not found for user with id: " + id));
        return mapToDTO(expense);
    }

    @Override
    public void deleteExpense(long id, String username) {
        User user = getUserByUsername(username);
        Expense expense = expenseRepository.findById(id)
                .filter(e -> e.getUser().equals(user))
                .orElseThrow(() -> new EntityNotFoundException("Expense not found for user with id: " + id));
        expenseRepository.delete(expense);
    }

    private User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
    }

    private ExpenseDTO mapToDTO(Expense expense) {
        ExpenseDTO dto = new ExpenseDTO();
        dto.setId(expense.getId());
        dto.setTitle(expense.getTitle());
        dto.setDescription(expense.getDescription());
        dto.setCategory(expense.getCategory());
        dto.setDate(expense.getDate());
        dto.setAmount(expense.getAmount());
        return dto;
    }
}
