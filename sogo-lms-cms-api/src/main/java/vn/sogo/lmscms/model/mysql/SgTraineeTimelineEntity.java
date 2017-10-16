package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Arrays;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_trainee_timeline", schema = "", catalog = "lms_portal")
public class SgTraineeTimelineEntity {
    private Integer traineeTimelineId;
    private Integer timelineTypeId;
    private Integer traineeId;
    private Integer courseId;
    private Integer mappingId;
    private byte[] postContent;
    private Integer postBy;
    private String postByName;
    private Byte isShowTimeline;
    private Byte isDelete;
    private Timestamp createdDate;
    private Integer createdBy;
    private Timestamp modifiedDate;
    private Integer modifiedBy;

    @Id
    @Column(name = "trainee_timeline_id")
    public Integer getTraineeTimelineId() {
        return traineeTimelineId;
    }

    public void setTraineeTimelineId(Integer traineeTimelineId) {
        this.traineeTimelineId = traineeTimelineId;
    }

    @Basic
    @Column(name = "timeline_type_id")
    public Integer getTimelineTypeId() {
        return timelineTypeId;
    }

    public void setTimelineTypeId(Integer timelineTypeId) {
        this.timelineTypeId = timelineTypeId;
    }

    @Basic
    @Column(name = "trainee_id")
    public Integer getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(Integer traineeId) {
        this.traineeId = traineeId;
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
    @Column(name = "mapping_id")
    public Integer getMappingId() {
        return mappingId;
    }

    public void setMappingId(Integer mappingId) {
        this.mappingId = mappingId;
    }

    @Basic
    @Column(name = "post_content")
    public byte[] getPostContent() {
        return postContent;
    }

    public void setPostContent(byte[] postContent) {
        this.postContent = postContent;
    }

    @Basic
    @Column(name = "post_by")
    public Integer getPostBy() {
        return postBy;
    }

    public void setPostBy(Integer postBy) {
        this.postBy = postBy;
    }

    @Basic
    @Column(name = "post_by_name")
    public String getPostByName() {
        return postByName;
    }

    public void setPostByName(String postByName) {
        this.postByName = postByName;
    }

    @Basic
    @Column(name = "is_show_timeline")
    public Byte getIsShowTimeline() {
        return isShowTimeline;
    }

    public void setIsShowTimeline(Byte isShowTimeline) {
        this.isShowTimeline = isShowTimeline;
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

        SgTraineeTimelineEntity that = (SgTraineeTimelineEntity) o;

        if (traineeTimelineId != null ? !traineeTimelineId.equals(that.traineeTimelineId) : that.traineeTimelineId != null)
            return false;
        if (timelineTypeId != null ? !timelineTypeId.equals(that.timelineTypeId) : that.timelineTypeId != null)
            return false;
        if (traineeId != null ? !traineeId.equals(that.traineeId) : that.traineeId != null) return false;
        if (courseId != null ? !courseId.equals(that.courseId) : that.courseId != null) return false;
        if (mappingId != null ? !mappingId.equals(that.mappingId) : that.mappingId != null) return false;
        if (!Arrays.equals(postContent, that.postContent)) return false;
        if (postBy != null ? !postBy.equals(that.postBy) : that.postBy != null) return false;
        if (postByName != null ? !postByName.equals(that.postByName) : that.postByName != null) return false;
        if (isShowTimeline != null ? !isShowTimeline.equals(that.isShowTimeline) : that.isShowTimeline != null)
            return false;
        if (isDelete != null ? !isDelete.equals(that.isDelete) : that.isDelete != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = traineeTimelineId != null ? traineeTimelineId.hashCode() : 0;
        result = 31 * result + (timelineTypeId != null ? timelineTypeId.hashCode() : 0);
        result = 31 * result + (traineeId != null ? traineeId.hashCode() : 0);
        result = 31 * result + (courseId != null ? courseId.hashCode() : 0);
        result = 31 * result + (mappingId != null ? mappingId.hashCode() : 0);
        result = 31 * result + (postContent != null ? Arrays.hashCode(postContent) : 0);
        result = 31 * result + (postBy != null ? postBy.hashCode() : 0);
        result = 31 * result + (postByName != null ? postByName.hashCode() : 0);
        result = 31 * result + (isShowTimeline != null ? isShowTimeline.hashCode() : 0);
        result = 31 * result + (isDelete != null ? isDelete.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }
}
