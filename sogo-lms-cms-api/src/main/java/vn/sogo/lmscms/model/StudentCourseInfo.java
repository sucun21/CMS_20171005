package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class StudentCourseInfo implements Serializable {
	private Integer courseTraineeId;
	private Integer courseId;
	private Date startDate;
	private Date endDate;
	private String courseTitle;
	private String contractNo;
	private String centerName;
	private Integer currentUnitId;
	private Integer currentLessonId;
	private Integer currentActivityId;
	private Timestamp estimateStartDate;
	private Timestamp estimateEndDate;
	private Timestamp actualStartDate;
	private Timestamp actualEndDate;
	private Boolean isActive;
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getCourseTitle() {
		return courseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}
	public String getContractNo() {
		return contractNo;
	}
	public void setContractNo(String contractNo) {
		this.contractNo = contractNo;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public Integer getCurrentUnitId() {
		return currentUnitId;
	}
	public void setCurrentUnitId(Integer currentUnitId) {
		this.currentUnitId = currentUnitId;
	}
	public Integer getCurrentLessonId() {
		return currentLessonId;
	}
	public void setCurrentLessonId(Integer currentLessonId) {
		this.currentLessonId = currentLessonId;
	}
	public Integer getCurrentActivityId() {
		return currentActivityId;
	}
	public void setCurrentActivityId(Integer currentActivityId) {
		this.currentActivityId = currentActivityId;
	}
	public Timestamp getEstimateStartDate() {
		return estimateStartDate;
	}
	public void setEstimateStartDate(Timestamp estimateStartDate) {
		this.estimateStartDate = estimateStartDate;
	}
	public Timestamp getEstimateEndDate() {
		return estimateEndDate;
	}
	public void setEstimateEndDate(Timestamp estimateEndDate) {
		this.estimateEndDate = estimateEndDate;
	}
	public Timestamp getActualStartDate() {
		return actualStartDate;
	}
	public void setActualStartDate(Timestamp actualStartDate) {
		this.actualStartDate = actualStartDate;
	}
	public Timestamp getActualEndDate() {
		return actualEndDate;
	}
	public void setActualEndDate(Timestamp actualEndDate) {
		this.actualEndDate = actualEndDate;
	}
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
}
