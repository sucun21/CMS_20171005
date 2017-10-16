package vn.sogo.lmscms.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by VinhLe on 4/15/2017.
 */
public class SgStudentGoalRequest {

    private int courseId;
    private int traineeId;
    private int unitId;
    private String goalContent;

    @JsonProperty("course_id")
    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    @JsonProperty("trainee_id")
    public int getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(int traineeId) {
        this.traineeId = traineeId;
    }

    @JsonProperty("unit_id")
    public int getUnitId() {
        return unitId;
    }

    public void setUnitId(int unitId) {
        this.unitId = unitId;
    }

    @JsonProperty("goal_content")
    public String getGoalContent() {
        return goalContent;
    }

    public void setGoalContent(String goalContent) {
        this.goalContent = goalContent;
    }
}
