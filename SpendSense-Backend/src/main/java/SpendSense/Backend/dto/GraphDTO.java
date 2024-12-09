package SpendSense.Backend.dto;

import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.Income;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class GraphDTO {

    private List<Expense> expenseList;
    private List<Income> incomeList;

    public GraphDTO(List<Expense> expenseList, List<Income> incomeList) {
        this.expenseList = expenseList;
        this.incomeList = incomeList;
    }

    // Flatten data into a simplified structure
    public Object getFlattenedData() {
        return new Object() {
            public List<?> expenses = expenseList.stream()
                    .map(e -> new Object() {
                        public double amount = e.getAmount();
                        public String date = e.getDate().toString();
                    }).collect(Collectors.toList());
            public List<?> incomes = incomeList.stream()
                    .map(i -> new Object() {
                        public double amount = i.getAmount();
                        public String date = i.getDate().toString();
                    }).collect(Collectors.toList());
            public double totalIncome = incomeList.stream().mapToDouble(Income::getAmount).sum();
            public double totalExpense = expenseList.stream().mapToDouble(Expense::getAmount).sum();
            public double balance = totalIncome - totalExpense;
        };
    }
}
