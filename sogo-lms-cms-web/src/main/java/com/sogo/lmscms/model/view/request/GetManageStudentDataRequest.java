package com.sogo.lmscms.model.view.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetManageStudentDataRequest {
	private String searchKey;
	private Integer courseId;
	private Integer centerId;
	private Boolean studentStatus;
	private Integer pageNumber;
	private Integer pageSize;
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Boolean getStudentStatus() {
		return studentStatus;
	}
	public void setStudentStatus(Boolean studentStatus) {
		this.studentStatus = studentStatus;
	}
	
	@JsonProperty("p")
	public Integer getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(Integer pageNumber) {
		this.pageNumber = pageNumber;
	}
	
	@JsonProperty("ps")
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	
	
}
