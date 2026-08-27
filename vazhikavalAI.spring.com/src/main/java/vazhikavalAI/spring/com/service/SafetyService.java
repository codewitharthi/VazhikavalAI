package vazhikavalAI.spring.com.service;

import org.springframework.stereotype.Service;

@Service
public class SafetyService {

    public double calculateSafetyScore(
            double crimeSafety,
            double roadSafety,
            double trafficSafety,
            double weatherSafety,
            double communitySafety) {

        double score =
                (crimeSafety * 0.30) +
                (roadSafety * 0.20) +
                (trafficSafety * 0.15) +
                (weatherSafety * 0.15) +
                (communitySafety * 0.20);

        return Math.round(score * 100.0) / 100.0;
    }

    public String getSafetyLevel(double safetyScore) {

        if (safetyScore >= 80) {
            return "SAFE";
        } else if (safetyScore >= 60) {
            return "MODERATE";
        } else {
            return "RISKY";
        }
    }
}