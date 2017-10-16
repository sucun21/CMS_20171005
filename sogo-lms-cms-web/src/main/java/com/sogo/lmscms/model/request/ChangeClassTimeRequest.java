package com.sogo.lmscms.model.request;

import java.sql.Timestamp;

public class ChangeClassTimeRequest {
	private Boolean isAdmin;
	private Integer classId;
	private Integer trainerId;
	private Timestamp newClassTime;
	
	public Boolean getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
	public Timestamp getNewClassTime() {
		return newClassTime;
	}
	public void setNewClassTime(Timestamp newClassTime) {
		this.newClassTime = newClassTime;
	}
}
