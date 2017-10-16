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
@RequestMapping(value = "/api/catalouge")
public class CatalougeApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@Autowired
	ApiHelper apiHelper;
	
	@RequestMapping(value = "/getCatalougePageData", method = RequestMethod.POST)
	public @ResponseBody CatalougePageData getCatalougePageData(@RequestBody GetCatalougePageDataRequest request){
		
		boolean isError = false;
		CatalougePageData vm = new CatalougePageData();
		
		Integer courseId = request.getCourseId();
		Integer lessonId = request.getLessonId();
		Integer unitId = request.getUnitId();
		
		ApiResponse<List<CourseInfo>> getAllCourseRes = apiHelper.getAllCourse();
		
		if(getAllCourseRes != null && getAllCourseRes.isSuccess()){
			vm.setListCourse(getAllCourseRes.getData());
		}
		else{
			isError = true;
		}
				
		if(!isError){
			ApiResponse<List<UnitInCourse>> getUnitInCourseRes = getUnitInCourse(courseId);
			
			if(getUnitInCourseRes != null && getUnitInCourseRes.isSuccess()){
				vm.setListUnit(getUnitInCourseRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<LessonInUnit>> getLessonInUnitRes = getLessonInUnit(unitId);
			
			if(getLessonInUnitRes != null && getLessonInUnitRes.isSuccess()){
				vm.setListLesson(getLessonInUnitRes.getData());
			}
			else{
				isError = true;
			}
		}
		
		if(!isError){
			ApiResponse<List<ActivityCatalouge>> getActivityCatalougeRes = getActivityCatalouge(courseId, unitId, lessonId);
			
			if(getActivityCatalougeRes != null && getActivityCatalougeRes.isSuccess()){
				vm.setListActivity(getActivityCatalougeRes.getData());
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
	
	@RequestMapping(value = "/getActivityDetails", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<ActivityDetails> GetActivityDetails(@RequestBody Integer activityId){
		return restHelper.postForObject(UrlEntity.A_GET_ACTIVITY_BY_ID, activityId, ActivityDetails.class);
	}
	
	@RequestMapping(value = "/getQuizQuestion", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<QuizQuestion>> GetQuizQuestion(@RequestBody Integer activityId){
		return restHelper.postForListObject(UrlEntity.A_GET_QUIZ_QUESTION, activityId, QuizQuestion.class);
	}
	
	@RequestMapping(value = "/getActivityCatalouge", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<ActivityCatalouge>> getActivityCatalouge(@RequestBody GetActivityCatalougeRequest request){
		return restHelper.postForListObject(UrlEntity.A_GET_ACTIVITY_CATALOUGE, request, ActivityCatalouge.class);
	}
	
	private ApiResponse<List<UnitInCourse>> getUnitInCourse(Integer courseId){
		ApiResponse<List<UnitInCourse>> result = restHelper.postForListObject(UrlEntity.A_GET_UNIT_IN_COURSE, courseId, UnitInCourse.class);
		return result;
	}
	
	private ApiResponse<List<LessonInUnit>> getLessonInUnit(@RequestBody Integer unitId){
		return restHelper.postForListObject(UrlEntity.A_GET_LESSON_IN_UNIT, unitId, LessonInUnit.class);
	}	
	
	private ApiResponse<List<ActivityCatalouge>> getActivityCatalouge(Integer courseId, Integer unitId, Integer lessonId){
		
		GetActivityCatalougeRequest request = new GetActivityCatalougeRequest();
		request.setCourseId(courseId);
		request.setUnitId(unitId);
		request.setLessonId(lessonId);
		
		return restHelper.postForListObject(UrlEntity.A_GET_ACTIVITY_CATALOUGE, request, ActivityCatalouge.class);
	}
	
	
	
}
