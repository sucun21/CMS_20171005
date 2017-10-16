package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.ActivityCatalouge;
import com.sogo.lmscms.model.response.CenterInfo;
import com.sogo.lmscms.model.response.CourseInfo;
import com.sogo.lmscms.model.response.IncomingClass;
import com.sogo.lmscms.model.response.LessonInUnit;
import com.sogo.lmscms.model.response.PendingCheckAttendanceClass;
import com.sogo.lmscms.model.response.StudentInfo;
import com.sogo.lmscms.model.response.TrainerInfo;
import com.sogo.lmscms.model.response.UnitInCourse;

public class CatalougePageData extends BaseViewModel {
	
	private List<CourseInfo> listCourse;
	private List<UnitInCourse> listUnit;
	private List<LessonInUnit> listLesson;
	private List<ActivityCatalouge> listActivity;
	public List<CourseInfo> getListCourse() {
		return listCourse;
	}
	public void setListCourse(List<CourseInfo> listCourse) {
		this.listCourse = listCourse;
	}
	public List<UnitInCourse> getListUnit() {
		return listUnit;
	}
	public void setListUnit(List<UnitInCourse> listUnit) {
		this.listUnit = listUnit;
	}
	public List<LessonInUnit> getListLesson() {
		return listLesson;
	}
	public void setListLesson(List<LessonInUnit> listLesson) {
		this.listLesson = listLesson;
	}
	public List<ActivityCatalouge> getListActivity() {
		return listActivity;
	}
	public void setListActivity(List<ActivityCatalouge> listActivity) {
		this.listActivity = listActivity;
	}
}
