package com.sogo.lmscms.controller;

import java.io.InputStream;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sogo.lmscms.model.request.*;
import com.sogo.lmscms.model.response.*;
import com.sogo.lmscms.model.response.offlineclass.*;
import com.sogo.lmscms.model.response.shared.*;
import com.sogo.lmscms.model.view.*;
import com.sogo.lmscms.model.view.request.*;
import com.sogo.lmscms.settings.UrlEntity;
import com.sogo.lmscms.utils.RestHelper;
import com.sogo.lmscms.utils.CommonUtils;
import com.sogo.lmscms.utils.ImageHelper;

@Controller
@RequestMapping(value = "/api/user")
public class UserApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@RequestMapping(value = "/getManageUserPageData", method = RequestMethod.POST)
	public @ResponseBody ManageUserPageData getManageUserPageData(@RequestBody GetManageUserDataRequest request){
		
		boolean isError = false;
		ManageUserPageData vm = new ManageUserPageData();
		
		Integer userTypeId = request.getUserTypeId();
		String searchKey = request.getSearchKey();
		Boolean userStatus = request.getUserStatus();
		Integer pageNumber = request.getPageNumber();
		Integer pageSize = request.getPageSize();
		
		ApiResponse<List<UserType>> getUserTypeRes = getUserType();
		
		if(getUserTypeRes != null && getUserTypeRes.isSuccess()){
			vm.setListUserType(getUserTypeRes.getData());
		}
		else{
			isError = true;
		}
				
		if(!isError){
			ApiResponse<List<SystemUser>> getUserListRes = getUserList(searchKey, userTypeId, userStatus, pageNumber, pageSize);
			
			if(getUserListRes != null && getUserListRes.isSuccess()){
				vm.setListUser(getUserListRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			vm.setCode(1);
			vm.setMessage("OK");
		}
		
		return vm;
	}
	
	@RequestMapping(value = "/addNewUser", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> addNewUser(@RequestBody AddNewUserRequest request){		
		return restHelper.postForObject(UrlEntity.A_ADD_NEW_USER, request, CUDReturnMessage.class);
	}
	
	private ApiResponse<List<SystemUser>> getUserList(String searchKey, Integer userTypeId, Boolean userStatus, Integer pageNumber, Integer pageSize){
		GetSystemUserRequest request = new GetSystemUserRequest();
		
		request.setSearchKey(searchKey);
		request.setUserStatus(userStatus);
		request.setUserTypeId(userTypeId);
		request.setPageNumber(pageNumber);
		request.setPageSize(pageSize);
		
		return restHelper.postForListObject(UrlEntity.A_GET_SYSTEM_USER, request, SystemUser.class);
	}
	
	private ApiResponse<List<UserType>> getUserType(){		
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_USER_TYPE, UserType.class);
	}
	
}
