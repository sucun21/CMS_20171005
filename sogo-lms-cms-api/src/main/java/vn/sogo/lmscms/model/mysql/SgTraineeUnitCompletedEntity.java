package vn.sogo.lmscms.model.mysql;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_trainee_unit_completed", schema = "", catalog = "lms_portal")
@DynamicInsert
public class SgTraineeUnitCompletedEntity {
    private Integer traineeUnitCompletedId;
    private Integer courseTraineeId;
    private Integer unitCompletedId;
    private Timestamp completedDate;
    private Timestamp createdDate;
    private Integer createdBy;

    @Id
    @Column(name = "trainee_unit_completed_id")
    @GeneratedValue
    public Integer getTraineeUnitCompletedId() {
        return traineeUnitCompletedId;
    }

    public void setTraineeUnitCompletedId(Integer traineeUnitCompletedId) {
        this.traineeUnitCompletedId = traineeUnitCompletedId;
    }

    @Basic
    @Column(name = "course_trainee_id")
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(Integer courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    @Basic
    @Column(name = "unit_completed_id")
    public Integer getUnitCompletedId() {
        return unitCompletedId;
    }

    public void setUnitCompletedId(Integer unitCompletedId) {
        this.unitCompletedId = unitCompletedId;
    }

    @Basic
    @Column(name = "completed_date")
    public Timestamp getCompletedDate() {
        return completedDate;
    }

    public void setCompletedDate(Timestamp completedDate) {
        this.completedDate = completedDate;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SgTraineeUnitCompletedEntity that = (SgTraineeUnitCompletedEntity) o;

        if (traineeUnitCompletedId != null ? !traineeUnitCompletedId.equals(that.traineeUnitCompletedId) : that.traineeUnitCompletedId != null)
            return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (unitCompletedId != null ? !unitCompletedId.equals(that.unitCompletedId) : that.unitCompletedId != null)
            return false;
        if (completedDate != null ? !completedDate.equals(that.completedDate) : that.completedDate != null)
            return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = traineeUnitCompletedId != null ? traineeUnitCompletedId.hashCode() : 0;
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (unitCompletedId != null ? unitCompletedId.hashCode() : 0);
        result = 31 * result + (completedDate != null ? completedDate.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        return result;
    }
}
