package vn.sogo.lmscms.model.mysql;

import javax.persistence.*;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@Table(name = "sg_account_type", schema = "", catalog = "lms_portal")
public class SgAccountTypeEntity {
    private Integer accountTypeId;
    private String accountTypeName;
    private String description;

    @Id
    @Column(name = "account_type_id")
    public Integer getAccountTypeId() {
        return accountTypeId;
    }

    public void setAccountTypeId(Integer accountTypeId) {
        this.accountTypeId = accountTypeId;
    }

    @Basic
    @Column(name = "account_type_name")
    public String getAccountTypeName() {
        return accountTypeName;
    }

    public void setAccountTypeName(String accountTypeName) {
        this.accountTypeName = accountTypeName;
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

        SgAccountTypeEntity that = (SgAccountTypeEntity) o;

        if (accountTypeId != null ? !accountTypeId.equals(that.accountTypeId) : that.accountTypeId != null)
            return false;
        if (accountTypeName != null ? !accountTypeName.equals(that.accountTypeName) : that.accountTypeName != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = accountTypeId != null ? accountTypeId.hashCode() : 0;
        result = 31 * result + (accountTypeName != null ? accountTypeName.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
