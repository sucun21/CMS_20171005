package com.sogo.lmscms.model.response.offlineclass;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import com.sogo.lmscms.model.response.offlineclass.GroupClassSchedule;

public class GroupClassItem {
	private Integer groupClassId;
	private String groupClassName;
	private Date startDate;
	private Integer startDateInWeek;
	private Time startTime;
	private Integer limitUser;
	private String trainerName;
	private String centerName;
	private String courseTitle;
	private Boolean isActive;
	private Integer totalRow;
	private String unitTitle;
	private String classTypeName;
	private List<GroupClassSchedule> listSchedule;
	public Integer getGroupClassId() {
		return groupClassId;
	}
	public void setGroupClassId(Integer groupClassId) {
		this.groupClassId = groupClassId;
	}
	public String getGroupClassName() {
		return groupClassName;
	}
	public void setGroupClassName(String groupClassName) {
		this.groupClassName = groupClassName;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Integer getStartDateInWeek() {
		return startDateInWeek;
	}
	public void setStartDateInWeek(Integer startDateInWeek) {
		this.startDateInWeek = startDateInWeek;
	}
	public Time getStartTime() {
		return startTime;
	}
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	public Integer getLimitUser() {
		return limitUser;
	}
	public void setLimitUser(Integer limitUser) {
		this.limitUser = limitUser;
	}
	public String getTrainerName() {
		return trainerName;
	}
	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getCourseTitle() {
		return courseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	public Integer getTotalRow() {
		return totalRow;
	}
	public void setTotalRow(Integer totalRow) {
		this.totalRow = totalRow;
	}
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public String getClassTypeName() {
		return classTypeName;
	}
	public void setClassTypeName(String classTypeName) {
		this.classTypeName = classTypeName;
	}
	public List<GroupClassSchedule> getListSchedule() {
		return listSchedule;
	}
	public void setListSchedule(List<GroupClassSchedule> listSchedule) {
		this.listSchedule = listSchedule;
	}
}
