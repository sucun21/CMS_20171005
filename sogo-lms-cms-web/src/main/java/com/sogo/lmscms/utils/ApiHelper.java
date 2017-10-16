package com.sogo.lmscms.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.sogo.lmscms.model.response.ApiResponse;
import com.sogo.lmscms.model.response.CenterInfo;
import com.sogo.lmscms.model.response.CourseInfo;
import com.sogo.lmscms.model.response.TrainerInfo;
import com.sogo.lmscms.settings.UrlEntity;

public class ApiHelper {
	
	@Autowired
	RestHelper restHelper;
	
	public ApiResponse<List<CenterInfo>> getAllCenter(){
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_CENTER, CenterInfo.class);
	};
	
	public ApiResponse<List<CourseInfo>> getAllCourse(){
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_COURSE, CourseInfo.class);
	}
	
	public ApiResponse<List<TrainerInfo>> getAllTrainer(){
		return restHelper.postForListObject(UrlEntity.A_GET_ALL_TRAINER, TrainerInfo.class);
	}
	
}
