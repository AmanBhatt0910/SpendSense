// Maps to the database table for storing expense records.

package SpendSense.Backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDate;

@Entity //Marks this class as a JPA entity
@Data //getters and setters
public class Expense {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // auto increment on new creation
    private long id;

    private String title;
    private String description;
    private String category;
    private LocalDate date;
    private Integer amount;
}
