package com.sogo.lmscms.model.request;

import java.sql.Timestamp;

public class GetIncomingNormalClassRequest {
	private Integer centerId;
    private Integer courseId;
    private Timestamp introClassTime;
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Timestamp getIntroClassTime() {
		return introClassTime;
	}
	public void setIntroClassTime(Timestamp introClassTime) {
		this.introClassTime = introClassTime;
	}
}
