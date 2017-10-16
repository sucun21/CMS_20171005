package vn.sogo.lmscms.model.request.coursecms;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class ExcuteTrainerCourse implements Serializable {
	private Integer courseId;
	private Integer trainerId;
	private String executeType;
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public String getExecuteType() {
		return executeType;
	}
	public void setExecuteType(String executeType) {
		this.executeType = executeType;
	}
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
}
