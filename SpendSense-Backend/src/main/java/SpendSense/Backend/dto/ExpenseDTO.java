// Holds data for transferring expense information between different layers.

package SpendSense.Backend.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ExpenseDTO {
    private long id;
    private String title;
    private String description;
    private String category;
    private LocalDate date;
    private Integer amount;
}
