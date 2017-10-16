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
@RequestMapping(value = "/api/class")
public class ClassApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@Autowired
	ApiHelper apiHelper;
	
	@RequestMapping(value = "/getClassSchedulePageData", method = RequestMethod.POST)
	public @ResponseBody ClassSchedulePageData getClassSchedulePageData(@RequestBody GetClassScheduleDataRequest request){
		
		boolean isError = false;
		ClassSchedulePageData vm = new ClassSchedulePageData();
		
		Integer courseId = request.getCourseId();
		Integer centerId = request.getCenterId();
		Integer trainerId = request.getTrainerId();
		Boolean isAdmin = request.getIsAdmin();
		Integer nextDayNum = request.getNextDayNum();
		
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
			ApiResponse<List<TrainerInfo>> getTrainerRes = apiHelper.getAllTrainer();
			
			if(getTrainerRes != null && getTrainerRes.isSuccess()){
				vm.setListTrainer(getTrainerRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<IncomingClass>> getIncomingClassRes = getIncomingClass(centerId, courseId, trainerId, isAdmin, nextDayNum);
			
			if(getIncomingClassRes != null && getIncomingClassRes.isSuccess()){
				vm.setListIncomingClass(getIncomingClassRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<PendingCheckAttendanceClass>> getPendingCheckAttendanceClassRes = getPendingCheckAttendanceClass(centerId, courseId, trainerId, isAdmin);
			
			if(getPendingCheckAttendanceClassRes != null && getPendingCheckAttendanceClassRes.isSuccess()){
				vm.setListPendingCheckAttendanceClass(getPendingCheckAttendanceClassRes.getData());
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
	
	@RequestMapping(value = "/getClassSchedule", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<ClassSchedule>> getClassSchedule(@RequestBody GetClassScheduleRequest request){
		ApiResponse<List<ClassSchedule>> result = new ApiResponse<List<ClassSchedule>>();
		result = restHelper.postForListObject(UrlEntity.A_GET_CLASS_SCHEDULE, request, ClassSchedule.class);
		
		return result;
	}
	
	private ApiResponse<List<PendingCheckAttendanceClass>> getPendingCheckAttendanceClass(Integer centerId, Integer courseId, Integer trainerId, Boolean isAdmin){
		GetPendingCheckAttendanceClassRequest request = new GetPendingCheckAttendanceClassRequest();
		
		request.setCenterId(centerId);
		request.setCourseId(courseId);
		request.setTrainerId(trainerId);
		request.setIsAdmin(isAdmin);
		
		return restHelper.postForListObject(UrlEntity.A_GET_PENDING_CHECK_ATTENDANCE_CLASS, request, PendingCheckAttendanceClass.class);
	}
	
	private ApiResponse<List<IncomingClass>> getIncomingClass(Integer centerId, Integer courseId, Integer trainerId, Boolean isAdmin, Integer nextDayNum){
		GetIncomingClassRequest request = new GetIncomingClassRequest(); 
		
		request.setCenterId(centerId);
		request.setCourseId(courseId);
		request.setTrainerId(trainerId);
		request.setIsAdmin(isAdmin);
		request.setNextDayNum(nextDayNum);
		
		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_CLASS, request, IncomingClass.class);
	}
	
}
