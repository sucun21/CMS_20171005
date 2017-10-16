package com.sogo.lmscms.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import com.sogo.lmscms.model.response.ApiResponse;
import com.sogo.lmscms.model.response.UserSessionInfo;
import com.sogo.lmscms.settings.UrlEntity;
import com.sogo.lmscms.utils.CommonUtils;
import com.sogo.lmscms.utils.RestHelper;

public class ExecuteActionInterceptor extends HandlerInterceptorAdapter {
	
	@Autowired
    RestHelper restHelper;
	
	private boolean isResourceHandler(Object handler)
    {
        return handler instanceof ResourceHttpRequestHandler;
    }
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		if(isResourceHandler(handler)
				|| request.getRequestURL().toString().indexOf("/api") != -1
				|| request.getRequestURL().toString().indexOf("/catalouge-preview") != -1)
		{
			
		}
		else
		{
			String sessionCookie = GetCookieValue(request, CommonUtils.SESSION_COOKIE_NAME);
			
	    	if(sessionCookie != "")
	    	{
	    		//lấy thông tin session của user	
				ApiResponse<UserSessionInfo> sessionRes = restHelper.postForObject(UrlEntity.A_GET_USER_INFO_BY_SESSION, sessionCookie, UserSessionInfo.class);
	    		if(sessionRes.getData() != null){ //&& sessionRes.isSuccess()
		    		if(request.getRequestURL().toString().indexOf("/login") != -1){
		    			response.sendRedirect("/");
		    		}
	    		}
	    		else {
	    			
	    			//có cookie nhưng không có session => clear cookie
	    		  	Cookie cookie = new Cookie(CommonUtils.SESSION_COOKIE_NAME, null); // Not necessary, but saves bandwidth.
	    	    	cookie.setDomain(CommonUtils.SESSION_COOKIE_DOMAIN);
	    	    	cookie.setHttpOnly(true);
	    	    	cookie.setMaxAge(0); // Don't set to -1 or it will become a session cookie!
	    	    	response.addCookie(cookie);
	    			
	        		response.sendRedirect("/login");
	        	}
	    	}
	    	else if(request.getRequestURL().toString().indexOf("/login") == -1 &&
	    			request.getRequestURL().toString().indexOf("/doLogin") == -1){
	    		response.sendRedirect("/login");
	    	}
		}
    	
    	return true;
	}
	
//	public void postHandle(HttpServletRequest request,
//            HttpServletResponse response,
//            Object handler,
//            ModelAndView modelAndView) throws Exception{
//		
//		modelAndView.setViewName("index");
//	}
	
	private String GetCookieValue(HttpServletRequest request, String cookieName){
		String result = "";
		
		Cookie[] cookies = request.getCookies();
		
		if(cookies != null && cookies.length > 0)
		{
			for (Cookie c : cookies) {
	            if (c.getName().equals(cookieName)){
	                return c.getValue();
	            }
	        }
		}
		
		return result;
	}
}
