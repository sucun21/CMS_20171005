package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_trainee_rate", schema = "", catalog = "lms_portal")
public class SgTraineeRateEntity {
    private Integer lessonRateId;
    private Integer courseTraineeId;
    private Integer unitId;
    private Integer lessonId;
    private Integer range;
    private String comment;
    private Timestamp createdDate;
    private Integer createdBy;
    private Timestamp modifiedDate;
    private Integer modifiedBy;

    @Id
    @Column(name = "lesson_rate_id")
    public Integer getLessonRateId() {
        return lessonRateId;
    }

    public void setLessonRateId(Integer lessonRateId) {
        this.lessonRateId = lessonRateId;
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
    @Column(name = "lesson_id")
    public Integer getLessonId() {
        return lessonId;
    }

    public void setLessonId(Integer lessonId) {
        this.lessonId = lessonId;
    }

    @Basic
    @Column(name = "range")
    public Integer getRange() {
        return range;
    }

    public void setRange(Integer range) {
        this.range = range;
    }

    @Basic
    @Column(name = "comment")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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

        SgTraineeRateEntity that = (SgTraineeRateEntity) o;

        if (lessonRateId != null ? !lessonRateId.equals(that.lessonRateId) : that.lessonRateId != null) return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (unitId != null ? !unitId.equals(that.unitId) : that.unitId != null) return false;
        if (lessonId != null ? !lessonId.equals(that.lessonId) : that.lessonId != null) return false;
        if (range != null ? !range.equals(that.range) : that.range != null) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = lessonRateId != null ? lessonRateId.hashCode() : 0;
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (unitId != null ? unitId.hashCode() : 0);
        result = 31 * result + (lessonId != null ? lessonId.hashCode() : 0);
        result = 31 * result + (range != null ? range.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }
}
