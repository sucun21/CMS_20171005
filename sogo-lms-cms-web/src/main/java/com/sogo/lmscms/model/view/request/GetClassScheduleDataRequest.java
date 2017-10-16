package com.sogo.lmscms.model.view.request;

public class GetClassScheduleDataRequest {
	private Boolean isAdmin;
	private Integer nextDayNum;
	private Integer courseId;
	private Integer centerId;
	private Integer trainerId;
	
	public Boolean getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	public Integer getNextDayNum() {
		return nextDayNum;
	}
	public void setNextDayNum(Integer nextDayNum) {
		this.nextDayNum = nextDayNum;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
	
	
}
