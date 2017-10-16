package vn.sogo.lmscms.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by VinhLe on 4/20/2017.
 */
public class ResponseGetStudentResult implements Serializable/*extends BaseResponse*/ {

    private Integer courseTraineeId;
    private Integer courseId;
    private Integer lastDoneUnitId;
    private Integer lastDoneLessonId;
    private Integer lastDoneActivityId;
    private List<Integer> traineeLessonDoneIds;
    private Integer currentUnitId;
    private Integer currentLessonId;
    private Integer nextActivityId;
    private String nextActivityName;
    private Time unitRemainTime;
    private String lastGoalContent;

    /*public ResponseGetStudentResult(boolean isSuccess, String message) {
        super(isSuccess, message);
    }*/

    public ResponseGetStudentResult() {
    }

    public ResponseGetStudentResult(Integer courseTraineeId, Integer courseId, Integer lastDoneUnitId, Integer lastDoneLessonId, Integer lastDoneActivityId, List<Integer> traineeLessonDoneIds, Integer currentUnitId, Integer currentLessonId, Integer nextActivityId, String nextActivityName, Time unitRemainTime, String lastGoalContent) {
        /*super(Boolean.TRUE, DefaultSuccess);*/

        this.courseTraineeId = courseTraineeId;
        this.courseId = courseId;
        this.lastDoneUnitId = lastDoneUnitId;
        this.lastDoneLessonId = lastDoneLessonId;
        this.lastDoneActivityId = lastDoneActivityId;
        this.traineeLessonDoneIds = traineeLessonDoneIds;
        this.currentUnitId = currentUnitId;
        this.currentLessonId = currentLessonId;
        this.nextActivityId = nextActivityId;
        this.nextActivityName = nextActivityName;
        this.unitRemainTime = unitRemainTime;
        this.lastGoalContent = lastGoalContent;
    }

    @JsonProperty("course_trainee_id")
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(int courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    @JsonProperty("course_id")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    @JsonProperty("last_done_unit_id")
    public Integer getLastDoneUnitId() {
        return lastDoneUnitId;
    }

    public void setLastDoneUnitId(int lastDoneUnitId) {
        this.lastDoneUnitId = lastDoneUnitId;
    }

    @JsonProperty("last_done_lesson_id")
    public Integer getLastDoneLessonId() {
        return lastDoneLessonId;
    }

    public void setLastDoneLessonId(int lastDoneLessonId) {
        this.lastDoneLessonId = lastDoneLessonId;
    }

    @JsonProperty("last_done_activity_id")
    public Integer getLastDoneActivityId() {
        return lastDoneActivityId;
    }

    public void setLastDoneActivityId(int lastDoneActivityId) {
        this.lastDoneActivityId = lastDoneActivityId;
    }

    @JsonProperty("trainee_lesson_done_ids")
    public List<Integer> getTraineeLessonDoneIds() {
        return traineeLessonDoneIds;
    }

    public void setTraineeLessonDoneIds(List<Integer> traineeLessonDoneIds) {
        this.traineeLessonDoneIds = traineeLessonDoneIds;
    }

    @JsonProperty("current_unit_id")
    public Integer getCurrentUnitId() {
        return currentUnitId;
    }

    public void setCurrentUnitId(int currentUnitId) {
        this.currentUnitId = currentUnitId;
    }

    @JsonProperty("current_lesson_id")
    public Integer getCurrentLessonId() {
        return currentLessonId;
    }

    public void setCurrentLessonId(int currentLessonId) {
        this.currentLessonId = currentLessonId;
    }

    @JsonProperty("next_activity_id")
    public Integer getNextActivityId() {
        return nextActivityId;
    }

    public void setNextActivityId(int nextActivityId) {
        this.nextActivityId = nextActivityId;
    }

    @JsonProperty("next_activiy_name")
    public String getNextActivityName() {
        return nextActivityName;
    }

    public void setNextActivityName(String nextActivityName) {
        this.nextActivityName = nextActivityName;
    }

    @JsonProperty("unit_remain_time")
    public Time getUnitRemainTime() {
        return unitRemainTime;
    }

    public void setUnitRemainTime(Time unitRemainTime) {
        this.unitRemainTime = unitRemainTime;
    }

    @JsonProperty("last_goal_content")
    public String getLastGoalContent() {
        return lastGoalContent;
    }

    public void setLastGoalContent(String lastGoalContent) {
        this.lastGoalContent = lastGoalContent;
    }
}
