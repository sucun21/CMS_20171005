package com.sogo.lmscms.model.request;

public class ChangeClassTrainerRequest {
	private Boolean isAdmin;
	private Integer classId;
	private Integer trainerId;
	private Integer newTrainerId;
	
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
	public Integer getNewTrainerId() {
		return newTrainerId;
	}
	public void setNewTrainerId(Integer newTrainerId) {
		this.newTrainerId = newTrainerId;
	}
}
