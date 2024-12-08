package SpendSense.Backend.services.stats;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.dto.StatsDTO;

public interface StatsService {
    // Method to get stats data
    StatsDTO getStats(String username);

    // Method to get chart data
    GraphDTO getChartData(String username);
}
