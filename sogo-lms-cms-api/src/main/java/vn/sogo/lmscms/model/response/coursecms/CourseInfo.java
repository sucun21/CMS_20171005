package vn.sogo.lmscms.model.response.coursecms;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class CourseInfo implements Serializable {
	private Integer courseId;
	private String courseTitle;
	private String courseDes;
	private String courseShortDes;
	private String courseImage;
	private List<TrainerCourseInfo> trainerInfo;
	private List<UnitInCourse>    unitInfo;
	public List<TrainerCourseInfo> getTrainerInfo() {
		return trainerInfo;
	}
	public void setTrainerInfo(List<TrainerCourseInfo> trainerInfo) {
		this.trainerInfo = trainerInfo;
	}
	public List<UnitInCourse> getUnitInfo() {
		return unitInfo;
	}
	public void setUnitInfo(List<UnitInCourse> unitInfo) {
		this.unitInfo = unitInfo;
	}
	public String getCourseImage() {
		return courseImage;
	}
	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
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
	public String getCourseDes() {
		return courseDes;
	}
	public void setCourseDes(String courseDes) {
		this.courseDes = courseDes;
	}
	public String getCourseShortDes() {
		return courseShortDes;
	}
	public void setCourseShortDes(String courseShortDes) {
		this.courseShortDes = courseShortDes;
	}
}
