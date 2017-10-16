package com.sogo.lmscms.model.request;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
public class GetStudentRequest implements Serializable {

    private String searchKey;
    private Integer centerId;
    private Integer courseId;
    private Boolean studentStatus;
    private Integer pageNumber;
    private Integer pageSize;
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
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
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public Boolean getStudentStatus() {
		return studentStatus;
	}
	public void setStudentStatus(Boolean studentStatus) {
		this.studentStatus = studentStatus;
	}
}
