package vn.sogo.lmscms.model.mysql;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Arrays;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@javax.persistence.Table(name = "sg_trainee_activity", schema = "", catalog = "lms_portal")
@DynamicInsert
public class SgTraineeActivityEntity {
    private Integer traineeActivityId;

    @Id
    @javax.persistence.Column(name = "trainee_activity_id")
    @GeneratedValue
    public Integer getTraineeActivityId() {
        return traineeActivityId;
    }

    public void setTraineeActivityId(Integer traineeActivityId) {
        this.traineeActivityId = traineeActivityId;
    }

    private Integer courseTraineeId;

    @Basic
    @javax.persistence.Column(name = "course_trainee_id")
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(Integer courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    private Integer lessonId;

    @Basic
    @javax.persistence.Column(name = "lesson_id")
    public Integer getLessonId() {
        return lessonId;
    }

    public void setLessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    private Integer activityId;

    @Basic
    @javax.persistence.Column(name = "activity_id")
    public Integer getActivityId() {
        return activityId;
    }

    public void setActivityId(Integer activityId) {
        this.activityId = activityId;
    }

    private Integer scoreArchived;

    @Basic
    @javax.persistence.Column(name = "score_archived")
    public Integer getScoreArchived() {
        return scoreArchived;
    }

    public void setScoreArchived(Integer scoreArchived) {
        this.scoreArchived = scoreArchived;
    }

    private Timestamp learnedDate;

    @Basic
    @javax.persistence.Column(name = "learned_date")
    public Timestamp getLearnedDate() {
        return learnedDate;
    }

    public void setLearnedDate(Timestamp learnedDate) {
        this.learnedDate = learnedDate;
    }

    private String activityResult;

    @Basic
    @javax.persistence.Column(name = "activity_result")
    public String getActivityResult() {
        return activityResult;
    }

    public void setActivityResult(String activityResult) {
        this.activityResult = activityResult;
    }

    private Integer unitId;

    @Basic
    @javax.persistence.Column(name = "unit_id")
    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }

    private String unitTitle;

    @Basic
    @javax.persistence.Column(name = "unit_title")
    public String getUnitTitle() {
        return unitTitle;
    }

    public void setUnitTitle(String unitTitle) {
        this.unitTitle = unitTitle;
    }

    private byte[] unitDes;

    @Basic
    @javax.persistence.Column(name = "unit_des")
    public byte[] getUnitDes() {
        return unitDes;
    }

    public void setUnitDes(byte[] unitDes) {
        this.unitDes = unitDes;
    }

    private String lessonTitle;

    @Basic
    @javax.persistence.Column(name = "lesson_title")
    public String getLessonTitle() {
        return lessonTitle;
    }

    public void setLessonTitle(String lessonTitle) {
        this.lessonTitle = lessonTitle;
    }

    private byte[] lessonDes;

    @Basic
    @javax.persistence.Column(name = "lesson_des")
    public byte[] getLessonDes() {
        return lessonDes;
    }

    public void setLessonDes(byte[] lessonDes) {
        this.lessonDes = lessonDes;
    }

    private String activityName;

    @Basic
    @javax.persistence.Column(name = "activity_name")
    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    private Integer activityLength;

    @Basic
    @javax.persistence.Column(name = "activity_length")
    public Integer getActivityLength() {
        return activityLength;
    }

    public void setActivityLength(Integer activityLength) {
        this.activityLength = activityLength;
    }

    private byte[] activityData;

    @Basic
    @javax.persistence.Column(name = "activity_data")
    public byte[] getActivityData() {
        return activityData;
    }

    public void setActivityData(byte[] activityData) {
        this.activityData = activityData;
    }

    private Integer activityTime;

    @Basic
    @javax.persistence.Column(name = "activity_time")
    public Integer getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(Integer activityTime) {
        this.activityTime = activityTime;
    }

    private String videoUrl;

    @Basic
    @javax.persistence.Column(name = "video_url")
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    private Integer propertyId;

