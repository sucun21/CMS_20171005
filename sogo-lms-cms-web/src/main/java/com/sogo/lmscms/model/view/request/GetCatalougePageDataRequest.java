package com.sogo.lmscms.model.view.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCatalougePageDataRequest {
	private Integer courseId;
	private Integer unitId;
	private Integer lessonId;
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Integer getUnitId() {
		return unitId;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}
	public Integer getLessonId() {
		return lessonId;
	}
	public void setLessonId(Integer lessonId) {
		this.lessonId = lessonId;
	}
}
