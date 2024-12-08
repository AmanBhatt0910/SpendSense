package SpendSense.Backend.repository;

import SpendSense.Backend.entity.Expense;
import SpendSense.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUser(User user);
    List<Expense> findByUserAndDateBetween(User user, LocalDate startDate, LocalDate endDate);
    Optional<Expense> findFirstByUserOrderByDateDesc(User user);

    @Query("SELECT SUM(e.amount) FROM Expense e WHERE e.user = :user")
    Double sumAllAmountsByUser(User user);
}
