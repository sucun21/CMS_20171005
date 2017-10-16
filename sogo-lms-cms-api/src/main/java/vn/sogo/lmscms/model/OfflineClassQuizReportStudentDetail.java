package vn.sogo.lmscms.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class OfflineClassQuizReportStudentDetail implements Serializable {
	private Integer userId;
	private Integer questionId;
	private Boolean isTraineeAnswerRight;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}
	public Boolean getIsTraineeAnswerRight() {
		return isTraineeAnswerRight;
	}
	public void setIsTraineeAnswerRight(Boolean isTraineeAnswerRight) {
		this.isTraineeAnswerRight = isTraineeAnswerRight;
	}
	
	
}
