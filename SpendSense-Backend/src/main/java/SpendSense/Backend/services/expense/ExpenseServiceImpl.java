// Implements the actual business logic for expenses and uses repository methods to interact with the database.

package SpendSense.Backend.services.expense;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service //Marks this class as a Spring service
@RequiredArgsConstructor // Automatically generates a constructor for all final fields
public class ExpenseServiceImpl implements ExpenseService {

//    Inject ExpenseRepository
    private final ExpenseRepository expenseRepository;

    public Expense postExpense(ExpenseDTO expenseDTO) {
        return saveOeUpdateExpense(new Expense(), expenseDTO);
    }

    private Expense saveOeUpdateExpense(Expense expense, ExpenseDTO expenseDTO) {
        expense.setTitle(expenseDTO.getTitle());
        expense.setDate(expenseDTO.getDate());
        expense.setAmount(expenseDTO.getAmount());
        expense.setAmount(expenseDTO.getAmount());
        expense.setCategory(expenseDTO.getCategory());
        expense.setDescription(expenseDTO.getDescription());

        return expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll().stream().sorted(Comparator.comparing(Expense::getDate).reversed()).collect(Collectors.toList());
    }
}
