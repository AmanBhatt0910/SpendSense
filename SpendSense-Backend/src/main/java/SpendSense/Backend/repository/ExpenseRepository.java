// Provides CRUD operations for the Expense entity through Spring Data JPA.

package SpendSense.Backend.repository;

import SpendSense.Backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository //allowing Spring to manage it as part of the data layer.
public interface ExpenseRepository extends JpaRepository<Expense, Long> { //provides basic CRUD and pagination methods for Expense entities (which have a primary key of type Long).
    List<Expense> findByDateBetween(LocalDate startDate, LocalDate endDate);

    @Query("SELECT SUM(e.amount) FROM Expense e")
    Double sumAllAmounts();

    Optional<Expense> findFirstByOrderByDateDesc();
}
