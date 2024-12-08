package SpendSense.Backend.services.income;

import SpendSense.Backend.dto.IncomeDTO;
import SpendSense.Backend.entity.Income;

import java.util.List;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO, String username);

    List<IncomeDTO> getAllIncomes(String username);

    Income updateIncome(Long id, IncomeDTO incomeDTO, String username);

    IncomeDTO getIncomeById(Long id, String username);

    void deleteIncome(Long id, String username);
}
