package vn.sogo.lmscms.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class UserType implements Serializable {
	private Integer userTypeId;
	private String userTypeName;
	public Integer getUserTypeId() {
		return userTypeId;
	}
	public void setUserTypeId(Integer userTypeId) {
		this.userTypeId = userTypeId;
	}
	public String getUserTypeName() {
		return userTypeName;
	}
	public void setUserTypeName(String userTypeName) {
		this.userTypeName = userTypeName;
	}
}
