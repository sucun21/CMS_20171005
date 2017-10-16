package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_offline_class_trainee", schema = "", catalog = "lms_portal")
public class SgOfflineClassTraineeEntity {
    private Integer classTraineeId;
    private Integer classId;
    private Integer courseTraineeId;
    private Integer unitId;
    private String trainerComment;
    private Timestamp bookedDate;
    private Byte isAttended;
    private Byte isCancel;
    private Timestamp cancelDate;
    private Byte isDelete;
    private Timestamp createdDate;
    private Integer createdBy;
    private Timestamp modifiedDate;
    private Integer modifiedBy;

    private SgOfflineClassEntity sgOfflineClassByClassId;

    @Id
    @Column(name = "class_trainee_id")
    public Integer getClassTraineeId() {
        return classTraineeId;
    }

    public void setClassTraineeId(Integer classTraineeId) {
        this.classTraineeId = classTraineeId;
    }

    @Basic
    @Column(name = "class_id", insertable = false, updatable = false)
    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
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
    @Column(name = "unit_id")
    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }

    @Basic
    @Column(name = "trainer_comment")
    public String getTrainerComment() {
        return trainerComment;
    }

    public void setTrainerComment(String trainerComment) {
        this.trainerComment = trainerComment;
    }

    @Basic
    @Column(name = "booked_date")
    public Timestamp getBookedDate() {
        return bookedDate;
    }

    public void setBookedDate(Timestamp bookedDate) {
        this.bookedDate = bookedDate;
    }

    @Basic
    @Column(name = "is_attended")
    public Byte getIsAttended() {
        return isAttended;
    }

    public void setIsAttended(Byte isAttended) {
        this.isAttended = isAttended;
    }

    @Basic
    @Column(name = "is_cancel")
    public Byte getIsCancel() {
        return isCancel;
    }

    public void setIsCancel(Byte isCancel) {
        this.isCancel = isCancel;
    }

    @Basic
    @Column(name = "cancel_date")
    public Timestamp getCancelDate() {
        return cancelDate;
    }

    public void setCancelDate(Timestamp cancelDate) {
        this.cancelDate = cancelDate;
    }

    @Basic
    @Column(name = "is_delete")
    public Byte getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Byte isDelete) {
        this.isDelete = isDelete;
    }

    @Basic
    @Column(name = "created_date")
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

        SgOfflineClassTraineeEntity that = (SgOfflineClassTraineeEntity) o;

        if (classTraineeId != null ? !classTraineeId.equals(that.classTraineeId) : that.classTraineeId != null)
            return false;
        if (classId != null ? !classId.equals(that.classId) : that.classId != null) return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (unitId != null ? !unitId.equals(that.unitId) : that.unitId != null) return false;
        if (trainerComment != null ? !trainerComment.equals(that.trainerComment) : that.trainerComment != null)
            return false;
        if (bookedDate != null ? !bookedDate.equals(that.bookedDate) : that.bookedDate != null) return false;
        if (isAttended != null ? !isAttended.equals(that.isAttended) : that.isAttended != null) return false;
        if (isCancel != null ? !isCancel.equals(that.isCancel) : that.isCancel != null) return false;
        if (cancelDate != null ? !cancelDate.equals(that.cancelDate) : that.cancelDate != null) return false;
        if (isDelete != null ? !isDelete.equals(that.isDelete) : that.isDelete != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = classTraineeId != null ? classTraineeId.hashCode() : 0;
        result = 31 * result + (classId != null ? classId.hashCode() : 0);
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (unitId != null ? unitId.hashCode() : 0);
        result = 31 * result + (trainerComment != null ? trainerComment.hashCode() : 0);
        result = 31 * result + (bookedDate != null ? bookedDate.hashCode() : 0);
        result = 31 * result + (isAttended != null ? isAttended.hashCode() : 0);
        result = 31 * result + (isCancel != null ? isCancel.hashCode() : 0);
        result = 31 * result + (cancelDate != null ? cancelDate.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "class_id", referencedColumnName = "class_id", nullable = false)
    public SgOfflineClassEntity getSgOfflineClassByClassId() {
        return sgOfflineClassByClassId;
    }

    public void setSgOfflineClassByClassId(SgOfflineClassEntity sgOfflineClassByClassId) {
        this.sgOfflineClassByClassId = sgOfflineClassByClassId;
    }
}
