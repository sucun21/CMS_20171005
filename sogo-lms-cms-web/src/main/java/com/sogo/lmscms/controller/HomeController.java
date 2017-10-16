package com.sogo.lmscms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping(value = {"/*", "/student/**", "/schedule/class-info/**", "/user/**", "/group-class/**", "/login", "/error/*", "/course/**"}, method = RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("index");
		// return the view called "index.html" (in the current directory)
		return model;
	}
	
	@RequestMapping(value = {"/catalouge/preview/{unitId}/{lessonId}/{activityId}"}, method = RequestMethod.GET)
	public ModelAndView catalougePreview(@PathVariable("unitId") Integer unitId, @PathVariable("lessonId") Integer lessonId, @PathVariable("activityId") Integer activityId) {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("preview");
		model.addObject("unitId", unitId);
		model.addObject("lessonId", lessonId);
		model.addObject("activityId", activityId);
		// return the view called "index.html" (in the current directory)
		return model;
	}
	
//	@RequestMapping(value = "/login", method = RequestMethod.GET)
//	public ModelAndView login() {
//		ModelAndView model = new ModelAndView();
//		
//		model.setViewName("login");
//		// return the view called "index.html" (in the current directory)
//		return model;
//	}

}
