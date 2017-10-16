package com.sogo.lmscms.model.response;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class ClassSchedule implements Serializable {
	private Integer classId;
	private String unitTitle;
	private String centerName;
	private String teacherName;
	private Timestamp studyDateTime;
	private Boolean isCheckAttendance;
	private Boolean isIncomingClass;
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public Timestamp getStudyDateTime() {
		return studyDateTime;
	}
	public void setStudyDateTime(Timestamp studyDateTime) {
		this.studyDateTime = studyDateTime;
	}
	public Boolean getIsCheckAttendance() {
		return isCheckAttendance;
	}
	public void setIsCheckAttendance(Boolean isCheckAttendance) {
		this.isCheckAttendance = isCheckAttendance;
	}
	public Boolean getIsIncomingClass() {
		return isIncomingClass;
	}
	public void setIsIncomingClass(Boolean isIncomingClass) {
		this.isIncomingClass = isIncomingClass;
	}
}
