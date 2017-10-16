package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_offline_class_status", schema = "", catalog = "lms_portal")
public class SgOfflineClassStatusEntity {
    private Integer classStatusId;
    private String classStatusName;
    private String description;

    @Id
    @Column(name = "class_status_id")
    public Integer getClassStatusId() {
        return classStatusId;
    }

    public void setClassStatusId(Integer classStatusId) {
        this.classStatusId = classStatusId;
    }

    @Basic
    @Column(name = "class_status_name")
    public String getClassStatusName() {
        return classStatusName;
    }

    public void setClassStatusName(String classStatusName) {
        this.classStatusName = classStatusName;
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

        SgOfflineClassStatusEntity that = (SgOfflineClassStatusEntity) o;

        if (classStatusId != null ? !classStatusId.equals(that.classStatusId) : that.classStatusId != null)
            return false;
        if (classStatusName != null ? !classStatusName.equals(that.classStatusName) : that.classStatusName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = classStatusId != null ? classStatusId.hashCode() : 0;
        result = 31 * result + (classStatusName != null ? classStatusName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
