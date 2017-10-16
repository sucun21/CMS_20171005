package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.CenterInfo;
import com.sogo.lmscms.model.response.CourseInfo;
import com.sogo.lmscms.model.response.IncomingClass;
import com.sogo.lmscms.model.response.PendingCheckAttendanceClass;
import com.sogo.lmscms.model.response.StudentInfo;
import com.sogo.lmscms.model.response.TrainerInfo;

public class AddStudentPageData extends BaseViewModel {
	
	private List<CourseInfo> listCourse;
	private List<CenterInfo> listCenter;
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
}
