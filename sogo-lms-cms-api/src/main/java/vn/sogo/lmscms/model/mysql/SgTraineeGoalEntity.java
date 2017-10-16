package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_trainee_goal", schema = "", catalog = "lms_portal")
public class SgTraineeGoalEntity {
    private Integer traineeGoalId;
    private Integer courseTraineeId;
    private String goalContent;
    private Byte isActive;
    private Timestamp createdDate;
    private Integer createdBy;
    private Timestamp modifiedDate;
    private Integer modifiedBy;

    private SgCourseTraineeEntity sgCourseTraineeIdBySgCourseTrainee;

    @Id
    @Column(name = "trainee_goal_id")
    @GeneratedValue
    public Integer getTraineeGoalId() {
        return traineeGoalId;
    }

    public void setTraineeGoalId(Integer traineeGoalId) {
        this.traineeGoalId = traineeGoalId;
    }

    @Basic
    @Column(name = "course_trainee_id", insertable = false, updatable = false)
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(Integer courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    @Basic
    @Column(name = "goal_content")
    public String getGoalContent() {
        return goalContent;
    }

    public void setGoalContent(String goalContent) {
        this.goalContent = goalContent;
    }

    @Basic
    @Column(name = "is_active")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    @Basic
    @Column(name = "created_date")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    @Basic
    @Column(name = "created_by")
    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    @Basic
    @Column(name = "modified_date")
    public Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    @Basic
    @Column(name = "modified_by")
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

        SgTraineeGoalEntity that = (SgTraineeGoalEntity) o;

        if (traineeGoalId != null ? !traineeGoalId.equals(that.traineeGoalId) : that.traineeGoalId != null)
            return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (goalContent != null ? !goalContent.equals(that.goalContent) : that.goalContent != null) return false;
        if (isActive != null ? !isActive.equals(that.isActive) : that.isActive != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = traineeGoalId != null ? traineeGoalId.hashCode() : 0;
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (goalContent != null ? goalContent.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_trainee_id", referencedColumnName = "course_trainee_id", nullable = false)
    public SgCourseTraineeEntity getSgCourseTraineeIdBySgCourseTrainee() {
        return sgCourseTraineeIdBySgCourseTrainee;
    }

    public void setSgCourseTraineeIdBySgCourseTrainee(SgCourseTraineeEntity sgCourseTraineeIdBySgCourseTrainee) {
        this.sgCourseTraineeIdBySgCourseTrainee = sgCourseTraineeIdBySgCourseTrainee;
    }
}
