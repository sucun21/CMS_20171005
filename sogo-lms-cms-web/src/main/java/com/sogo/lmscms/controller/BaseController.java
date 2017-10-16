package com.sogo.lmscms.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;

@Controller
public class BaseController {
	
	protected String GetCookieValue(HttpServletRequest request, String cookieName){
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
	
	protected String getStringFromInputStream(InputStream is) {

		BufferedReader br = null;
		StringBuilder sb = new StringBuilder();

		String line;
		try {

			br = new BufferedReader(new InputStreamReader(is));
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		return sb.toString();

	}
	
}
