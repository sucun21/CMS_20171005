package com.sogo.lmscms.model.response;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@SuppressWarnings("serial")
public class StudentQuiz implements Serializable {
	private Timestamp startTime;
	private Timestamp endTime;
	private Integer timeSpend;
	private String activityName;
	private Integer traineeActivityId;
	private List<StudentQuizDetail> listQuizDetail;
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
	public Integer getTimeSpend() {
		return timeSpend;
	}
	public void setTimeSpend(Integer timeSpend) {
		this.timeSpend = timeSpend;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	public Integer getTraineeActivityId() {
		return traineeActivityId;
	}
	public void setTraineeActivityId(Integer traineeActivityId) {
		this.traineeActivityId = traineeActivityId;
	}
	public List<StudentQuizDetail> getListQuizDetail() {
		return listQuizDetail;
	}
	public void setListQuizDetail(List<StudentQuizDetail> listQuizDetail) {
		this.listQuizDetail = listQuizDetail;
	}
}
