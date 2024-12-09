package SpendSense.Backend.controller;

import SpendSense.Backend.dto.GraphDTO;
import SpendSense.Backend.dto.StatsDTO;
import SpendSense.Backend.services.stats.StatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stats")
@RequiredArgsConstructor
@CrossOrigin("*")
public class StatsController {

    private final StatsService statsService;

    private String getUsernameFromJwt() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null ? authentication.getName() : null;
    }

    @GetMapping("/overview")
    public ResponseEntity<?> getStats() {
        String username = getUsernameFromJwt();
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated.");
        }

        try {
            StatsDTO statsDTO = statsService.getStats(username);
            return ResponseEntity.ok(statsDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to fetch stats.");
        }
    }

    @GetMapping("/chart")
    public ResponseEntity<?> getChartData() {
        String username = getUsernameFromJwt();
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated.");
        }

        try {
            return ResponseEntity.ok(statsService.getChartData(username).getFlattenedData());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to fetch chart data.");
        }
    }
}
