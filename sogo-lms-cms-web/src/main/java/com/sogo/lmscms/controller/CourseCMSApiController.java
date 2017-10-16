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
@RequestMapping(value = "/api/course-cms")
public class CourseCMSApiController extends BaseController {
	
	@Autowired
	RestHelper restHelper;
	
	@RequestMapping(value = "/get-course-by-user-type", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<List<Object>> getCourseByUserType(@RequestBody Object data){
		return restHelper.postForListObject("/api/course-cms/get-course-by-user-type", data, Object.class);
	}
	
	@RequestMapping(value = "/execute-course", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> executeCourse(@RequestBody Object data){
		return restHelper.postForObject("/api/course-cms/execute-course", data, Object.class);
	}
	
	@RequestMapping(value = "/get-all-trainer", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> getAllTrainer(){
		return restHelper.postForObject("/api/user/get-all-trainer", null, Object.class);
	}
	
	@RequestMapping(value = "/execute-trainer-course", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> executeTrainerCourse(@RequestBody Object data){
		return restHelper.postForObject("/api/course-cms/execute-trainer-course", data, Object.class);
	}
	
	@RequestMapping(value = "/get-unit-filter-course", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> getUnitFilterCourse(@RequestBody Object data){
		return restHelper.postForObject("/api/course-cms/get-unit-filter-course", data, Object.class);
	}
	
	@RequestMapping(value = "/cms-get-unit-in-course", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> getUnitInCourse(@RequestBody Object data){
		return restHelper.postForObject("/api/course-cms/cms-get-unit-in-course", data, Object.class);
	}
	
	@RequestMapping(value = "/execute-unit-course", method = RequestMethod.POST)
	public @ResponseBody ApiResponse<Object> executeUnitCourse(@RequestBody Object data){
		return restHelper.postForObject("/api/course-cms/execute-unit-course", data, Object.class);
	}
}
