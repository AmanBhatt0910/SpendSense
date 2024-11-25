package SpendSense.Backend.services.stats;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.dto.StatsDTO;

public interface StatsService {

    public GraphDTO getChartData();

    StatsDTO getStats();
}
