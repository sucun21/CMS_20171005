package com.sogo.lmscms.model.response;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class StudentProperty implements Serializable {
	private String propertyName;
	private Timestamp startTime;
	private Timestamp endTime;
	private Integer timeSpend;
	private String traineeAnswer;
	private String activityName;
	public String getPropertyName() {
		return propertyName;
	}
	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}
	public Timestamp getStartTime() {
		return startTime;
	}
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	public Timestamp getEndTime() {
		return endTime;
	}
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	public String getTraineeAnswer() {
		return traineeAnswer;
	}
	public void setTraineeAnswer(String traineeAnswer) {
		this.traineeAnswer = traineeAnswer;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	public Integer getTimeSpend() {
		return timeSpend;
	}
	public void setTimeSpend(Integer timeSpend) {
		this.timeSpend = timeSpend;
	}
	
}
