package SpendSense.Backend.entity;

import SpendSense.Backend.dto.IncomeDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Income {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDate date;
    private Double amount;
    private String category;
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key to User table
    private User user;

    // Method to convert Income entity to IncomeDTO
    public IncomeDTO getIncomeDTO() {
        IncomeDTO incomeDTO = new IncomeDTO();
        incomeDTO.setId(this.id);
        incomeDTO.setTitle(this.title);
        incomeDTO.setDate(this.date);
        incomeDTO.setAmount(this.amount);
        incomeDTO.setCategory(this.category);
        incomeDTO.setDescription(this.description);
        return incomeDTO;
    }
}
