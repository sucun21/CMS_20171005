package com.sogo.lmscms.model.response;

import java.io.Serializable;

@SuppressWarnings("serial")
public class StudentQuizDetail implements Serializable {
	private String questionTitle;
	private Integer questionTypeId;
	private String rightAnswerIndex;
	private String traineeAnswer;
	private Boolean isTraineeAnswerRight;
	public String getQuestionTitle() {
		return questionTitle;
	}
	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}
	public Integer getQuestionTypeId() {
		return questionTypeId;
	}
	public void setQuestionTypeId(Integer questionTypeId) {
		this.questionTypeId = questionTypeId;
	}
	public String getRightAnswerIndex() {
		return rightAnswerIndex;
	}
	public void setRightAnswerIndex(String rightAnswerIndex) {
		this.rightAnswerIndex = rightAnswerIndex;
	}
	public String getTraineeAnswer() {
		return traineeAnswer;
	}
	public void setTraineeAnswer(String traineeAnswer) {
		this.traineeAnswer = traineeAnswer;
	}
	public Boolean getIsTraineeAnswerRight() {
		return isTraineeAnswerRight;
	}
	public void setIsTraineeAnswerRight(Boolean isTraineeAnswerRight) {
		this.isTraineeAnswerRight = isTraineeAnswerRight;
	}
}
