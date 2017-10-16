package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class ClassInfoById implements Serializable {
	private Integer classId;
	private String courseTitle;
	private String unitTitle;
	private Timestamp studyDateTime;
	private String userEmail;
	private String centerName;
	private String teacherName;
	private Integer teacherId;
    private Boolean isAttendanceCheck;
    private Boolean isPastClass;
    private Integer classTypeId;
    private String classTypeName;
    private Boolean isUpcomingIn15Min;
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
	
	public Integer getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(Integer teacherId) {
		this.teacherId = teacherId;
	}
	public Boolean getIsAttendanceCheck() {
		return isAttendanceCheck;
	}
	public void setIsAttendanceCheck(Boolean isAttendanceCheck) {
		this.isAttendanceCheck = isAttendanceCheck;
	}
	public Boolean getIsPastClass() {
		return isPastClass;
	}
	public void setIsPastClass(Boolean isPastClass) {
		this.isPastClass = isPastClass;
	}
	public Integer getClassTypeId() {
		return classTypeId;
	}
	public void setClassTypeId(Integer classTypeId) {
		this.classTypeId = classTypeId;
	}
	public String getClassTypeName() {
		return classTypeName;
	}
	public void setClassTypeName(String classTypeName) {
		this.classTypeName = classTypeName;
	}
	public Boolean getIsUpcomingIn15Min() {
		return isUpcomingIn15Min;
	}
	public void setIsUpcomingIn15Min(Boolean isUpcomingIn15Min) {
		this.isUpcomingIn15Min = isUpcomingIn15Min;
	}
}
