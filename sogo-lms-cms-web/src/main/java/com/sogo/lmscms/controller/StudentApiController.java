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
@RequestMapping(value = "/api/student")
public class StudentApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@Autowired
	ApiHelper apiHelper;
	
	@RequestMapping(value = "/getManageStudentPageData", method = RequestMethod.POST)
	public @ResponseBody ManageStudentPageData getManageStudentPageData(@RequestBody GetManageStudentDataRequest request){
		
		boolean isError = false;
		ManageStudentPageData vm = new ManageStudentPageData();
		
		Integer centerId = request.getCenterId();
		Integer courseId = request.getCourseId();
		String searchKey = request.getSearchKey();
		Boolean studentStatus = request.getStudentStatus();
		Integer pageNumber = request.getPageNumber();
		Integer pageSize = request.getPageSize();
		
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
			ApiResponse<List<StudentInfo>> getStudentListRes = getStudentList(searchKey, centerId, courseId, studentStatus, pageNumber, pageSize);
			
			if(getStudentListRes != null && getStudentListRes.isSuccess()){
				vm.setListStudent(getStudentListRes.getData());
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
	
	@RequestMapping(value = "/getAddStudentPageData", method = RequestMethod.POST)
	public @ResponseBody AddStudentPageData getAddStudentPageData(){
		
		boolean isError = false;
		AddStudentPageData vm = new AddStudentPageData();
		
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
			vm.setCode(1);
			vm.setMessage("OK");
		}
		
		return vm;
	}
	
	@RequestMapping(value = "/getStudentDetailPageData", method = RequestMethod.POST)
	public @ResponseBody StudentDetailPageData getStudentDetailPageData(@RequestBody Integer studentId){
		
		boolean isError = false;
		StudentDetailPageData vm = new StudentDetailPageData();
				
		ApiResponse<StudentDetails> getStudentInfoRes = getStudentInfo(studentId);
		
		if(getStudentInfoRes != null && getStudentInfoRes.isSuccess()){
			vm.setStudentInfo(getStudentInfoRes.getData());
		}
		else{
			isError = true;
		}
		
		
		if(!isError){
			ApiResponse<List<StudentCourseInfo>> getStudentAllCourseRes = getStudentAllCourse(studentId);
			
			if(getStudentAllCourseRes != null && getStudentAllCourseRes.isSuccess()){
				vm.setListStudentCourse(getStudentAllCourseRes.getData());
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
	
	@RequestMapping(value = "/getStudentDetailLogActivityData", method = RequestMethod.POST)
	public @ResponseBody StudentDetailLogActivityData getStudentDetailLogActivityData(@RequestBody GetStudentDetailLogActivityDataRequest request){
		
		boolean isError = false;
		StudentDetailLogActivityData vm = new StudentDetailLogActivityData();
		
		Integer studentId = request.getTraineeId();
		Integer courseTraineeId = request.getCourseTraineeId();
				
		ApiResponse<List<CommentType>> getAllCommentTypeRes = getAllCommentType();
		
		if(getAllCommentTypeRes != null && getAllCommentTypeRes.isSuccess()){
			vm.setListCommentType(getAllCommentTypeRes.getData());
		}
		else{
			isError = true;
		}
		
		
		if(!isError){
			ApiResponse<List<ActivityLogInfo>> getStudentActivityLogRes = getStudentActivityLog(studentId, courseTraineeId);
			
			if(getStudentActivityLogRes != null && getStudentActivityLogRes.isSuccess()){
				vm.setListActivityLog(getStudentActivityLogRes.getData());
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
	
	@RequestMapping(value = "/getIntroClassByCenterAndCourse", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<IntroductionClassInfo>> getIntroClassByCenterAndCourse(@RequestBody GetIntroClassByCenterAndCourseRequest request){
		ApiResponse<List<IntroductionClassInfo>> result = new ApiResponse<List<IntroductionClassInfo>>();
		result = restHelper.postForListObject(UrlEntity.A_GET_INTRO_CLASS_BY_CENTER_COURSE, request, IntroductionClassInfo.class);
		
		return result;
	}
	
	@RequestMapping(value = "/getIncomingFirstClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<IncomingFirstClass>> getIncomingFirstClass(@RequestBody GetIncomingFirstClassRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_FIRST_CLASS, request, IncomingFirstClass.class);
	}
	
	@RequestMapping(value = "/getIncomingIntroClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<IncomingIntroClass>> getIncomingIntroClass(@RequestBody GetIncomingIntroClassRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_INTRO_CLASS, request, IncomingIntroClass.class);
	}
	
	@RequestMapping(value = "/getIncomingNormalClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<IncomingNormalClass>> getIncomingNormalClass(@RequestBody GetIncomingNormalClassRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_INCOMING_NORMAL_CLASS, request, IncomingNormalClass.class);
	}
	
	@RequestMapping(value = "/resetStudentPassword", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> resetStudentPassword(@RequestBody ResetStudentPasswordRequest request){		
		return restHelper.postForObject(UrlEntity.A_RESET_STUDENT_PASSWORD, request, CUDReturnMessage.class);
	}
	
	@RequestMapping(value = "/getStudentClasses", method = RequestMethod.POST)
	public @ResponseBody  ApiResponse<List<ClassInfo>> getStudentClasses(@RequestBody GetStudentClassByCourseRequest request){
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_CLASS_BY_COURSE, request, ClassInfo.class);
	}
	
	@RequestMapping(value = "/getOfflineClassForRetake", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<OfflineClassForRetake>> GetOfflineClassForRetake(@RequestBody Integer unitId){		
		return restHelper.postForListObject(UrlEntity.A_GET_OFFLINE_CLASS_FOR_RETAKE, unitId, OfflineClassForRetake.class);
	}
	
	@RequestMapping(value = "/retakeStudentClass", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> RetakeStudentClass(@RequestBody RetakeStudentClassRequest request){		
		return restHelper.postForObject(UrlEntity.A_RETAKE_STUDENT_CLASS, request, CUDReturnMessage.class);
	}
		
	@RequestMapping(value = "/getAllCommentResult", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<CommentResult>> getAllCommentResult(@RequestBody Integer commentTypeId){
		ApiResponse<List<CommentResult>> result = new ApiResponse<List<CommentResult>>();
		result = restHelper.postForListObject(UrlEntity.A_GET_ALL_COMMENT_RESULT, commentTypeId, CommentResult.class);
		
		return result;
	}
	
	@RequestMapping(value = "/addActivityLog", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> addActivityLog(@RequestBody AddActivityLogRequest request){		
		return restHelper.postForObject(UrlEntity.A_ADD_ACTIVITY_LOG, request, CUDReturnMessage.class);
	}
	
	@RequestMapping(value = "/updateStudentCourseStatus", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<CUDReturnMessage> UpdateStudentCourseStatus(@RequestBody UpdateStudentCourseStatusRequest request){		
		return restHelper.postForObject(UrlEntity.A_UPDATE_STUDENT_COURSE_STATUS, request, CUDReturnMessage.class);
	}
	
	@RequestMapping(value = "/getCourseActivity", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<CourseActivity>> getCourseActivity(@RequestBody Integer courseId){		
		return restHelper.postForListObject(UrlEntity.A_GET_COURSE_ACTIVITY, courseId, CourseActivity.class);
	}
	
	@RequestMapping(value = "/getStudentProperty", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<StudentProperty>> getStudentProperty(@RequestBody GetStudentPropertyRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_PROPERTY, request, StudentProperty.class);
	}
	
	@RequestMapping(value = "/getStudentQuiz", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<StudentQuiz>> getStudentQuiz(@RequestBody GetStudentQuizRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_QUIZ, request, StudentQuiz.class);
	}
	
	@RequestMapping(value = "/getStudentOtherActivity", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<StudentOtherActivity>> getStudentOtherACtivity(@RequestBody GetStudentOtherActivityRequest request){		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_OTHER_ACTIVITY, request, StudentOtherActivity.class);
	}
	
	private ApiResponse<List<CommentType>> getAllCommentType(){		
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_COMMENT_TYPE, CommentType.class);
	}
	
	private @ResponseBody ApiResponse<List<ActivityLogInfo>> getStudentActivityLog(Integer studentId, Integer courseTraineeId ){
		
		GetStudentActivityLogRequest request = new GetStudentActivityLogRequest();
		
		request.setStudentId(studentId);
		request.setCourseTraineeId(courseTraineeId);
		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_ACTIVITY_LOG, request, ActivityLogInfo.class);
	}
	
	private ApiResponse<StudentDetails> getStudentInfo(Integer studentId){
		ApiResponse<StudentDetails> result = new ApiResponse<StudentDetails>();
		result = restHelper.postForObject(UrlEntity.A_GET_STUDENT_INFO, studentId, StudentDetails.class);
		
		return result;
	}
	
	
	private ApiResponse<List<StudentCourseInfo>> getStudentAllCourse(Integer studentId){		
		return restHelper.postForListObject(UrlEntity.A_GET_STUDENT_ALL_COURSE, studentId, StudentCourseInfo.class);
	}
	
	
	
//	@RequestMapping(value = "/addNewStudent", method = RequestMethod.POST)
//	public @ResponseBody ApiResponse<CUDReturnMessage> addNewStudent(@RequestBody AddNewStudentRequest request){
//		
//		String avatarFileName = request.getAvatarUrl() != null && request.getAvatarUrl().isEmpty() ? "" : request.getUserEmail() + ".png";
//		String imageData = request.getAvatarUrl();
//		
//		request.setAvatarUrl(avatarFileName);
//		
//		ApiResponse<CUDReturnMessage> result = new ApiResponse<CUDReturnMessage>();
//		result = restHelper.postForObject(UrlEntity.A_ADD_NEW_STUDENT, request, CUDReturnMessage.class);
//		
//		if(result.getData() != null && result.getData().getId() == 1
//				&& imageData != null && !imageData.isEmpty()){
//			//xử lý upload hình
//			imageHelper.saveStudentAvatar(avatarFileName, imageData);
//		}
//		
//		return result;
//	}
	
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
	
}
