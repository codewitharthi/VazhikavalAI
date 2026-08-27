package vazhikavalAI.spring.com.model;

public class Route {

    private String source;
    private String destination;
    private double safetyScore;
    private String safetyLevel;

    public Route() {
    }

    public Route(
            String source,
            String destination,
            double safetyScore,
            String safetyLevel) {

        this.source = source;
        this.destination = destination;
        this.safetyScore = safetyScore;
        this.safetyLevel = safetyLevel;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public double getSafetyScore() {
        return safetyScore;
    }

    public void setSafetyScore(double safetyScore) {
        this.safetyScore = safetyScore;
    }

    public String getSafetyLevel() {
        return safetyLevel;
    }

    public void setSafetyLevel(String safetyLevel) {
        this.safetyLevel = safetyLevel;
    }
}