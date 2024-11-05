package SpendSense.Backend.controller;

import SpendSense.Backend.dto.ExpenseDTO;
import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.services.expense.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //Specifies that this class handles HTTP requests and produces RESTful responses
@RequestMapping("/api/expense") //Sets the base URI for all endpoints within this controller.
@RequiredArgsConstructor
@CrossOrigin("*") //Allows cross-origin requests from any origin, useful for frontend-backend communication during development
public class ExpenseController {

//    Inject Expense Service
    private final ExpenseService expenseService;

    @PostMapping
    public ResponseEntity<?> postExpense(@RequestBody ExpenseDTO dto) {
        Expense createdExpense = expenseService.postExpense(dto);
        if(createdExpense != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllExpenses() {
        return ResponseEntity.ok(expenseService.getAllExpenses());
    }
}
