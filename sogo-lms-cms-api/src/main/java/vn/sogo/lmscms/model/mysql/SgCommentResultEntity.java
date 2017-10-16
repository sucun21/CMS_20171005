package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_comment_result", schema = "", catalog = "lms_portal")
public class SgCommentResultEntity {
    private Integer commentResultId;
    private String commentResultName;
    private String description;

    @Id
    @Column(name = "comment_result_id")
    public Integer getCommentResultId() {
        return commentResultId;
    }

    public void setCommentResultId(Integer commentResultId) {
        this.commentResultId = commentResultId;
    }

    @Basic
    @Column(name = "comment_result_name")
    public String getCommentResultName() {
        return commentResultName;
    }

    public void setCommentResultName(String commentResultName) {
        this.commentResultName = commentResultName;
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

        SgCommentResultEntity that = (SgCommentResultEntity) o;

        if (commentResultId != null ? !commentResultId.equals(that.commentResultId) : that.commentResultId != null)
            return false;
        if (commentResultName != null ? !commentResultName.equals(that.commentResultName) : that.commentResultName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = commentResultId != null ? commentResultId.hashCode() : 0;
        result = 31 * result + (commentResultName != null ? commentResultName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
