package com.sogo.lmscms.model.response;

import java.io.Serializable;

@SuppressWarnings("serial")
public class OfflineClassQuizReportSummary implements Serializable {
	private String unitTitle;
	private String lessonTitle;
	private String activityName;
	private Integer numberOfQuestion;
	private Integer totalLowQuestion;
	private Integer totalStudentDone;
	private Float avarageRightAnswer;
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public String getLessonTitle() {
		return lessonTitle;
	}
	public void setLessonTitle(String lessonTitle) {
		this.lessonTitle = lessonTitle;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	public Integer getNumberOfQuestion() {
		return numberOfQuestion;
	}
	public void setNumberOfQuestion(Integer numberOfQuestion) {
		this.numberOfQuestion = numberOfQuestion;
	}
	public Integer getTotalLowQuestion() {
		return totalLowQuestion;
	}
	public void setTotalLowQuestion(Integer totalLowQuestion) {
		this.totalLowQuestion = totalLowQuestion;
	}
	public Integer getTotalStudentDone() {
		return totalStudentDone;
	}
	public void setTotalStudentDone(Integer totalStudentDone) {
		this.totalStudentDone = totalStudentDone;
	}
	public Float getAvarageRightAnswer() {
		return avarageRightAnswer;
	}
	public void setAvarageRightAnswer(Float avarageRightAnswer) {
		this.avarageRightAnswer = avarageRightAnswer;
	}
}
