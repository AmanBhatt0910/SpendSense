package SpendSense.Backend.repository;

import SpendSense.Backend.entity.Income;
import SpendSense.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface IncomeRepository extends JpaRepository<Income, Long> {

    // Find all incomes associated with a user
    List<Income> findByUser(User user);

    // Find all incomes for a user within a date range
    List<Income> findByUserAndDateBetween(User user, LocalDate startDate, LocalDate endDate);

    // Find the most recent income entry for a user
    Optional<Income> findFirstByUserOrderByDateDesc(User user);

    // Custom query to sum all amounts for a user
    @Query("SELECT SUM(i.amount) FROM Income i WHERE i.user = :user")
    Double sumAllAmountsByUser(User user);

    // Find income by id and user
    Optional<Income> findByIdAndUser(Long id, User user);
}
