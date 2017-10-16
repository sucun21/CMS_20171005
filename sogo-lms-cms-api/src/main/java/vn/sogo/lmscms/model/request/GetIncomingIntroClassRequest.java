package vn.sogo.lmscms.model.request;

public class GetIncomingIntroClassRequest {
	private Integer centerId;
    private Integer courseId;
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
    
    
}
