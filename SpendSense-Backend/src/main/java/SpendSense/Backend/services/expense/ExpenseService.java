package SpendSense.Backend.services.expense;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;

import java.util.List;

public interface ExpenseService {
    Expense postExpense(ExpenseDTO expenseDTO, String username);

    List<Expense> getAllExpenses(String username);

    Expense getExpenseById(long id, String username);

    Expense updateExpense(Long id, ExpenseDTO expenseDTO, String username);

    void deleteExpense(long id, String username);
}
