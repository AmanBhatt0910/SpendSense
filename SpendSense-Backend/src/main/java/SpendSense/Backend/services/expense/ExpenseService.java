package SpendSense.Backend.services.expense;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;

import java.util.List;

public interface ExpenseService {
    Expense postExpense(ExpenseDTO expenseDTO, String username);

    List<ExpenseDTO> getAllExpenses(String username);

    ExpenseDTO getExpenseById(long id, String username);

    ExpenseDTO updateExpense(Long id, ExpenseDTO expenseDTO, String username);

    void deleteExpense(long id, String username);
}
