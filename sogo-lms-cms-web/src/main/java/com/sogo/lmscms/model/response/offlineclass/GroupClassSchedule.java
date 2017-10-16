package com.sogo.lmscms.model.response.offlineclass;

import java.sql.Timestamp;

public class GroupClassSchedule {
	private Integer weekNumber;
	private String weekDuration;
	private Timestamp classDateTime;
	private Integer totalBooked;
	private String unitTitle;
	public Integer getWeekNumber() {
		return weekNumber;
	}
	public void setWeekNumber(Integer weekNumber) {
		this.weekNumber = weekNumber;
	}
	public String getWeekDuration() {
		return weekDuration;
	}
	public void setWeekDuration(String weekDuration) {
		this.weekDuration = weekDuration;
	}
	public Timestamp getClassDateTime() {
		return classDateTime;
	}
	public void setClassDateTime(Timestamp classDateTime) {
		this.classDateTime = classDateTime;
	}
	public Integer getTotalBooked() {
		return totalBooked;
	}
	public void setTotalBooked(Integer totalBooked) {
		this.totalBooked = totalBooked;
	}
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
}
