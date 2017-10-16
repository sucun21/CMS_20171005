package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.ActivityLogInfo;
import com.sogo.lmscms.model.response.ClassInfo;
import com.sogo.lmscms.model.response.CommentType;
import com.sogo.lmscms.model.response.StudentCourseInfo;
import com.sogo.lmscms.model.response.StudentDetails;
import com.sogo.lmscms.model.response.SystemUser;
import com.sogo.lmscms.model.response.UserType;

public class StudentDetailLogActivityData extends BaseViewModel {
	private List<CommentType> listCommentType;
	private List<ActivityLogInfo> listActivityLog;
	public List<CommentType> getListCommentType() {
		return listCommentType;
	}
	public void setListCommentType(List<CommentType> listCommentType) {
		this.listCommentType = listCommentType;
	}
	public List<ActivityLogInfo> getListActivityLog() {
		return listActivityLog;
	}
	public void setListActivityLog(List<ActivityLogInfo> listActivityLog) {
		this.listActivityLog = listActivityLog;
	}
}
