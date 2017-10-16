package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.CenterInfo;
import com.sogo.lmscms.model.response.CourseInfo;
import com.sogo.lmscms.model.response.IncomingClass;
import com.sogo.lmscms.model.response.PendingCheckAttendanceClass;
import com.sogo.lmscms.model.response.TrainerInfo;

public class ClassSchedulePageData extends BaseViewModel {
	
	private List<CourseInfo> listCourse;
	private List<CenterInfo> listCenter;
	private List<TrainerInfo> listTrainer;
	private List<IncomingClass> listIncomingClass;
	private List<PendingCheckAttendanceClass> listPendingCheckAttendanceClass;
	
	public List<CourseInfo> getListCourse() {
		return listCourse;
	}
	public void setListCourse(List<CourseInfo> listCourse) {
		this.listCourse = listCourse;
	}
	public List<CenterInfo> getListCenter() {
		return listCenter;
	}
	public void setListCenter(List<CenterInfo> listCenter) {
		this.listCenter = listCenter;
	}
	public List<TrainerInfo> getListTrainer() {
		return listTrainer;
	}
	public void setListTrainer(List<TrainerInfo> listTrainer) {
		this.listTrainer = listTrainer;
	}
	public List<IncomingClass> getListIncomingClass() {
		return listIncomingClass;
	}
	public void setListIncomingClass(List<IncomingClass> listIncomingClass) {
		this.listIncomingClass = listIncomingClass;
	}
	public List<PendingCheckAttendanceClass> getListPendingCheckAttendanceClass() {
		return listPendingCheckAttendanceClass;
	}
	public void setListPendingCheckAttendanceClass(List<PendingCheckAttendanceClass> listPendingCheckAttendanceClass) {
		this.listPendingCheckAttendanceClass = listPendingCheckAttendanceClass;
	}
}
