package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.ClassInfoById;
import com.sogo.lmscms.model.response.OfflineClassQuizReport;
import com.sogo.lmscms.model.response.OfflineClassQuizReportDetail;
import com.sogo.lmscms.model.response.StudentInfoByClass;

public class ClassInfoPageData extends BaseViewModel {
	private ClassInfoById classInfo;
	private List<StudentInfoByClass> listStudent;
	private List<OfflineClassQuizReport> listQuizReport;
	private OfflineClassQuizReportDetail listQuizReportDetail;
	
	public ClassInfoById getClassInfo() {
		return classInfo;
	}
	public void setClassInfo(ClassInfoById classInfo) {
		this.classInfo = classInfo;
	}
	public List<StudentInfoByClass> getListStudent() {
		return listStudent;
	}
	public void setListStudent(List<StudentInfoByClass> listStudent) {
		this.listStudent = listStudent;
	}
	public List<OfflineClassQuizReport> getListQuizReport() {
		return listQuizReport;
	}
	public void setListQuizReport(List<OfflineClassQuizReport> listQuizReport) {
		this.listQuizReport = listQuizReport;
	}
	public OfflineClassQuizReportDetail getListQuizReportDetail() {
		return listQuizReportDetail;
	}
	public void setListQuizReportDetail(OfflineClassQuizReportDetail listQuizReportDetail) {
		this.listQuizReportDetail = listQuizReportDetail;
	}
}
