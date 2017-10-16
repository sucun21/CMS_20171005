package com.sogo.lmscms.model.view;

import java.util.List;

import com.sogo.lmscms.model.response.SystemUser;
import com.sogo.lmscms.model.response.UserType;

public class ManageUserPageData extends BaseViewModel {
	
	private List<UserType> listUserType;
	private List<SystemUser> listUser;
	public List<UserType> getListUserType() {
		return listUserType;
	}
	public void setListUserType(List<UserType> listUserType) {
		this.listUserType = listUserType;
	}
	public List<SystemUser> getListUser() {
		return listUser;
	}
	public void setListUser(List<SystemUser> listUser) {
		this.listUser = listUser;
	}
}
