package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_comment_type", schema = "", catalog = "lms_portal")
public class SgCommentTypeEntity {
    private Integer commentTypeId;
    private String commentTypeName;
    private String description;

    @Id
    @Column(name = "comment_type_id")
    public Integer getCommentTypeId() {
        return commentTypeId;
    }

    public void setCommentTypeId(Integer commentTypeId) {
        this.commentTypeId = commentTypeId;
    }

    @Basic
    @Column(name = "comment_type_name")
    public String getCommentTypeName() {
        return commentTypeName;
    }

    public void setCommentTypeName(String commentTypeName) {
        this.commentTypeName = commentTypeName;
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

        SgCommentTypeEntity that = (SgCommentTypeEntity) o;

        if (commentTypeId != null ? !commentTypeId.equals(that.commentTypeId) : that.commentTypeId != null)
            return false;
        if (commentTypeName != null ? !commentTypeName.equals(that.commentTypeName) : that.commentTypeName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = commentTypeId != null ? commentTypeId.hashCode() : 0;
        result = 31 * result + (commentTypeName != null ? commentTypeName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
