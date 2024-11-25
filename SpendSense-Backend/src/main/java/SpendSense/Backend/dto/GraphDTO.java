package SpendSense.Backend.dto;

import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.Income;
import lombok.Data;

import java.util.List;

@Data
public class GraphDTO {

    private List<Expense> expenseList;

    private List<Income> incomeList;
}
