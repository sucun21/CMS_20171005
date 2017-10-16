package com.sogo.lmscms.model.request;

public class UpdateStudentCourseStatusRequest {
	private Integer courseTraineeId;
	private Boolean currentStatus;
	private Boolean newStatus;
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
	public Boolean getCurrentStatus() {
		return currentStatus;
	}
	public void setCurrentStatus(Boolean currentStatus) {
		this.currentStatus = currentStatus;
	}
	public Boolean getNewStatus() {
		return newStatus;
	}
	public void setNewStatus(Boolean newStatus) {
		this.newStatus = newStatus;
	}
}
