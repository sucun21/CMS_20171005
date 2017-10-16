package vn.sogo.lmscms.model.request;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
public class GetAllGroupClassRequest implements Serializable {
	private String searchKey;
	private Integer trainerId;
	private Integer courseId;
	private Integer centerId;
	private Integer pageNumber;
	private Integer pageSize;
	private Integer classTypeId;
	private Boolean statusId;
	private Integer weekView;
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
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
	public Integer getClassTypeId() {
		return classTypeId;
	}
	public void setClassTypeId(Integer classTypeId) {
		this.classTypeId = classTypeId;
	}
	public Boolean getStatusId() {
		return statusId;
	}
	public void setStatusId(Boolean statusId) {
		this.statusId = statusId;
	}
	public Integer getWeekView() {
		return weekView;
	}
	public void setWeekView(Integer weekView) {
		this.weekView = weekView;
	}
}
