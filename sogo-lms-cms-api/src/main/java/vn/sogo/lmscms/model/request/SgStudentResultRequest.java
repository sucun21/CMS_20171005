package vn.sogo.lmscms.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

/**
 * Created by VinhLe on 4/24/2017.
 */
public class SgStudentResultRequest implements Serializable {

    private Integer traineeId;
    private Integer courseId;
    private Integer activityId;
    private String traineeAnswer;
    private byte isTraineeAnswerRight;

    @JsonProperty("trainee_id")
    public Integer getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(Integer traineeId) {
        this.traineeId = traineeId;
    }

    @JsonProperty("course_id")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    @JsonProperty("activity_id")
    public Integer getActivityId() {
        return activityId;
    }

    public void setActivityId(Integer activityId) {
        this.activityId = activityId;
    }

    @JsonProperty("trainee_answer")
    public String getTraineeAnswer() {
        return traineeAnswer;
    }

    public void setTraineeAnswer(String traineeAnswer) {
        this.traineeAnswer = traineeAnswer;
    }

    @JsonProperty("is_trainee_answer_right")
    public byte getTraineeAnswerRight() {
        return isTraineeAnswerRight;
    }

    public void setTraineeAnswerRight(byte traineeAnswerRight) {
        isTraineeAnswerRight = traineeAnswerRight;
    }
}
