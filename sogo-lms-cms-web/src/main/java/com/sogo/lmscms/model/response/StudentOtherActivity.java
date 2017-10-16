package com.sogo.lmscms.model.response;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class StudentOtherActivity implements Serializable {
	private Timestamp startTime;
	private Timestamp endTime;
	private Integer timeSpend;
	private String activityName;
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
