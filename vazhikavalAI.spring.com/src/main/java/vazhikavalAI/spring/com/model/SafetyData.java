package vazhikavalAI.spring.com.model;

public class SafetyData {

    private String location;
    private double crimeSafety;
    private double roadSafety;
    private double trafficSafety;
    private double weatherSafety;
    private double communitySafety;

    public SafetyData() {
    }

    public SafetyData(
            String location,
            double crimeSafety,
            double roadSafety,
            double trafficSafety,
            double weatherSafety,
            double communitySafety) {

        this.location = location;
        this.crimeSafety = crimeSafety;
        this.roadSafety = roadSafety;
        this.trafficSafety = trafficSafety;
        this.weatherSafety = weatherSafety;
        this.communitySafety = communitySafety;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getCrimeSafety() {
        return crimeSafety;
    }

    public void setCrimeSafety(double crimeSafety) {
        this.crimeSafety = crimeSafety;
    }

    public double getRoadSafety() {
        return roadSafety;
    }

    public void setRoadSafety(double roadSafety) {
        this.roadSafety = roadSafety;
    }

    public double getTrafficSafety() {
        return trafficSafety;
    }

    public void setTrafficSafety(double trafficSafety) {
        this.trafficSafety = trafficSafety;
    }

    public double getWeatherSafety() {
        return weatherSafety;
    }

    public void setWeatherSafety(double weatherSafety) {
        this.weatherSafety = weatherSafety;
    }

    public double getCommunitySafety() {
        return communitySafety;
    }

    public void setCommunitySafety(double communitySafety) {
        this.communitySafety = communitySafety;
    }
}