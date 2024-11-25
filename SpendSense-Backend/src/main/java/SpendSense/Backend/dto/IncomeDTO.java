package SpendSense.Backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class IncomeDTO {
    private Long id;

    private String title;

    private Integer amount;

    private String description;

    private String category;

    private LocalDate date;
}
