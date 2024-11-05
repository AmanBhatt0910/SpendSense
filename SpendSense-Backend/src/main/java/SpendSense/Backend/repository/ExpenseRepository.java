// Provides CRUD operations for the Expense entity through Spring Data JPA.

package SpendSense.Backend.repository;

import SpendSense.Backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //allowing Spring to manage it as part of the data layer.
public interface ExpenseRepository extends JpaRepository<Expense, Long> { //provides basic CRUD and pagination methods for Expense entities (which have a primary key of type Long).
}
