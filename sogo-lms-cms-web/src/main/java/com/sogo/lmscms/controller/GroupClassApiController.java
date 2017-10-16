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
import com.sogo.lmscms.utils.ApiHelper;
import com.sogo.lmscms.utils.CommonUtils;
import com.sogo.lmscms.utils.ImageHelper;

@Controller
@RequestMapping(value = "/api/group-class")
public class GroupClassApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@Autowired
	ApiHelper apiHelper;
	
	@RequestMapping(value = "/getManageGroupClassPageData", method = RequestMethod.POST)
	public @ResponseBody ManageGroupClassPageData getManageClassGroupPageData(@RequestBody GetManageGroupClassDataRequest request){
		
		boolean isError = false;
		ManageGroupClassPageData vm = new ManageGroupClassPageData();		
		
		Integer centerId = request.getCenterId();
		Integer courseId = request.getCourseId();
		Integer trainerId = request.getTrainerId();
		Integer classTypeId = request.getClassTypeId();
		String searchKey = request.getSearchKey();
		Boolean statusId = request.getStatusId();
		Integer pageNumber = request.getPageNumber();
		Integer pageSize = request.getPageSize();
		Integer weekView = request.getWeekView();
		
		ApiResponse<List<CourseInfo>> getCourseRes = apiHelper.getAllCourse();
		
		if(getCourseRes != null && getCourseRes.isSuccess()){
			vm.setListCourse(getCourseRes.getData());
		}
		else{
			isError = true;
		}
		
		
		if(!isError){
			ApiResponse<List<CenterInfo>> getCenterRes = apiHelper.getAllCenter();
			
			if(getCenterRes != null && getCenterRes.isSuccess()){
				vm.setListCenter(getCenterRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<TrainerInfo>> getAllTrainerRes = apiHelper.getAllTrainer();
			
			if(getAllTrainerRes != null && getAllTrainerRes.isSuccess()){
				vm.setListTrainer(getAllTrainerRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<ClassTypeInfo>> getAllClassTypeRes = getAllClassType();
			
			if(getAllClassTypeRes != null && getAllClassTypeRes.isSuccess()){
				vm.setListClassType(getAllClassTypeRes.getData());
			}
			else{
				isError = true;
			}
		}
				
		if(!isError){
			ApiResponse<List<GroupClassItem>> getAllGroupClassRes = getAllGroupClass(searchKey, trainerId, courseId, centerId, pageNumber, pageSize, classTypeId, statusId, weekView);
			
			if(getAllGroupClassRes != null && getAllGroupClassRes.isSuccess()){
				vm.setListGroupClass(getAllGroupClassRes.getData());
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
	
	private ApiResponse<List<GroupClassItem>> getAllGroupClass(String searchKey, Integer trainerId, Integer courseId, Integer centerId, Integer pageNumber, 
																	Integer pageSize, Integer classTypeId, Boolean statusId, Integer weekView){
		
		GetAllGroupClassRequest request = new GetAllGroupClassRequest();
		request.setSearchKey(searchKey);
		request.setTrainerId(trainerId);
		request.setCourseId(courseId);
		request.setCenterId(centerId);
		request.setPageNumber(pageNumber);
		request.setPageSize(pageSize);
		request.setClassTypeId(classTypeId);
		request.setStatusId(statusId);
		request.setWeekView(weekView);
		
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_GROUP_CLASS, request, GroupClassItem.class);
	}
	
	private ApiResponse<List<ClassTypeInfo>> getAllClassType(){
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_CLASS_TYPE, ClassTypeInfo.class);
	}
	
	@RequestMapping(value = "/getCourseHoliday", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<CourseHoliday>> GetCourseHoliday(){
		return restHelper.postForListObject(UrlEntity.A_GET_COURSE_HOLIDAY, CourseHoliday.class);
	}
	
	@RequestMapping(value = "/getUnitByCourseAndClassType", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<UnitByCourseAndClassType>> getUnitByCourseAndClassType(@RequestBody GetUnitByCourseAndClassTypeRequest request){
		return restHelper.postForListObject(UrlEntity.A_GET_UNIT_BY_COURSE_AND_CLASS_TYPE, request, UnitByCourseAndClassType.class);
	}
	
	@RequestMapping(value = "/addNewGroupClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> AddNewGroupClass(@RequestBody AddNewGroupClassRequest request){
		return restHelper.postForObject(UrlEntity.A_ADD_NEW_GROUP_CLASS, request, CUDReturnMessage.class);
	}
	
	@RequestMapping(value = "/extendGroupClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> extendGroupClass(@RequestBody ExtendGroupClassRequest request){
		return restHelper.postForObject(UrlEntity.A_EXTEND_GROUP_CLASS, request, CUDReturnMessage.class);
	}
}
