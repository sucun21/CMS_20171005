package vn.sogo.lmscms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.model.response.ApiResponse;
import vn.sogo.lmscms.services.interfaceservice.ICourseService;

import java.util.List;
import vn.sogo.lmscms.settings.UrlEntity;

@RestController
@RequestMapping(UrlEntity.E_COURSE)
public class CourseApiController extends BaseController {

    /*----------------------------------- Variable $CourseApiController ---------------------------------------------*/

    @Autowired
    ICourseService courseService;

    /*----------------------------------- Method $CourseApiController ---------------------------------------------*/

    @RequestMapping(value = UrlEntity.A_GET_ALL_COURSE, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<CourseInfo>> GetAllCourse() throws Exception {
        return responseResult(courseService.GetAllCourse());
    }
    
    @RequestMapping(value = UrlEntity.A_GET_INTRO_CLASS_BY_CENTER_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<IntroductionClassInfo>> GetIntroClassByCenterAndCourse(@RequestBody GetIntroClassByCenterAndCourseRequest req) throws Exception {
        return responseResult(courseService.getIntroClassByCenterAndCourse(req.getCenterId(), req.getCourseId()));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_COURSE_ACTIVITY, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<CourseActivity>> GetCourseActivity(@RequestBody Integer courseId) throws Exception {
        return responseResult(courseService.GetCourseActivity(courseId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_UNIT_IN_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<UnitInCourse>> GetUnitInCourse(@RequestBody Integer courseId) throws Exception {
        return responseResult(courseService.GetUnitInCourse(courseId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_COURSE_HOLIDAY, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<CourseHoliday>> GetCourseHoliday() throws Exception {
        return responseResult(courseService.GetCourseHoliday());
    }
    
    @RequestMapping(value = UrlEntity.A_GET_LESSON_IN_UNIT, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<LessonInUnit>> GetLessonInUnit(@RequestBody Integer unitId) throws Exception {
        return responseResult(courseService.GetLessonInUnit(unitId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ACTIVITY_CATALOUGE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<ActivityCatalouge>> GetActivityCatalouge(@RequestBody GetActivityCatalougeRequest request) throws Exception {
        return responseResult(courseService.GetActivityCatalouge(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ACTIVITY_BY_ID, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<ActivityDetails> GetActivityDetail(@RequestBody Integer activityId) throws Exception {
        return responseResult(courseService.GetActivityDetail(activityId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_QUIZ_QUESTION, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<QuizQuestion>> GetQuizQuestion(@RequestBody Integer activityId) throws Exception {
        return responseResult(courseService.GetQuizQuestion(activityId));
    }
}
