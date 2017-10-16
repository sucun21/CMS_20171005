package vn.sogo.lmscms.model;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class OfflineClassQuizReportStudent implements Serializable {
	private Integer userId;
	private String studentName;
	private Timestamp submissionTime;
	private Integer totalAnswerRight;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public Timestamp getSubmissionTime() {
		return submissionTime;
	}
	public void setSubmissionTime(Timestamp submissionTime) {
		this.submissionTime = submissionTime;
	}
	public Integer getTotalAnswerRight() {
		return totalAnswerRight;
	}
	public void setTotalAnswerRight(Integer totalAnswerRight) {
		this.totalAnswerRight = totalAnswerRight;
	}
}
