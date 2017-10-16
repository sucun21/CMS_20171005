package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_offline_group_class", schema = "", catalog = "lms_portal")
public class SgOfflineGroupClassEntity {
    private Integer groupClassId;
    private Integer classTypeId;
    private Integer centerId;
    private Integer trainerId;
    private Integer courseId;
    private Integer unitStartId;
    private Date startDate;
    private Integer startDateInWeek;
    private Time startTime;
    private Integer limitUser;
    private Byte isActive;
    private Byte isDelete;
    private Timestamp createdDate;
    private Integer createdBy;
    private Timestamp modifiedDate;
    private Integer modifiedBy;

    @Id
    @Column(name = "group_class_id")
    public Integer getGroupClassId() {
        return groupClassId;
    }

    public void setGroupClassId(Integer groupClassId) {
        this.groupClassId = groupClassId;
    }

    @Basic
    @Column(name = "class_type_id")
    public Integer getClassTypeId() {
        return classTypeId;
    }

    public void setClassTypeId(Integer classTypeId) {
        this.classTypeId = classTypeId;
    }

    @Basic
    @Column(name = "center_id")
    public Integer getCenterId() {
        return centerId;
    }

    public void setCenterId(Integer centerId) {
        this.centerId = centerId;
    }

    @Basic
    @Column(name = "trainer_id")
    public Integer getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Integer trainerId) {
        this.trainerId = trainerId;
    }

    @Basic
    @Column(name = "course_id")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    @Basic
    @Column(name = "unit_start_id")
    public Integer getUnitStartId() {
        return unitStartId;
    }

    public void setUnitStartId(Integer unitStartId) {
        this.unitStartId = unitStartId;
    }

    @Basic
    @Column(name = "start_date")
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "start_date_in_week")
    public Integer getStartDateInWeek() {
        return startDateInWeek;
    }

    public void setStartDateInWeek(Integer startDateInWeek) {
        this.startDateInWeek = startDateInWeek;
    }

    @Basic
    @Column(name = "start_time")
    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "limit_user")
    public Integer getLimitUser() {
        return limitUser;
    }

    public void setLimitUser(Integer limitUser) {
        this.limitUser = limitUser;
    }

    @Basic
    @Column(name = "is_active")
    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
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

        SgOfflineGroupClassEntity that = (SgOfflineGroupClassEntity) o;

        if (groupClassId != null ? !groupClassId.equals(that.groupClassId) : that.groupClassId != null) return false;
        if (classTypeId != null ? !classTypeId.equals(that.classTypeId) : that.classTypeId != null) return false;
        if (centerId != null ? !centerId.equals(that.centerId) : that.centerId != null) return false;
        if (trainerId != null ? !trainerId.equals(that.trainerId) : that.trainerId != null) return false;
        if (courseId != null ? !courseId.equals(that.courseId) : that.courseId != null) return false;
        if (unitStartId != null ? !unitStartId.equals(that.unitStartId) : that.unitStartId != null) return false;
        if (startDate != null ? !startDate.equals(that.startDate) : that.startDate != null) return false;
        if (startDateInWeek != null ? !startDateInWeek.equals(that.startDateInWeek) : that.startDateInWeek != null)
            return false;
        if (startTime != null ? !startTime.equals(that.startTime) : that.startTime != null) return false;
        if (limitUser != null ? !limitUser.equals(that.limitUser) : that.limitUser != null) return false;
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
        int result = groupClassId != null ? groupClassId.hashCode() : 0;
        result = 31 * result + (classTypeId != null ? classTypeId.hashCode() : 0);
        result = 31 * result + (centerId != null ? centerId.hashCode() : 0);
        result = 31 * result + (trainerId != null ? trainerId.hashCode() : 0);
        result = 31 * result + (courseId != null ? courseId.hashCode() : 0);
        result = 31 * result + (unitStartId != null ? unitStartId.hashCode() : 0);
        result = 31 * result + (startDate != null ? startDate.hashCode() : 0);
        result = 31 * result + (startDateInWeek != null ? startDateInWeek.hashCode() : 0);
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + (limitUser != null ? limitUser.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }
}
