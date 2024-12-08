// Maps to the database table for storing expense records.

package SpendSense.Backend.entity;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity //Marks this class as a JPA entity
@Data //getters and setters
public class Expense {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment on new creation
    private Long id;

    private String title;
    private String description;
    private String category;
    private LocalDate date;
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
