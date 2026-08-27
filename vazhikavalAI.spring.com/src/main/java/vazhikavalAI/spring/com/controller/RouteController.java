package vazhikavalAI.spring.com.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vazhikavalAI.spring.com.model.Route;
import vazhikavalAI.spring.com.service.SafetyService;

@RestController
@RequestMapping("/api")
public class RouteController {

    private final SafetyService safetyService;

    public RouteController(SafetyService safetyService) {
        this.safetyService = safetyService;
    }

    @GetMapping("/test")
    public String test() {
        return "VazhikavalAI Backend is Working!";
    }

    @GetMapping("/route")
    public Route getRoute(
            @RequestParam String source,
            @RequestParam String destination) {

        double crimeSafety = 90.0;
        double roadSafety = 80.0;
        double trafficSafety = 75.0;
        double weatherSafety = 85.0;
        double communitySafety = 90.0;

        double safetyScore = safetyService.calculateSafetyScore(
                crimeSafety,
                roadSafety,
                trafficSafety,
                weatherSafety,
                communitySafety
        );

        String safetyLevel =
                safetyService.getSafetyLevel(safetyScore);

        return new Route(
                source,
                destination,
                safetyScore,
                safetyLevel
        );
    }
}