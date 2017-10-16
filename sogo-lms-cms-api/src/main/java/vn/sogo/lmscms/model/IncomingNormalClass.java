package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class IncomingNormalClass implements Serializable {
	private Integer classId;
	private Integer groupClassId;
	private Timestamp studyDateTime;
	private Timestamp studyDate;
	private String trainerName;
	private String groupClassName;
	private String centerName;
	private Integer totalUserBooked;
	private Integer limitUser;
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public Integer getGroupClassId() {
		return groupClassId;
	}
	public void setGroupClassId(Integer groupClassId) {
		this.groupClassId = groupClassId;
	}
	public Timestamp getStudyDateTime() {
		return studyDateTime;
	}
	public void setStudyDateTime(Timestamp studyDateTime) {
		this.studyDateTime = studyDateTime;
	}
	public Timestamp getStudyDate() {
		return studyDate;
	}
	public void setStudyDate(Timestamp studyDate) {
		this.studyDate = studyDate;
	}
	public String getTrainerName() {
		return trainerName;
	}
	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
	}
	public String getGroupClassName() {
		return groupClassName;
	}
	public void setGroupClassName(String groupClassName) {
		this.groupClassName = groupClassName;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
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
}
