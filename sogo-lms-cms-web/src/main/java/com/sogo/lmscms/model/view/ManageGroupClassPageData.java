package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.CenterInfo;
import com.sogo.lmscms.model.response.CourseInfo;
import com.sogo.lmscms.model.response.TrainerInfo;
import com.sogo.lmscms.model.response.UserType;
import com.sogo.lmscms.model.response.offlineclass.GroupClassItem;
import com.sogo.lmscms.model.response.shared.ClassTypeInfo;

public class ManageGroupClassPageData extends BaseViewModel {
	
	private List<CenterInfo> listCenter;
	private List<CourseInfo> listCourse;
	private List<TrainerInfo> listTrainer;
	private List<GroupClassItem> listGroupClass;
	private List<ClassTypeInfo> listClassType;
	public List<CenterInfo> getListCenter() {
		return listCenter;
	}
	public void setListCenter(List<CenterInfo> listCenter) {
		this.listCenter = listCenter;
	}
	public List<CourseInfo> getListCourse() {
		return listCourse;
	}
	public void setListCourse(List<CourseInfo> listCourse) {
		this.listCourse = listCourse;
	}
	public List<GroupClassItem> getListGroupClass() {
		return listGroupClass;
	}
	public void setListGroupClass(List<GroupClassItem> listGroupClass) {
		this.listGroupClass = listGroupClass;
	}
	public List<ClassTypeInfo> getListClassType() {
		return listClassType;
	}
	public void setListClassType(List<ClassTypeInfo> listClassType) {
		this.listClassType = listClassType;
	}
	public List<TrainerInfo> getListTrainer() {
		return listTrainer;
	}
	public void setListTrainer(List<TrainerInfo> listTrainer) {
		this.listTrainer = listTrainer;
	}
}
