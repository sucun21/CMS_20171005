package vn.sogo.lmscms.model;

import java.sql.Timestamp;

public class OfflineClassForRetake {
	private Integer classId;
	private Integer totalUserBooked;
	private Integer limitUser;
	private String groupClassName;
	private Timestamp studyDateTime;
	private String centerName;
	private String trainerName;
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public Integer getTotalUserBooked() {
		return totalUserBooked;
	}
	public void setTotalUserBooked(Integer totalUserBooked) {
		this.totalUserBooked = totalUserBooked;
	}
	public Integer getLimitUser() {
		return limitUser;
	}
	public void setLimitUser(Integer limitUser) {
		this.limitUser = limitUser;
	}
	public String getGroupClassName() {
		return groupClassName;
	}
	public void setGroupClassName(String groupClassName) {
		this.groupClassName = groupClassName;
	}
	public Timestamp getStudyDateTime() {
		return studyDateTime;
	}
	public void setStudyDateTime(Timestamp studyDateTime) {
		this.studyDateTime = studyDateTime;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getTrainerName() {
		return trainerName;
	}
	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
	}
}
