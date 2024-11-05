// Declares the methods to be implemented for managing expenses.

package SpendSense.Backend.services.expense;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;

import java.util.List;

public interface ExpenseService {
    Expense postExpense(ExpenseDTO expenseDTO);

    List<Expense> getAllExpenses();
}
