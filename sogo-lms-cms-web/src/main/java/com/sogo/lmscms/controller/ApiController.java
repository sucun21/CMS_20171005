package com.sogo.lmscms.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
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
@RequestMapping(value = "/api")
public class ApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@Autowired
	ImageHelper imageHelper;
	
	@RequestMapping(value = "/doLogin", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<String> doLogin(@RequestBody CheckLoginRequest request, HttpServletResponse response){
		
		ApiResponse<String> result = restHelper.postForObject(UrlEntity.A_CHECK_LOGIN, request, String.class);
		
		String sessionKey = result.getData();
		
		if(sessionKey != null && !sessionKey.isEmpty()){
			Cookie sessionCookie = new Cookie(CommonUtils.SESSION_COOKIE_NAME, sessionKey); //bake cookie
        	sessionCookie.setMaxAge(CommonUtils.SESSION_COOKIE_EXPIRE_SECOND); //set expire time
        	sessionCookie.setDomain(CommonUtils.SESSION_COOKIE_DOMAIN);
        	sessionCookie.setPath("/");
        	sessionCookie.setHttpOnly(true);
        	response.addCookie(sessionCookie); //put cookie in response
		}
		
		return result;
	}
	
	@RequestMapping(value = "/doLogout", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Boolean> doLogout(HttpServletRequest request, HttpServletResponse response){
		
		String sessionCookie = GetCookieValue(request, CommonUtils.SESSION_COOKIE_NAME);
		ApiResponse<Boolean> result = restHelper.postForObject(UrlEntity.A_CLEAR_SESSION_KEY, sessionCookie, Boolean.class);
		
		Cookie cookie = new Cookie(CommonUtils.SESSION_COOKIE_NAME, null); // Not necessary, but saves bandwidth.
    	cookie.setDomain(CommonUtils.SESSION_COOKIE_DOMAIN);
    	cookie.setHttpOnly(true);
    	cookie.setPath("/");
    	cookie.setMaxAge(0); // Don't set to -1 or it will become a session cookie!
    	response.addCookie(cookie);
		
		return result;
	}
	
	@RequestMapping(value = "/getUserSession", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<UserSessionInfo> getUserSession(HttpServletRequest request){
		
		ApiResponse<UserSessionInfo> result = new ApiResponse<UserSessionInfo>();
        String sessionCookie = GetCookieValue(request, CommonUtils.SESSION_COOKIE_NAME);
        if(sessionCookie != null && sessionCookie != "")
        {
	        //get session
        	result = restHelper.postForObject(UrlEntity.A_GET_USER_INFO_BY_SESSION, sessionCookie, UserSessionInfo.class);
        }
		
		return result;
	}
	
	@RequestMapping(value = "/getUserRole", method = RequestMethod.GET)
	public @ResponseBody JSONArray getUserRole(@RequestParam("userTypeId") Integer userTypeId){
		JSONArray result = null;
		String userTypeName = "";
		switch(userTypeId){
			case 1: {
				userTypeName = "admin";
				break;
			}
			case 2: { 
				userTypeName = "trainer";
				break;
			}
			case 3: {
				userTypeName = "facilitator";
				break;
			}
			case 5: { 
				userTypeName = "cc";
				break;
			}
		}
		String fileName = "role_" + userTypeName + ".json";
		URL url = getClass().getClassLoader().getResource(fileName);
		JSONParser parser = new JSONParser();
		try {
			Object obj = parser.parse(new FileReader(url.getPath()));
	        result = (JSONArray) obj;
		} 
		catch (FileNotFoundException e) {
	        e.printStackTrace();
	    } catch (IOException e) {
	        e.printStackTrace();
	    } catch (ParseException e) {
	        e.printStackTrace();
	    }
		
		return result;
	}
	
//	@RequestMapping(value = "/getClassSchedulePageData", method = RequestMethod.POST)
//	public @ResponseBody ClassSchedulePageData getClassSchedulePageData(@RequestBody GetClassScheduleDataRequest request){
//		
//		boolean isError = false;
//		ClassSchedulePageData vm = new ClassSchedulePageData();
//		
//		Integer courseId = request.getCourseId();
//		Integer centerId = request.getCenterId();
//		Integer trainerId = request.getTrainerId();
//		Boolean isAdmin = request.getIsAdmin();
//		Integer nextDayNum = request.getNextDayNum();
//		
//		ApiResponse<List<CourseInfo>> getCourseRes = getAllCourse();
//		
//		if(getCourseRes != null && getCourseRes.isSuccess()){
//			vm.setListCourse(getCourseRes.getData());
//		}
//		else{
//			isError = true;
//		}
//		
//		
//		if(!isError){
//			ApiResponse<List<CenterInfo>> getCenterRes = getAllCenter();
//			
//			if(getCenterRes != null && getCenterRes.isSuccess()){
//				vm.setListCenter(getCenterRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			ApiResponse<List<TrainerInfo>> getTrainerRes = getAllTrainer();
//			
//			if(getTrainerRes != null && getTrainerRes.isSuccess()){
//				vm.setListTrainer(getTrainerRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			ApiResponse<List<IncomingClass>> getIncomingClassRes = getIncomingClass(centerId, courseId, trainerId, isAdmin, nextDayNum);
//			
//			if(getIncomingClassRes != null && getIncomingClassRes.isSuccess()){
//				vm.setListIncomingClass(getIncomingClassRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			ApiResponse<List<PendingCheckAttendanceClass>> getPendingCheckAttendanceClassRes = getPendingCheckAttendanceClass(centerId, courseId, trainerId, isAdmin);
//			
//			if(getPendingCheckAttendanceClassRes != null && getPendingCheckAttendanceClassRes.isSuccess()){
//				vm.setListPendingCheckAttendanceClass(getPendingCheckAttendanceClassRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			vm.setCode(1);
//			vm.setMessage("OK");
//		}
//		
//		return vm;
//	}
	
//	@RequestMapping(value = "/getClassSchedule", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<ClassSchedule>> getClassSchedule(@RequestBody GetClassScheduleRequest request){
//		ApiResponse<List<ClassSchedule>> result = new ApiResponse<List<ClassSchedule>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_CLASS_SCHEDULE, request, ClassSchedule.class);
//		
//		return result;
//	}
	
	@RequestMapping(value = "/getClassInfoPageData", method = RequestMethod.POST)
	public @ResponseBody ClassInfoPageData getClassInfoPageData(@RequestBody GetClassInfoDataRequest request){
		
		boolean isError = false;
		ClassInfoPageData vm = new ClassInfoPageData();
		
		Integer classId = request.getClassId();
		String viewMode = request.getViewMode();
		Integer quizId = request.getQuizId();
		
		ApiResponse<ClassInfoById> getClassInfoRes = getClassInfoById(classId);
		
		if(getClassInfoRes != null && getClassInfoRes.isSuccess()){
			vm.setClassInfo(getClassInfoRes.getData());
		}
		else{
			isError = true;
		}
		
		if(viewMode.equals("student"))
		{
			if(!isError){
				ApiResponse<List<StudentInfoByClass>> getStudentByClassRes = getStudentByClass(classId);
				
				if(getStudentByClassRes != null && getStudentByClassRes.isSuccess()){
					vm.setListStudent(getStudentByClassRes.getData());
				}
				else{
					isError = true;
				}
			}
		}
		else if(viewMode.equals("report")){
			
			if(!isError){
				ApiResponse<List<OfflineClassQuizReport>> getQuizReportRes = getQuizReport(classId);
				
				if(getQuizReportRes != null && getQuizReportRes.isSuccess()){
					vm.setListQuizReport(getQuizReportRes.getData());
				}
				else{
					isError = true;
				}
			}
		}
		else if(viewMode.equals("report-detail") && quizId > 0){
			if(!isError){
				ApiResponse<OfflineClassQuizReportDetail> getQuizReportDetailRes = getQuizReportDetail(classId, quizId);
				
				if(getQuizReportDetailRes != null && getQuizReportDetailRes.isSuccess()){
					vm.setListQuizReportDetail(getQuizReportDetailRes.getData());
				}
				else{
					isError = true;
				}
			}
			
		}
		
		if(!isError){
			vm.setCode(1);
			vm.setMessage("OK");
		}
		
		return vm;
	}
	
	@RequestMapping(value = "/updateStudentAttendance", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> updateStudentAttendance(@RequestBody UpdateStudentAttendanceRequest request){
		return restHelper.postForObject(UrlEntity.A_UPDATE_STUDENT_ATTENDANCE, request, CUDReturnMessage.class);
	}
	
	@RequestMapping(value = "/updateClassAttendanceCheck", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> updateClassAttendanceCheck(@RequestBody UpdateClassAttendanceCheckRequest request){	
		return restHelper.postForObject(UrlEntity.A_UPDATE_CLASS_ATTENDANCE_CHECK, request, CUDReturnMessage.class);
	}
	
//	@RequestMapping(value = "/getManageStudentPageData", method = RequestMethod.POST)
//	public @ResponseBody ManageStudentPageData getManageStudentPageData(@RequestBody GetManageStudentDataRequest request){
//		
//		boolean isError = false;
//		ManageStudentPageData vm = new ManageStudentPageData();
//		
//		Integer centerId = request.getCenterId();
//		Integer courseId = request.getCourseId();
//		String searchKey = request.getSearchKey();
//		Boolean studentStatus = request.getStudentStatus();
//		Integer pageNumber = request.getPageNumber();
//		Integer pageSize = request.getPageSize();
//		
//		ApiResponse<List<CourseInfo>> getCourseRes = getAllCourse();
//		
//		if(getCourseRes != null && getCourseRes.isSuccess()){
//			vm.setListCourse(getCourseRes.getData());
//		}
//		else{
//			isError = true;
//		}
//		
//		
//		if(!isError){
//			ApiResponse<List<CenterInfo>> getCenterRes = getAllCenter();
//			
//			if(getCenterRes != null && getCenterRes.isSuccess()){
//				vm.setListCenter(getCenterRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//				
//		if(!isError){
//			ApiResponse<List<StudentInfo>> getStudentListRes = getStudentList(searchKey, centerId, courseId, studentStatus, pageNumber, pageSize);
//			
//			if(getStudentListRes != null && getStudentListRes.isSuccess()){
//				vm.setListStudent(getStudentListRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			vm.setCode(1);
//			vm.setMessage("OK");
//		}
//		
//		return vm;
//	}
	
//	@RequestMapping(value = "/getAddStudentPageData", method = RequestMethod.POST)
//	public @ResponseBody AddStudentPageData getAddStudentPageData(){
//		
//		boolean isError = false;
//		AddStudentPageData vm = new AddStudentPageData();
//		
//		ApiResponse<List<CourseInfo>> getCourseRes = getAllCourse();
//		
//		if(getCourseRes != null && getCourseRes.isSuccess()){
//			vm.setListCourse(getCourseRes.getData());
//		}
//		else{
//			isError = true;
//		}
//		
//		
//		if(!isError){
//			ApiResponse<List<CenterInfo>> getCenterRes = getAllCenter();
//			
//			if(getCenterRes != null && getCenterRes.isSuccess()){
//				vm.setListCenter(getCenterRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			vm.setCode(1);
//			vm.setMessage("OK");
//		}
//		
//		return vm;
//	}
	
//	@RequestMapping(value = "/getIntroClassByCenterAndCourse", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<IntroductionClassInfo>> getIntroClassByCenterAndCourse(@RequestBody GetIntroClassByCenterAndCourseRequest request){
//		ApiResponse<List<IntroductionClassInfo>> result = new ApiResponse<List<IntroductionClassInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_INTRO_CLASS_BY_CENTER_COURSE, request, IntroductionClassInfo.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getIncomingFirstClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<IncomingFirstClass>> getIncomingFirstClass(@RequestBody GetIncomingFirstClassRequest request){		
//		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_FIRST_CLASS, request, IncomingFirstClass.class);
//	}
	
//	@RequestMapping(value = "/getManageUserPageData", method = RequestMethod.POST)
//	public @ResponseBody ManageUserPageData getManageUserPageData(@RequestBody GetManageUserDataRequest request){
//		
//		boolean isError = false;
//		ManageUserPageData vm = new ManageUserPageData();
//		
//		Integer userTypeId = request.getUserTypeId();
//		String searchKey = request.getSearchKey();
//		Boolean userStatus = request.getUserStatus();
//		Integer pageNumber = request.getPageNumber();
//		Integer pageSize = request.getPageSize();
//		
//		ApiResponse<List<UserType>> getUserTypeRes = getUserType();
//		
//		if(getUserTypeRes != null && getUserTypeRes.isSuccess()){
//			vm.setListUserType(getUserTypeRes.getData());
//		}
//		else{
//			isError = true;
//		}
//				
//		if(!isError){
//			ApiResponse<List<SystemUser>> getUserListRes = getUserList(searchKey, userTypeId, userStatus, pageNumber, pageSize);
//			
//			if(getUserListRes != null && getUserListRes.isSuccess()){
//				vm.setListUser(getUserListRes.getData());
//			}
//			else{
//				isError = true;
//			}
//		}
//		
//		if(!isError){
//			vm.setCode(1);
//			vm.setMessage("OK");
//		}
//		
//		return vm;
//	}
//	
//	private ApiResponse<List<CenterInfo>> getAllCenter(){
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_CENTER, CenterInfo.class);
//	};
//	
//	private ApiResponse<List<CourseInfo>> getAllCourse(){
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_COURSE, CourseInfo.class);
//	}
//	
//	private ApiResponse<List<TrainerInfo>> getAllTrainer(){
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_TRAINER, TrainerInfo.class);
//	}
	
//	private ApiResponse<List<PendingCheckAttendanceClass>> getPendingCheckAttendanceClass(Integer centerId, Integer courseId, Integer trainerId, Boolean isAdmin){
//		GetPendingCheckAttendanceClassRequest request = new GetPendingCheckAttendanceClassRequest();
//		
//		request.setCenterId(centerId);
//		request.setCourseId(courseId);
//		request.setTrainerId(trainerId);
//		request.setIsAdmin(isAdmin);
//		
//		return restHelper.postForListObject(UrlEntity.A_GET_PENDING_CHECK_ATTENDANCE_CLASS, request, PendingCheckAttendanceClass.class);
//	}
//	
//	private ApiResponse<List<IncomingClass>> getIncomingClass(Integer centerId, Integer courseId, Integer trainerId, Boolean isAdmin, Integer nextDayNum){
//		GetIncomingClassRequest request = new GetIncomingClassRequest(); 
//		
//		request.setCenterId(centerId);
//		request.setCourseId(courseId);
//		request.setTrainerId(trainerId);
//		request.setIsAdmin(isAdmin);
//		request.setNextDayNum(nextDayNum);
//		
//		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_CLASS, request, IncomingClass.class);
//	}
	
	private ApiResponse<ClassInfoById> getClassInfoById(Integer classId){		
		return restHelper.postForObject(UrlEntity.A_GET_CLASS_INFO_BY_ID, classId, ClassInfoById.class);
	}
	
	private ApiResponse<List<StudentInfoByClass>> getStudentByClass(Integer classId){		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_BY_CLASS, classId, StudentInfoByClass.class);
	}
	
	private ApiResponse<List<OfflineClassQuizReport>> getQuizReport(Integer classId){		
		return restHelper.postForListObject(UrlEntity.A_GET_QUIZ_REPORT, classId, OfflineClassQuizReport.class);
	}
	
	private ApiResponse<OfflineClassQuizReportDetail> getQuizReportDetail(Integer classId, Integer activityId){
		GetQuizReportDetailRequest request = new GetQuizReportDetailRequest();
		
		request.setActivityId(activityId);
		request.setClassId(classId);
		
		return restHelper.postForObject(UrlEntity.A_GET_QUIZ_REPORT_DETAIL, request, OfflineClassQuizReportDetail.class);
	}
	
	private ApiResponse<List<StudentInfo>> getStudentList(String searchKey, Integer centerId, Integer courseId, Boolean studentStatus, Integer pageNumber, Integer pageSize){
		GetStudentRequest request = new GetStudentRequest();
		
		request.setCenterId(centerId);
		request.setCourseId(courseId);
		request.setPageNumber(pageNumber);
		request.setPageSize(pageSize);
		request.setSearchKey(searchKey);
		request.setStudentStatus(studentStatus);
		
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_STUDENT, request, StudentInfo.class);
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
	
//	@RequestMapping(value = "/getAllCenter", method = RequestMethod.GET)
//	public @ResponseBody ApiResponse<List<CenterInfo>> getAllCenter(){
//		ApiResponse<List<CenterInfo>> result = new ApiResponse<List<CenterInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_CENTER, CenterInfo.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getAllCourse", method = RequestMethod.GET)
//	public @ResponseBody ApiResponse<List<CourseInfo>> getAllCourse(){
//		ApiResponse<List<CourseInfo>> result = new ApiResponse<List<CourseInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_COURSE, CourseInfo.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getIntroClassByCenterAndCourse", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<IntroductionClassInfo>> getIntroClassByCenterAndCourse(@RequestBody GetIntroClassByCenterAndCourseRequest request){
//		ApiResponse<List<IntroductionClassInfo>> result = new ApiResponse<List<IntroductionClassInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_INTRO_CLASS_BY_CENTER_COURSE, request, IntroductionClassInfo.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getIncomingFirstClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<IncomingFirstClass>> getIncomingFirstClass(@RequestBody GetIncomingFirstClassRequest request){
//		ApiResponse<List<IncomingFirstClass>> result = new ApiResponse<List<IncomingFirstClass>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_INCOMING_FIRST_CLASS, request, IncomingFirstClass.class);
//		
//		return result;
//	}
	
	@RequestMapping(value = "/addNewStudent", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> addNewStudent(@RequestBody AddNewStudentRequest request){
		
		String avatarFileName = request.getAvatarUrl() != null && request.getAvatarUrl().isEmpty() ? "" : request.getUserEmail() + ".png";
		String imageData = request.getAvatarUrl();
		
		request.setAvatarUrl(avatarFileName);
		
		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
		result = restHelper.postForObject(UrlEntity.A_ADD_NEW_STUDENT, request, CUDReturnMessage.class);
		
		if(result.getData() != null && result.getData().getId() == 1
				&& imageData != null && !imageData.isEmpty()){
			//xử lý upload hình
			imageHelper.saveStudentAvatar(avatarFileName, imageData);
		}
		
		return result;
	}
	
//	@RequestMapping(value = "/getPendingCheckAttendanceClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<PendingCheckAttendanceClass>> getPendingCheckAttendanceClass(@RequestBody GetPendingCheckAttendanceClassRequest request){
//		ApiResponse<List<PendingCheckAttendanceClass>> result = new ApiResponse<List<PendingCheckAttendanceClass>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_PENDING_CHECK_ATTENDANCE_CLASS, request, PendingCheckAttendanceClass.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getIncomingClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<IncomingClass>> getIncomingClass(@RequestBody GetIncomingClassRequest request){
//		ApiResponse<List<IncomingClass>> result = new ApiResponse<List<IncomingClass>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_INCOMING_CLASS, request, IncomingClass.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getClassInfoById", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<ClassInfoById> getClassInfoById(@RequestBody int classId){
//		ApiResponse<ClassInfoById> result = new ApiResponse<ClassInfoById>();
//		result = restHelper.postForObject(UrlEntity.A_GET_CLASS_INFO_BY_ID, classId, ClassInfoById.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getStudentByClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<StudentInfoByClass>> getStudentByClass(@RequestBody int classId){
//		ApiResponse<List<StudentInfoByClass>> result = new ApiResponse<List<StudentInfoByClass>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_STUDENT_BY_CLASS, classId, StudentInfoByClass.class);
//		
//		return result;
//	}
	
	@RequestMapping(value = "/changeClassTrainer", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> changeClassTrainer(@RequestBody ChangeClassTrainerRequest request){
		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
		result = restHelper.postForObject(UrlEntity.A_CHANGE_CLASS_TRAINER, request, CUDReturnMessage.class);
		
		return result;
	}
	
	@RequestMapping(value = "/changeClassTime", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> changeClassTime(@RequestBody ChangeClassTimeRequest request){
		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
		result = restHelper.postForObject(UrlEntity.A_CHANGE_CLASS_TIME, request, CUDReturnMessage.class);
		
		return result;
	}
	
//	@RequestMapping(value = "/updateStudentAttendance", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> updateStudentAttendance(@RequestBody UpdateStudentAttendanceRequest request){
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_UPDATE_STUDENT_ATTENDANCE, request, CUDReturnMessage.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/updateClassAttendanceCheck", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> updateClassAttendanceCheck(@RequestBody UpdateClassAttendanceCheckRequest request){
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_UPDATE_CLASS_ATTENDANCE_CHECK, request, CUDReturnMessage.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getAllTrainer", method = RequestMethod.GET)
//	public @ResponseBody ApiResponse<List<TrainerInfo>> getAllTrainer(){
//		ApiResponse<List<TrainerInfo>> result = new ApiResponse<List<TrainerInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_TRAINER, TrainerInfo.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getStudentInfo", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<StudentDetails> getStudentInfo(@RequestBody Integer studentId){
//		ApiResponse<StudentDetails> result = new ApiResponse<StudentDetails>();
//		result = restHelper.postForObject(UrlEntity.A_GET_STUDENT_INFO, studentId, StudentDetails.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getStudentClasses", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<ClassInfo>> getStudentClasses(@RequestBody GetStudentClassByCourseRequest request){
//		ApiResponse<List<ClassInfo>> result = new ApiResponse<List<ClassInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_STUDENT_CLASS_BY_COURSE, request, ClassInfo.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getStudentActivityLog", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<ActivityLogInfo>> getStudentActivityLog(@RequestBody GetStudentActivityLogRequest request){
//		ApiResponse<List<ActivityLogInfo>> result = new ApiResponse<List<ActivityLogInfo>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_STUDENT_ACTIVITY_LOG, request, ActivityLogInfo.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getAllCommentType", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<CommentType>> getAllCommentType(){
//		ApiResponse<List<CommentType>> result = new ApiResponse<List<CommentType>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_COMMENT_TYPE, CommentType.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/getAllCommentResult", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<CommentResult>> getAllCommentResult(@RequestBody Integer commentTypeId){
//		ApiResponse<List<CommentResult>> result = new ApiResponse<List<CommentResult>>();
//		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_COMMENT_RESULT, commentTypeId, CommentResult.class);
//		
//		return result;
//	}
//	
//	@RequestMapping(value = "/addActivityLog", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> addActivityLog(@RequestBody AddActivityLogRequest request){
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_ADD_ACTIVITY_LOG, request, CUDReturnMessage.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/resetStudentPassword", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> resetStudentPassword(@RequestBody ResetStudentPasswordRequest request){
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_RESET_STUDENT_PASSWORD, request, CUDReturnMessage.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/addActivityLog", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> addActivityLog(@RequestBody AddActivityLogRequest request){
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_ADD_ACTIVITY_LOG, request, CUDReturnMessage.class);
//		
//		return result;
//	}
	
//	@RequestMapping(value = "/getQuizReport", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<OfflineClassQuizReport>> getQuizReport(@RequestBody Integer classId){		
//		return restHelper.postForListObject(UrlEntity.A_GET_QUIZ_REPORT, classId, OfflineClassQuizReport.class);
//	}
	
//	@RequestMapping(value = "/getSystemUser", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<SystemUser>> getSystemUser(@RequestBody GetSystemUserRequest request){		
//		return restHelper.postForListObject(UrlEntity.A_GET_SYSTEM_USER, request, SystemUser.class);
//	}
//	
//	@RequestMapping(value = "/getUserType", method = RequestMethod.GET)
//	public @ResponseBody ApiResponse<List<UserType>> getUserType(){		
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_USER_TYPE, UserType.class);
//	}
	
//	@RequestMapping(value = "/addNewUser", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> addNewUser(@RequestBody AddNewUserRequest request){		
//		return restHelper.postForObject(UrlEntity.A_ADD_NEW_USER, request, CUDReturnMessage.class);
//	}
	
//	@RequestMapping(value = "/getStudentBookmarkDetail", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<StudentBookmarkDetail> getStudentBookmarkDetail(@RequestBody GetStudentBookmarkDetailRequest request){		
//		return restHelper.postForObject(UrlEntity.A_GET_STUDENT_BOOKMARK_DETAIL, request, StudentBookmarkDetail.class);
//	}
	
//	@RequestMapping(value = "/getStudentProperty", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<StudentProperty>> getStudentProperty(@RequestBody GetStudentPropertyRequest request){		
//		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_PROPERTY, request, StudentProperty.class);
//	}
//	
//	@RequestMapping(value = "/getStudentQuiz", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<StudentQuiz>> getStudentQuiz(@RequestBody GetStudentQuizRequest request){		
//		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_QUIZ, request, StudentQuiz.class);
//	}
//	
//	@RequestMapping(value = "/getStudentOtherActivity", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<StudentOtherActivity>> getStudentOtherACtivity(@RequestBody GetStudentOtherActivityRequest request){		
//		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_OTHER_ACTIVITY, request, StudentOtherActivity.class);
//	}
	
//	@RequestMapping(value = "/getCourseActivity", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<CourseActivity>> getCourseActivity(@RequestBody Integer courseId){		
//		return restHelper.postForListObject(UrlEntity.A_GET_COURSE_ACTIVITY, courseId, CourseActivity.class);
//	}
	
//	@RequestMapping(value = "/updateStudentCourseStatus", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> UpdateStudentCourseStatus(@RequestBody UpdateStudentCourseStatusRequest request){		
//		return restHelper.postForObject(UrlEntity.A_UPDATE_STUDENT_COURSE_STATUS, request, CUDReturnMessage.class);
//	}
	
//	@RequestMapping(value = "/getStudentAllCourse", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<StudentCourseInfo>> GetStudentAllCourse(@RequestBody Integer studentId){		
//		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_ALL_COURSE, studentId, StudentCourseInfo.class);
//	}
	
//	@RequestMapping(value = "/getOfflineClassForRetake", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<OfflineClassForRetake>> GetOfflineClassForRetake(@RequestBody Integer unitId){		
//		return restHelper.postForListObject(UrlEntity.A_GET_OFFLINE_CLASS_FOR_RETAKE, unitId, OfflineClassForRetake.class);
//	}
//	
//	@RequestMapping(value = "/retakeStudentClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> RetakeStudentClass(@RequestBody RetakeStudentClassRequest request){		
//		return restHelper.postForObject(UrlEntity.A_RETAKE_STUDENT_CLASS, request, CUDReturnMessage.class);
//	}
	
//	@RequestMapping(value = "/getUnitInCourse", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<UnitInCourse>> GetUnitInCourse(@RequestBody Integer courseId){
//		ApiResponse<List<UnitInCourse>> result = restHelper.postForListObject(UrlEntity.A_GET_UNIT_IN_COURSE, courseId, UnitInCourse.class);
//		return result;
//	}
	
//	@RequestMapping(value = "/getCourseHoliday", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<CourseHoliday>> GetCourseHoliday(){
//		return restHelper.postForListObject(UrlEntity.A_GET_COURSE_HOLIDAY, CourseHoliday.class);
//	}
	
//	@RequestMapping(value = "/addNewGroupClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> AddNewGroupClass(@RequestBody AddNewGroupClassRequest request){
//		return restHelper.postForObject(UrlEntity.A_ADD_NEW_GROUP_CLASS, request, CUDReturnMessage.class);
//	}
	
//	@RequestMapping(value = "/getLessonInUnit", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<LessonInUnit>> GetLessonInUnit(@RequestBody Integer unitId){
//		return restHelper.postForListObject(UrlEntity.A_GET_LESSON_IN_UNIT, unitId, LessonInUnit.class);
//	}
//	
//	@RequestMapping(value = "/getActivityCatalouge", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<ActivityCatalouge>> GetActivityCatalouge(@RequestBody GetActivityCatalougeRequest request){
//		return restHelper.postForListObject(UrlEntity.A_GET_ACTIVITY_CATALOUGE, request, ActivityCatalouge.class);
//	}
	
//	@RequestMapping(value = "/getActivityDetails", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<ActivityDetails> GetActivityDetails(@RequestBody Integer activityId){
//		return restHelper.postForObject(UrlEntity.A_GET_ACTIVITY_BY_ID, activityId, ActivityDetails.class);
//	}
//	
//	@RequestMapping(value = "/getQuizQuestion", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<QuizQuestion>> GetQuizQuestion(@RequestBody Integer activityId){
//		return restHelper.postForListObject(UrlEntity.A_GET_QUIZ_QUESTION, activityId, QuizQuestion.class);
//	}
	
//	@RequestMapping(value = "/getAllGroupClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<GroupClassItem>> GetAllGroupClass(@RequestBody GetAllGroupClassRequest request){
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_GROUP_CLASS, request, GroupClassItem.class);
//	}
//	
//	@RequestMapping(value = "/getAllClassType", method = RequestMethod.GET)
//	public @ResponseBody ApiResponse<List<ClassTypeInfo>> getAllClassType(){
//		return restHelper.postForListObject(UrlEntity.A_GET_ALL_CLASS_TYPE, ClassTypeInfo.class);
//	}
//	
//	@RequestMapping(value = "/getUnitByCourseAndClassType", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<List<UnitByCourseAndClassType>> getUnitByCourseAndClassType(@RequestBody GetUnitByCourseAndClassTypeRequest request){
//		return restHelper.postForListObject(UrlEntity.A_GET_UNIT_BY_COURSE_AND_CLASS_TYPE, request, UnitByCourseAndClassType.class);
//	}
//	
//	@RequestMapping(value = "/extendGroupClass", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> extendGroupClass(@RequestBody ExtendGroupClassRequest request){
//		return restHelper.postForObject(UrlEntity.A_EXTEND_GROUP_CLASS, request, CUDReturnMessage.class);
//	}
}
