package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@javax.persistence.Table(name = "sg_offline_class", schema = "", catalog = "lms_portal")
public class SgOfflineClassEntity {
    private Integer classId;

    @Id
    @javax.persistence.Column(name = "class_id")
    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    private Integer classTypeId;

    @Basic
    @javax.persistence.Column(name = "class_type_id")
    public Integer getClassTypeId() {
        return classTypeId;
    }

    public void setClassTypeId(Integer classTypeId) {
        this.classTypeId = classTypeId;
    }

    private Integer classStatusId;

    @Basic
    @javax.persistence.Column(name = "class_status_id")
    public Integer getClassStatusId() {
        return classStatusId;
    }

    public void setClassStatusId(Integer classStatusId) {
        this.classStatusId = classStatusId;
    }

    private String classIconName;

    @Basic
    @javax.persistence.Column(name = "class_icon_name")
    public String getClassIconName() {
        return classIconName;
    }

    public void setClassIconName(String classIconName) {
        this.classIconName = classIconName;
    }

    private Integer groupClassId;

    @Basic
    @javax.persistence.Column(name = "group_class_id", insertable = false, updatable = false)
    public Integer getGroupClassId() {
        return groupClassId;
    }

    public void setGroupClassId(Integer groupClassId) {
        this.groupClassId = groupClassId;
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

    private Integer trainerId;

    @Basic
    @javax.persistence.Column(name = "trainer_id")
    public Integer getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Integer trainerId) {
        this.trainerId = trainerId;
    }

    private Date studyDate;

    @Basic
    @javax.persistence.Column(name = "study_date")
    public Date getStudyDate() {
        return studyDate;
    }

    public void setStudyDate(Date studyDate) {
        this.studyDate = studyDate;
    }

    private Time studyTime;

    @Basic
    @javax.persistence.Column(name = "study_time")
    public Time getStudyTime() {
        return studyTime;
    }

    public void setStudyTime(Time studyTime) {
        this.studyTime = studyTime;
    }

    private Integer totalUserBooked;

    @Basic
    @javax.persistence.Column(name = "total_user_booked")
    public Integer getTotalUserBooked() {
        return totalUserBooked;
    }

    public void setTotalUserBooked(Integer totalUserBooked) {
        this.totalUserBooked = totalUserBooked;
    }

    private Integer totalUserAttended;

    @Basic
    @javax.persistence.Column(name = "total_user_attended")
    public Integer getTotalUserAttended() {
        return totalUserAttended;
    }

    public void setTotalUserAttended(Integer totalUserAttended) {
        this.totalUserAttended = totalUserAttended;
    }

    private Integer limitUser;

    @Basic
    @javax.persistence.Column(name = "limit_user")
    public Integer getLimitUser() {
        return limitUser;
    }

    public void setLimitUser(Integer limitUser) {
        this.limitUser = limitUser;
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

        SgOfflineClassEntity that = (SgOfflineClassEntity) o;

        if (classId != null ? !classId.equals(that.classId) : that.classId != null) return false;
        if (classTypeId != null ? !classTypeId.equals(that.classTypeId) : that.classTypeId != null) return false;
        if (classStatusId != null ? !classStatusId.equals(that.classStatusId) : that.classStatusId != null)
            return false;
        if (classIconName != null ? !classIconName.equals(that.classIconName) : that.classIconName != null)
            return false;
        if (groupClassId != null ? !groupClassId.equals(that.groupClassId) : that.groupClassId != null) return false;
        if (unitId != null ? !unitId.equals(that.unitId) : that.unitId != null) return false;
        if (trainerId != null ? !trainerId.equals(that.trainerId) : that.trainerId != null) return false;
        if (studyDate != null ? !studyDate.equals(that.studyDate) : that.studyDate != null) return false;
        if (studyTime != null ? !studyTime.equals(that.studyTime) : that.studyTime != null) return false;
        if (totalUserBooked != null ? !totalUserBooked.equals(that.totalUserBooked) : that.totalUserBooked != null)
            return false;
        if (totalUserAttended != null ? !totalUserAttended.equals(that.totalUserAttended) : that.totalUserAttended != null)
            return false;
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
        int result = classId != null ? classId.hashCode() : 0;
        result = 31 * result + (classTypeId != null ? classTypeId.hashCode() : 0);
        result = 31 * result + (classStatusId != null ? classStatusId.hashCode() : 0);
        result = 31 * result + (classIconName != null ? classIconName.hashCode() : 0);
        result = 31 * result + (groupClassId != null ? groupClassId.hashCode() : 0);
        result = 31 * result + (unitId != null ? unitId.hashCode() : 0);
        result = 31 * result + (trainerId != null ? trainerId.hashCode() : 0);
        result = 31 * result + (studyDate != null ? studyDate.hashCode() : 0);
        result = 31 * result + (studyTime != null ? studyTime.hashCode() : 0);
        result = 31 * result + (totalUserBooked != null ? totalUserBooked.hashCode() : 0);
        result = 31 * result + (totalUserAttended != null ? totalUserAttended.hashCode() : 0);
        result = 31 * result + (limitUser != null ? limitUser.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }

    private SgOfflineGroupClassEntity sgOfflineGroupClassEntityByGroupClassId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_class_id", referencedColumnName = "group_class_id", nullable = false)
    public SgOfflineGroupClassEntity getSgOfflineGroupClassEntityByGroupClassId() {
        return sgOfflineGroupClassEntityByGroupClassId;
    }

    public void setSgOfflineGroupClassEntityByGroupClassId(SgOfflineGroupClassEntity sgOfflineGroupClassEntityByGroupClassId) {
        this.sgOfflineGroupClassEntityByGroupClassId = sgOfflineGroupClassEntityByGroupClassId;
    }
}
