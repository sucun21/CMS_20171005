package com.sogo.lmscms.controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice 
public class GlobalExceptionController {
	
	private static final Logger logger = Logger.getLogger(GlobalExceptionController.class);
		
	@ExceptionHandler(Exception.class)
	public ModelAndView handleAllException(Exception ex, WebRequest request) {
		
		ModelAndView model = new ModelAndView();
		model.setViewName("error");
		
		logger.error("Api Error", ex);
		
		return model;

	}
}
