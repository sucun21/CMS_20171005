package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class ClassInfo implements Serializable {
	private Integer classId;
	private String courseTitle;
	private String unitTitle;
	private Timestamp studyDateTime;
	private Boolean isAttended;
	private String userEmail;
	private String centerName;
	private String teacherName;
	private String groupClassName;
	private Integer unitId;
	private Integer centerId;
	private Boolean isRetake;
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public String getCourseTitle() {
		return courseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public Timestamp getStudyDateTime() {
		return studyDateTime;
	}
	public void setStudyDateTime(Timestamp studyDateTime) {
		this.studyDateTime = studyDateTime;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
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
	public Boolean getIsAttended() {
		return isAttended;
	}
	public void setIsAttended(Boolean isAttended) {
		this.isAttended = isAttended;
	}
	public String getGroupClassName() {
		return groupClassName;
	}
	public void setGroupClassName(String groupClassName) {
		this.groupClassName = groupClassName;
	}
	public Integer getUnitId() {
		return unitId;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Boolean getIsRetake() {
		return isRetake;
	}
	public void setIsRetake(Boolean isRetake) {
		this.isRetake = isRetake;
	}
	
}
