package vn.sogo.lmscms.model.request;

public class GetIncomingClassRequest {
	private Boolean isAdmin;
	private Integer courseId;
	private Integer centerId;
	private Integer trainerId;
	private Integer nextDayNum;
	
	public Boolean getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
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
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
	public Integer getNextDayNum() {
		return nextDayNum;
	}
	public void setNextDayNum(Integer nextDayNum) {
		this.nextDayNum = nextDayNum;
	}
}