    @Basic
    @javax.persistence.Column(name = "property_id")
    public Integer getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
    }

    private Byte isActive;

    @Basic
    @javax.persistence.Column(name = "is_active")
    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    private Byte isDelete;

    @Basic
    @javax.persistence.Column(name = "is_delete")
    public Byte getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Byte isDelete) {
        this.isDelete = isDelete;
    }

    private Timestamp createdDate;

    @Basic
    @javax.persistence.Column(name = "created_date")
    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    private Integer createdBy;

    @Basic
    @javax.persistence.Column(name = "created_by")
    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    private Timestamp modifiedDate;

    @Basic
    @javax.persistence.Column(name = "modified_date")
    public Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    private Integer modifiedBy;

    @Basic
    @javax.persistence.Column(name = "modified_by")
    public Integer getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(Integer modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SgTraineeActivityEntity that = (SgTraineeActivityEntity) o;

        if (traineeActivityId != null ? !traineeActivityId.equals(that.traineeActivityId) : that.traineeActivityId != null)
            return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (lessonId != null ? !lessonId.equals(that.lessonId) : that.lessonId != null) return false;
        if (activityId != null ? !activityId.equals(that.activityId) : that.activityId != null) return false;
        if (scoreArchived != null ? !scoreArchived.equals(that.scoreArchived) : that.scoreArchived != null)
            return false;
        if (learnedDate != null ? !learnedDate.equals(that.learnedDate) : that.learnedDate != null) return false;
        if (activityResult != null ? !activityResult.equals(that.activityResult) : that.activityResult != null)
            return false;
        if (unitId != null ? !unitId.equals(that.unitId) : that.unitId != null) return false;
        if (unitTitle != null ? !unitTitle.equals(that.unitTitle) : that.unitTitle != null) return false;
        if (!Arrays.equals(unitDes, that.unitDes)) return false;
        if (lessonTitle != null ? !lessonTitle.equals(that.lessonTitle) : that.lessonTitle != null) return false;
        if (!Arrays.equals(lessonDes, that.lessonDes)) return false;
        if (activityName != null ? !activityName.equals(that.activityName) : that.activityName != null) return false;
        if (activityLength != null ? !activityLength.equals(that.activityLength) : that.activityLength != null)
            return false;
        if (!Arrays.equals(activityData, that.activityData)) return false;
        if (activityTime != null ? !activityTime.equals(that.activityTime) : that.activityTime != null) return false;
        if (videoUrl != null ? !videoUrl.equals(that.videoUrl) : that.videoUrl != null) return false;
        if (propertyId != null ? !propertyId.equals(that.propertyId) : that.propertyId != null) return false;
        if (isActive != null ? !isActive.equals(that.isActive) : that.isActive != null) return false;
        if (isDelete != null ? !isDelete.equals(that.isDelete) : that.isDelete != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = traineeActivityId != null ? traineeActivityId.hashCode() : 0;
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (lessonId != null ? lessonId.hashCode() : 0);
        result = 31 * result + (activityId != null ? activityId.hashCode() : 0);
        result = 31 * result + (scoreArchived != null ? scoreArchived.hashCode() : 0);
        result = 31 * result + (learnedDate != null ? learnedDate.hashCode() : 0);
        result = 31 * result + (activityResult != null ? activityResult.hashCode() : 0);
        result = 31 * result + (unitId != null ? unitId.hashCode() : 0);
        result = 31 * result + (unitTitle != null ? unitTitle.hashCode() : 0);
        result = 31 * result + (unitDes != null ? Arrays.hashCode(unitDes) : 0);
        result = 31 * result + (lessonTitle != null ? lessonTitle.hashCode() : 0);
        result = 31 * result + (lessonDes != null ? Arrays.hashCode(lessonDes) : 0);
        result = 31 * result + (activityName != null ? activityName.hashCode() : 0);
        result = 31 * result + (activityLength != null ? activityLength.hashCode() : 0);
        result = 31 * result + (activityData != null ? Arrays.hashCode(activityData) : 0);
        result = 31 * result + (activityTime != null ? activityTime.hashCode() : 0);
        result = 31 * result + (videoUrl != null ? videoUrl.hashCode() : 0);
        result = 31 * result + (propertyId != null ? propertyId.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }
}
