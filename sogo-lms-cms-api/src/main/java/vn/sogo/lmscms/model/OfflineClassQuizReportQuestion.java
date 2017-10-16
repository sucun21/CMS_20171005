package vn.sogo.lmscms.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class OfflineClassQuizReportQuestion implements Serializable {
	private Integer questionId;
	private String questionTitle;
	private String rightAnswerIndex;
	private String rightAnswer;
	public Integer getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}
	public String getQuestionTitle() {
		return questionTitle;
	}
	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}
	public String getRightAnswerIndex() {
		return rightAnswerIndex;
	}
	public void setRightAnswerIndex(String rightAnswerIndex) {
		this.rightAnswerIndex = rightAnswerIndex;
	}
	public String getRightAnswer() {
		return rightAnswer;
	}
	public void setRightAnswer(String rightAnswer) {
		this.rightAnswer = rightAnswer;
	}
}
