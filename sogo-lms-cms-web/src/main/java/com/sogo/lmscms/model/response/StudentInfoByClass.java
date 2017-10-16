package com.sogo.lmscms.model.response;

import java.io.Serializable;

@SuppressWarnings("serial")
public class StudentInfoByClass implements Serializable {
	private Integer userId;
	private String userEmail;
	private String userPhone;
	private String fullName;
	private Float unitScore;
	private Integer unitTimeSpend;
	private Float unitCompletion;
	private Boolean isAttended;
	private Integer courseId;
	private Integer courseTraineeId;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public Float getUnitScore() {
		return unitScore;
	}
	public void setUnitScore(Float unitScore) {
		this.unitScore = unitScore;
	}
	public Integer getUnitTimeSpend() {
		return unitTimeSpend;
	}
	public void setUnitTimeSpend(Integer unitTimeSpend) {
		this.unitTimeSpend = unitTimeSpend;
	}
	public Float getUnitCompletion() {
		return unitCompletion;
	}
	public void setUnitCompletion(Float unitCompletion) {
		this.unitCompletion = unitCompletion;
	}
	public Boolean getIsAttended() {
		return isAttended;
	}
	public void setIsAttended(Boolean isAttended) {
		this.isAttended = isAttended;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
}
