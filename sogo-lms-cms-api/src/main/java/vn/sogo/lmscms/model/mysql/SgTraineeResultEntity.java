package vn.sogo.lmscms.model.mysql;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@javax.persistence.Table(name = "sg_trainee_result", schema = "", catalog = "lms_portal")
@DynamicInsert
public class SgTraineeResultEntity {
    private Integer traineeResultId;

    @Id
    @javax.persistence.Column(name = "trainee_result_id")
    @GeneratedValue
    public Integer getTraineeResultId() {
        return traineeResultId;
    }

    public void setTraineeResultId(Integer traineeResultId) {
        this.traineeResultId = traineeResultId;
    }

    private Integer courseTraineeId;

    @Basic
    @javax.persistence.Column(name = "course_trainee_id", insertable = false, updatable = false)
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(Integer courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    private Integer lastDoneUnitId;

    @Basic
    @javax.persistence.Column(name = "last_done_unit_id")
    public Integer getLastDoneUnitId() {
        return lastDoneUnitId;
    }

    public void setLastDoneUnitId(Integer lastDoneUnitId) {
        this.lastDoneUnitId = lastDoneUnitId;
    }

    private Integer lastDoneLessonId;

    @Basic
    @javax.persistence.Column(name = "last_done_lesson_id")
    public Integer getLastDoneLessonId() {
        return lastDoneLessonId;
    }

    public void setLastDoneLessonId(Integer lastDoneLessonId) {
        this.lastDoneLessonId = lastDoneLessonId;
    }

    private Integer lastDoneActivityId;

    @Basic
    @javax.persistence.Column(name = "last_done_activity_id")
    public Integer getLastDoneActivityId() {
        return lastDoneActivityId;
    }

    public void setLastDoneActivityId(Integer lastDoneActivityId) {
        this.lastDoneActivityId = lastDoneActivityId;
    }

    private Integer currentUnitId;

    @Basic
    @javax.persistence.Column(name = "current_unit_id")
    public Integer getCurrentUnitId() {
        return currentUnitId;
    }

    public void setCurrentUnitId(Integer currentUnitId) {
        this.currentUnitId = currentUnitId;
    }

    private Integer currentLessonId;

    @Basic
    @javax.persistence.Column(name = "current_lesson_id")
    public Integer getCurrentLessonId() {
        return currentLessonId;
    }

    public void setCurrentLessonId(Integer currentLessonId) {
        this.currentLessonId = currentLessonId;
    }

    private Integer nextActivityId;

    @Basic
    @javax.persistence.Column(name = "next_activity_id")
    public Integer getNextActivityId() {
        return nextActivityId;
    }

    public void setNextActivityId(Integer nextActivityId) {
        this.nextActivityId = nextActivityId;
    }

    private Time unitRemainTime;

    @Basic
    @javax.persistence.Column(name = "unit_remain_time")
    public Time getUnitRemainTime() {
        return unitRemainTime;
    }

    public void setUnitRemainTime(Time unitRemainTime) {
        this.unitRemainTime = unitRemainTime;
    }

    private String lastGoalContent;

    @Basic
    @javax.persistence.Column(name = "last_goal_content")
    public String getLastGoalContent() {
        return lastGoalContent;
    }

    public void setLastGoalContent(String lastGoalContent) {
        this.lastGoalContent = lastGoalContent;
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

        SgTraineeResultEntity that = (SgTraineeResultEntity) o;

        if (traineeResultId != null ? !traineeResultId.equals(that.traineeResultId) : that.traineeResultId != null)
            return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (lastDoneUnitId != null ? !lastDoneUnitId.equals(that.lastDoneUnitId) : that.lastDoneUnitId != null)
            return false;
        if (lastDoneLessonId != null ? !lastDoneLessonId.equals(that.lastDoneLessonId) : that.lastDoneLessonId != null)
            return false;
        if (lastDoneActivityId != null ? !lastDoneActivityId.equals(that.lastDoneActivityId) : that.lastDoneActivityId != null)
            return false;
        if (currentUnitId != null ? !currentUnitId.equals(that.currentUnitId) : that.currentUnitId != null)
            return false;
        if (currentLessonId != null ? !currentLessonId.equals(that.currentLessonId) : that.currentLessonId != null)
            return false;
        if (nextActivityId != null ? !nextActivityId.equals(that.nextActivityId) : that.nextActivityId != null)
            return false;
        if (unitRemainTime != null ? !unitRemainTime.equals(that.unitRemainTime) : that.unitRemainTime != null)
            return false;
        if (lastGoalContent != null ? !lastGoalContent.equals(that.lastGoalContent) : that.lastGoalContent != null)
            return false;
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
        int result = traineeResultId != null ? traineeResultId.hashCode() : 0;
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (lastDoneUnitId != null ? lastDoneUnitId.hashCode() : 0);
        result = 31 * result + (lastDoneLessonId != null ? lastDoneLessonId.hashCode() : 0);
        result = 31 * result + (lastDoneActivityId != null ? lastDoneActivityId.hashCode() : 0);
        result = 31 * result + (currentUnitId != null ? currentUnitId.hashCode() : 0);
        result = 31 * result + (currentLessonId != null ? currentLessonId.hashCode() : 0);
        result = 31 * result + (nextActivityId != null ? nextActivityId.hashCode() : 0);
        result = 31 * result + (unitRemainTime != null ? unitRemainTime.hashCode() : 0);
        result = 31 * result + (lastGoalContent != null ? lastGoalContent.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }

    private SgCourseTraineeEntity sgCourseTraineeEntityByCourseTraineeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_trainee_id", referencedColumnName = "course_trainee_id", nullable = false)
    public SgCourseTraineeEntity getSgCourseTraineeEntityByCourseTraineeId() {
        return sgCourseTraineeEntityByCourseTraineeId;
    }

    public void setSgCourseTraineeEntityByCourseTraineeId(SgCourseTraineeEntity sgCourseTraineeEntityByCourseTraineeId) {
        this.sgCourseTraineeEntityByCourseTraineeId = sgCourseTraineeEntityByCourseTraineeId;
    }
}
