package com.sogo.lmscms.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.sogo.lmscms.model.response.ApiResponse;

public class RestHelper {
	@Autowired
	RestTemplate restTemplate;
	
	private String restServerUrl = "";
	
	public void setRestServerUrl(String restServerUrl) {
		this.restServerUrl = restServerUrl;
	}
	
	public <T> ApiResponse<T> postForObject(String url, Object request, Class<T> clazz){
		ApiResponse<T> result = null;
		String reqUrl = restServerUrl + url;
		ObjectMapper mapper = new ObjectMapper();
		String response = restTemplate.postForObject(reqUrl, request, String.class);
		TypeFactory t = TypeFactory.defaultInstance();
		try{
			result = mapper.readValue(response, t.constructParametrizedType(ApiResponse.class, ApiResponse.class, clazz));
		}
		catch(Exception ex){
			
		}
		return result;
	}
	
	public <T> ApiResponse<List<T>> postForListObject(String url, Class<T> clazz){
		return postForListObject(url, null, clazz);
	}
	
	public <T> ApiResponse<List<T>> postForListObject(String url, Object request, Class<T> clazz){
		ApiResponse<List<T>> result = null;
		String reqUrl = restServerUrl + url;
		ObjectMapper mapper = new ObjectMapper();
		String response = restTemplate.postForObject(reqUrl, request, String.class);
		TypeFactory t = TypeFactory.defaultInstance();
		JavaType inner = TypeFactory.defaultInstance().constructParametrizedType(List.class, List.class, clazz);
		try{
			result = mapper.readValue(response, t.constructParametrizedType(ApiResponse.class, ApiResponse.class, inner));
		}
		catch(Exception ex){
			
		}
		return result;
	}
}
