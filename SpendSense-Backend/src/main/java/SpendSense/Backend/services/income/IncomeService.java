package SpendSense.Backend.services.income;

import SpendSense.Backend.dto.IncomeDTO;

import java.util.List;

public interface IncomeService {
    IncomeDTO postIncome(IncomeDTO incomeDTO, String username);
    List<IncomeDTO> getAllIncomes(String username);
    IncomeDTO updateIncome(Long id, IncomeDTO incomeDTO, String username);
    IncomeDTO getIncomeById(Long id, String username);
    void deleteIncome(Long id, String username);
}
