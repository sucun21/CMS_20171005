package vn.sogo.lmscms.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import vn.sogo.lmscms.model.mysql.sgnative.SgENCScheduleEntity;

import java.io.Serializable;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/20/2017.
 */
public class ResponseGetENCSchedule implements Serializable/* extends BaseResponse*/ {

    private Integer courseId;
    private Integer classId;
    private Integer classTypeId;
    private Integer classStatusId;
    private String classStatusName;
    private String classTypeName;
    private String classIconName;
    private Integer unitId;
    private String unitTitle;
    private Integer trainerId;
    private String trainerName;
    private Timestamp studyDate;
    private Time studyTime;
    private Timestamp bookDate;
    private Integer unitSortOrder;

    /*public ResponseGetENCSchedule(boolean isSuccess, String message) {
           super(isSuccess, message);
       }*/

    public ResponseGetENCSchedule(Integer courseId, SgENCScheduleEntity entity) {
        this(courseId, entity.getClassId(), entity.getClassTypeId(), entity.getClassStatusId(), entity.getClassStatusName(), entity.getClassTypeName(), entity.getClassIconName(), entity.getUnitId(), entity.getUnitTitle(), entity.getTrainerId(), entity.getTrainerName(), entity.getStudyDate(), entity.getStudyTime(), entity.getBookDate(), entity.getUnitSortOrder());
    }

    public ResponseGetENCSchedule(Integer courseId, Integer classId, Integer classTypeId, Integer classStatusId, String classStatusName, String classTypeName, String classIconName, Integer unitId, String unitTitle, Integer trainerId, String trainerName, Timestamp studyDate, Time studyTime, Timestamp bookDate, Integer unitSortOrder) {
        this.courseId = courseId;
        this.classId = classId;
        this.classTypeId = classTypeId;
        this.classStatusId = classStatusId;
        this.classStatusName = classStatusName;
        this.classTypeName = classTypeName;
        this.classIconName = classIconName;
        this.unitId = unitId;
        this.unitTitle = unitTitle;
        this.trainerId = trainerId;
        this.trainerName = trainerName;
        this.studyDate = studyDate;
        this.studyTime = studyTime;
        this.bookDate = bookDate;
        this.unitSortOrder = unitSortOrder;
    }

    @JsonProperty("course_id")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    @JsonProperty("class_id")
    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    @JsonProperty("class_type_id")
    public Integer getClassTypeId() {
        return classTypeId;
    }

    public void setClassTypeId(Integer classTypeId) {
        this.classTypeId = classTypeId;
    }

    @JsonProperty("class_status_id")
    public Integer getClassStatusId() {
        return classStatusId;
    }

    public void setClassStatusId(Integer classStatusId) {
        this.classStatusId = classStatusId;
    }

    @JsonProperty("class_status_name")
    public String getClassStatusName() {
        return classStatusName;
    }

    public void setClassStatusName(String classStatusName) {
        this.classStatusName = classStatusName;
    }

    @JsonProperty("class_type_name")
    public String getClassTypeName() {
        return classTypeName;
    }

    public void setClassTypeName(String classTypeName) {
        this.classTypeName = classTypeName;
    }

    @JsonProperty("class_icon_name")
    public String getClassIconName() {
        return classIconName;
    }

    public void setClassIconName(String classIconName) {
        this.classIconName = classIconName;
    }

    @JsonProperty("unit_id")
    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }

    @JsonProperty("unit_title")
    public String getUnitTitle() {
        return unitTitle;
    }

    public void setUnitTitle(String unitTitle) {
        this.unitTitle = unitTitle;
    }

    @JsonProperty("trainer_id")
    public Integer getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Integer trainerId) {
        this.trainerId = trainerId;
    }

    @JsonProperty("trainer_name")
    public String getTrainerName() {
        return trainerName;
    }

    public void setTrainerName(String trainerName) {
        this.trainerName = trainerName;
    }

    @JsonProperty("study_date")
    public Timestamp getStudyDate() {
        return studyDate;
    }

    public void setStudyDate(Timestamp studyDate) {
        this.studyDate = studyDate;
    }

    @JsonProperty("study_time")
    public Time getStudyTime() {
        return studyTime;
    }

    public void setStudyTime(Time studyTime) {
        this.studyTime = studyTime;
    }

    @JsonProperty("booked_date")
    public Timestamp getBookDate() {
        return bookDate;
    }

    public void setBookDate(Timestamp bookDate) {
        this.bookDate = bookDate;
    }

    @JsonProperty("unit_sort_order")
    public Integer getUnitSortOrder() {
        return unitSortOrder;
    }

    public void setUnitSortOrder(Integer unitSortOrder) {
        this.unitSortOrder = unitSortOrder;
    }
}
