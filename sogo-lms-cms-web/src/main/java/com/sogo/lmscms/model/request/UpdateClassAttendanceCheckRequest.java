package com.sogo.lmscms.model.request;

public class UpdateClassAttendanceCheckRequest {
	private Integer classId;
	private Integer trainerId;

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

}
