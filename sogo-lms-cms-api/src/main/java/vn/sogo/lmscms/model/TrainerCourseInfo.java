package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class TrainerCourseInfo implements Serializable {
	private Integer userId;
	private String fullName;
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}	
}
