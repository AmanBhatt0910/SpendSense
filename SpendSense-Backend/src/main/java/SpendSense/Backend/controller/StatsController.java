package SpendSense.Backend.controller;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.services.stats.StatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StatsController {

    private final StatsService statsService;

    // Assuming the username is passed as a query parameter
    @GetMapping("/stats/chart")
    public GraphDTO getChartData(@RequestParam String username) {
        // Call the service method with the provided username
        return statsService.getChartData(username);
    }
}
