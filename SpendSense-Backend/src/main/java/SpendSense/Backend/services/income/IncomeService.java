package SpendSense.Backend.services.income;

import SpendSense.Backend.dto.IncomeDTO;
import SpendSense.Backend.entity.Income;

import java.util.List;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO);

    List<IncomeDTO> getAllIncomes();

    public Income updateIncome(Long id, IncomeDTO incomeDTO);

    public IncomeDTO getIncomeById(Long id);

    public void deleteIncome(Long id);
}
