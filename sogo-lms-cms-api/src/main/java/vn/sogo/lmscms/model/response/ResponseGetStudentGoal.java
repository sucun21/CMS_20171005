package vn.sogo.lmscms.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/20/2017.
 */
public class ResponseGetStudentGoal implements Serializable/* extends BaseResponse*/ {

    private Integer courseId;
    private Integer traineeId;
    private String goalContent;
    private Timestamp lastModified;

    /*public ResponseGetStudentGoal(boolean isSuccess, String message) {
        super(isSuccess, message);
    }*/

    public ResponseGetStudentGoal() {
    }

    public ResponseGetStudentGoal(Integer courseId, Integer traineeId, String goalContent, Timestamp lastModified) {
//        super(Boolean.TRUE, DefaultSuccess);

        this.courseId = courseId;
        this.traineeId = traineeId;
        this.goalContent = goalContent;
        this.lastModified = lastModified;
    }

    @JsonProperty("course_id")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    @JsonProperty("trainee_id")
    public Integer getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(int traineeId) {
        this.traineeId = traineeId;
    }

    @JsonProperty("goal_content")
    public String getGoalContent() {
        return goalContent;
    }

    public void setGoalContent(String goalContent) {
        this.goalContent = goalContent;
    }

    @JsonProperty("last_modified")
    public Timestamp getLastModified() {
        return lastModified;
    }

    public void setLastModified(Timestamp lastModified) {
        this.lastModified = lastModified;
    }
}
