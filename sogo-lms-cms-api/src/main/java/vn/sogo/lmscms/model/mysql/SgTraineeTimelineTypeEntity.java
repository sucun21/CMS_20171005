package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_trainee_timeline_type", schema = "", catalog = "lms_portal")
public class SgTraineeTimelineTypeEntity {
    private Integer timelineTypeId;
    private String timelineTypeName;
    private String description;

    @Id
    @Column(name = "timeline_type_id")
    public Integer getTimelineTypeId() {
        return timelineTypeId;
    }

    public void setTimelineTypeId(Integer timelineTypeId) {
        this.timelineTypeId = timelineTypeId;
    }

    @Basic
    @Column(name = "timeline_type_name")
    public String getTimelineTypeName() {
        return timelineTypeName;
    }

    public void setTimelineTypeName(String timelineTypeName) {
        this.timelineTypeName = timelineTypeName;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SgTraineeTimelineTypeEntity that = (SgTraineeTimelineTypeEntity) o;

        if (timelineTypeId != null ? !timelineTypeId.equals(that.timelineTypeId) : that.timelineTypeId != null)
            return false;
        if (timelineTypeName != null ? !timelineTypeName.equals(that.timelineTypeName) : that.timelineTypeName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = timelineTypeId != null ? timelineTypeId.hashCode() : 0;
        result = 31 * result + (timelineTypeName != null ? timelineTypeName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
