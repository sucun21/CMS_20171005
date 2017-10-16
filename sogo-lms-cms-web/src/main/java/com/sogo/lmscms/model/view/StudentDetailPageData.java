package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.ClassInfo;
import com.sogo.lmscms.model.response.StudentCourseInfo;
import com.sogo.lmscms.model.response.StudentDetails;
import com.sogo.lmscms.model.response.SystemUser;
import com.sogo.lmscms.model.response.UserType;

public class StudentDetailPageData extends BaseViewModel {
	private List<StudentCourseInfo> listStudentCourse;
	private StudentDetails studentInfo;
	public List<StudentCourseInfo> getListStudentCourse() {
		return listStudentCourse;
	}
	public void setListStudentCourse(List<StudentCourseInfo> listStudentCourse) {
		this.listStudentCourse = listStudentCourse;
	}
	public StudentDetails getStudentInfo() {
		return studentInfo;
	}
	public void setStudentInfo(StudentDetails studentInfo) {
		this.studentInfo = studentInfo;
	}
}
