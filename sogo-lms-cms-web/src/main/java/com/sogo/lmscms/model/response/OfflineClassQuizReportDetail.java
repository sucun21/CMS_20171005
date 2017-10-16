package com.sogo.lmscms.model.response;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class OfflineClassQuizReportDetail implements Serializable {
	
	private OfflineClassQuizReportSummary reportSummary;
	private List<OfflineClassQuizReportStudent> listStudent;
	private List<OfflineClassQuizReportStudentDetail> listStudentDetail;
	private List<OfflineClassQuizReportQuestion> listQuestion;

	public OfflineClassQuizReportSummary getReportSummary() {
		return reportSummary;
	}

	public void setReportSummary(OfflineClassQuizReportSummary reportSummary) {
		this.reportSummary = reportSummary;
	}

	public List<OfflineClassQuizReportStudent> getListStudent() {
		return listStudent;
	}

	public void setListStudent(List<OfflineClassQuizReportStudent> listStudent) {
		this.listStudent = listStudent;
	}

	public List<OfflineClassQuizReportStudentDetail> getListStudentDetail() {
		return listStudentDetail;
	}

	public void setListStudentDetail(List<OfflineClassQuizReportStudentDetail> listStudentDetail) {
		this.listStudentDetail = listStudentDetail;
	}

	public List<OfflineClassQuizReportQuestion> getListQuestion() {
		return listQuestion;
	}

	public void setListQuestion(List<OfflineClassQuizReportQuestion> listQuestion) {
		this.listQuestion = listQuestion;
	}
}
