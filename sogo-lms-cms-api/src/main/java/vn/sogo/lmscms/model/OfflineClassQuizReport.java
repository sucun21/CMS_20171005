package vn.sogo.lmscms.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class OfflineClassQuizReport implements Serializable {
	private String lessonTitle;
	private Integer activityId;
	private String activityName;
	private Integer totalStudentDone;
	private Integer totalStudent;
	private Integer totalLowQuestion;
	private Integer totalQuestion;
	public String getLessonTitle() {
		return lessonTitle;
	}
	public void setLessonTitle(String lessonTitle) {
		this.lessonTitle = lessonTitle;
	}
	public Integer getActivityId() {
		return activityId;
	}
	public void setActivityId(Integer activityId) {
		this.activityId = activityId;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	public Integer getTotalStudentDone() {
		return totalStudentDone;
	}
	public void setTotalStudentDone(Integer totalStudentDone) {
		this.totalStudentDone = totalStudentDone;
	}
	public Integer getTotalStudent() {
		return totalStudent;
	}
	public void setTotalStudent(Integer totalStudent) {
		this.totalStudent = totalStudent;
	}
	public Integer getTotalLowQuestion() {
		return totalLowQuestion;
	}
	public void setTotalLowQuestion(Integer totalLowQuestion) {
		this.totalLowQuestion = totalLowQuestion;
	}
	public Integer getTotalQuestion() {
		return totalQuestion;
	}
	public void setTotalQuestion(Integer totalQuestion) {
		this.totalQuestion = totalQuestion;
	}
}
