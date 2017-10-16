package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_offline_class_type", schema = "", catalog = "lms_portal")
public class SgOfflineClassTypeEntity {
    private Integer classTypeId;
    private String classTypeName;
    private String description;

    @Id
    @Column(name = "class_type_id")
    public Integer getClassTypeId() {
        return classTypeId;
    }

    public void setClassTypeId(Integer classTypeId) {
        this.classTypeId = classTypeId;
    }

    @Basic
    @Column(name = "class_type_name")
    public String getClassTypeName() {
        return classTypeName;
    }

    public void setClassTypeName(String classTypeName) {
        this.classTypeName = classTypeName;
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

        SgOfflineClassTypeEntity that = (SgOfflineClassTypeEntity) o;

        if (classTypeId != null ? !classTypeId.equals(that.classTypeId) : that.classTypeId != null) return false;
        if (classTypeName != null ? !classTypeName.equals(that.classTypeName) : that.classTypeName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = classTypeId != null ? classTypeId.hashCode() : 0;
        result = 31 * result + (classTypeName != null ? classTypeName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
