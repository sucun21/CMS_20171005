package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class StudentCourse implements Serializable {
	private Timestamp startDate;
	private Timestamp endDate;
	private Integer courseId;
	private String courseTitle;
	private Integer courseTraineeId;
	private String centerName;
	private Integer missedClass;
	private Integer attendedClass;
	private Integer totalClass;
	private Integer completedUnit;
	private Integer totalUnit;
	private Integer retakeClass;
	private Integer uncompletedUnit;
	private Boolean isCourseActive;
	private String contractNo;
	public Timestamp getStartDate() {
		return startDate;
	}
	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	public Timestamp getEndDate() {
		return endDate;
	}
	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public String getCourseTitle() {
		return courseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public Integer getMissedClass() {
		return missedClass;
	}
	public void setMissedClass(Integer missedClass) {
		this.missedClass = missedClass;
	}
	public Integer getAttendedClass() {
		return attendedClass;
	}
	public void setAttendedClass(Integer attendedClass) {
		this.attendedClass = attendedClass;
	}
	public Integer getTotalClass() {
		return totalClass;
	}
	public void setTotalClass(Integer totalClass) {
		this.totalClass = totalClass;
	}
	public Integer getCompletedUnit() {
		return completedUnit;
	}
	public void setCompletedUnit(Integer completedUnit) {
		this.completedUnit = completedUnit;
	}
	public Integer getTotalUnit() {
		return totalUnit;
	}
	public void setTotalUnit(Integer totalUnit) {
		this.totalUnit = totalUnit;
	}
	public Integer getRetakeClass() {
		return retakeClass;
	}
	public void setRetakeClass(Integer retakeClass) {
		this.retakeClass = retakeClass;
	}
	public Integer getUncompletedUnit() {
		return uncompletedUnit;
	}
	public void setUncompletedUnit(Integer uncompletedUnit) {
		this.uncompletedUnit = uncompletedUnit;
	}
	public Boolean getIsCourseActive() {
		return isCourseActive;
	}
	public void setIsCourseActive(Boolean isCourseActive) {
		this.isCourseActive = isCourseActive;
	}
	public String getContractNo() {
		return contractNo;
	}
	public void setContractNo(String contractNo) {
		this.contractNo = contractNo;
	}
}
