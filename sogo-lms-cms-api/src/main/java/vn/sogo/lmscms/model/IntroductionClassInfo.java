package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class IntroductionClassInfo implements Serializable {
	private Integer classId;
	private String centerName;
	private Timestamp studyDateTime;
	private String trainerName;
	private Integer totalUserBooked;
	private Integer limitUser;
	
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public Timestamp getStudyDateTime() {
		return studyDateTime;
	}
	public void setStudyDateTime(Timestamp studyDateTime) {
		this.studyDateTime = studyDateTime;
	}
	public String getTrainerName() {
		return trainerName;
	}
	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
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
