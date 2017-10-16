package com.sogo.lmscms.model.view.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStudentDetailLogActivityDataRequest {
	private Integer traineeId;
	private Integer courseTraineeId;
	
	public Integer getTraineeId() {
		return traineeId;
	}
	public void setTraineeId(Integer traineeId) {
		this.traineeId = traineeId;
	}
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
}
