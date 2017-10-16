package com.sogo.lmscms.model.request;

public class RetakeStudentClassRequest {
	private Integer courseTraineeId;
	private Integer classId;
	private Integer unitId;
	private Integer createdBy;
	private Integer oldClassId;
	public Integer getCourseTraineeId() {
		return courseTraineeId;
	}
	public void setCourseTraineeId(Integer courseTraineeId) {
		this.courseTraineeId = courseTraineeId;
	}
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public Integer getUnitId() {
		return unitId;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}
	public Integer getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}
	public Integer getOldClassId() {
		return oldClassId;
	}
	public void setOldClassId(Integer oldClassId) {
		this.oldClassId = oldClassId;
	}
}
