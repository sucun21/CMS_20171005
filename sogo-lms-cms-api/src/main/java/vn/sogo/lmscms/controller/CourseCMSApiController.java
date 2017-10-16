package vn.sogo.lmscms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import vn.sogo.lmscms.model.CUDReturnMessage;
import vn.sogo.lmscms.model.request.coursecms.ExcuteTrainerCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteUnitCourse;
import vn.sogo.lmscms.model.request.coursecms.GetItemInCourse;
import vn.sogo.lmscms.model.request.coursecms.GetItemInLesson;
import vn.sogo.lmscms.model.request.coursecms.GetItemInUnit;
import vn.sogo.lmscms.model.request.coursecms.UserInfo;
import vn.sogo.lmscms.model.response.ApiResponse;
import vn.sogo.lmscms.model.response.coursecms.ActivityDetails;
import vn.sogo.lmscms.model.response.coursecms.CanDoInfo;
import vn.sogo.lmscms.model.response.coursecms.CourseInfo;
import vn.sogo.lmscms.model.response.coursecms.LessonInfo;
import vn.sogo.lmscms.model.response.coursecms.TrainerCourseInfo;
import vn.sogo.lmscms.model.response.coursecms.UnitInCourse;
import vn.sogo.lmscms.model.response.coursecms.UnitInfo;
import vn.sogo.lmscms.services.interfaceservice.ICourseCMSService;
import vn.sogo.lmscms.settings.UrlEntity;

@RestController
@RequestMapping(UrlEntity.E_COURSECMS)
public class CourseCMSApiController extends BaseController {

    /*----------------------------------- Variable $CourseCMSApiController ---------------------------------------------*/

    @Autowired
    ICourseCMSService courseService;

    /*----------------------------------- Method $CourseCMSApiController ---------------------------------------------*/
    
    @RequestMapping(value = UrlEntity.A_GET_UNIT_FILTER_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<UnitInfo>> GetAllUnit(@RequestBody GetItemInCourse model) throws Exception {
    	int courseId=model.getCourseId();
        return responseResult(courseService.GetAllUnit(courseId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_COURSE_BY_USER_TYPE, method = RequestMethod.POST)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<CourseInfo>> GetCourseByUserType(@RequestBody UserInfo model ) throws Exception {
        return responseResult(courseService.GetCourseByUserType(model));
    }
    
    @RequestMapping(value = UrlEntity.A_CMS_GET_UNIT_IN_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<UnitInCourse>> GetUnitInCourse(@RequestBody GetItemInCourse model) throws Exception {
    	Integer courseId=model.getCourseId();
        return responseResult(courseService.GetUnitInCourse(courseId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_UNIT_BY_UNIT_ID, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<UnitInfo> GetUnitInfoByUnitId(@RequestBody GetItemInUnit model) throws Exception {
    	Integer unitId=model.getUnitId();
        return responseResult(courseService.GetUnitInfoByUnitId(unitId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_LESSON_BY_LESSON_ID, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<LessonInfo> GetLessonInfoByLessonId(@RequestBody GetItemInLesson model) throws Exception {
    	Integer lessonId=model.getLessonId();
        return responseResult(courseService.GetLessonInfoByLessonId(lessonId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_CAN_DO_IN_UNIT, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<CanDoInfo>> GetCanDoInUnit(@RequestBody GetItemInUnit model) throws Exception {
    	Integer unitId=model.getUnitId();
        return responseResult(courseService.GetCanDoInUnit(unitId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_CAN_DO_IN_LESSON, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<CanDoInfo>> GetCanDoInLesson(@RequestBody GetItemInLesson model) throws Exception {
    	Integer lessonId=model.getLessonId();
        return responseResult(courseService.GetCanDoInLesson(lessonId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ACTIVITY_IN_LESSON, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<ActivityDetails>> GetActivityInLesson(@RequestBody GetItemInLesson model) throws Exception {
    	Integer lessonId=model.getLessonId();
        return responseResult(courseService.GetActivityInLesson(lessonId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_TRAINER_IN_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<TrainerCourseInfo>> GetTrainerInCourse(@RequestBody GetItemInCourse model) throws Exception {
    	Integer courseId=model.getCourseId();
        return responseResult(courseService.GetTrainerInCourse(courseId));
    }
    
    @RequestMapping(value = UrlEntity.A_EXECUTE_TRAINER_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<CUDReturnMessage> ExecuteTrainerCourse(@RequestBody ExcuteTrainerCourse model) throws Exception {
        return responseResult(courseService.ExecuteTrainerCourse(model));
    }
    
    @RequestMapping(value = UrlEntity.A_EXECUTE_UNIT_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<CUDReturnMessage> ExecuteUnitCourse(@RequestBody ExecuteUnitCourse model) throws Exception {
        return responseResult(courseService.ExecuteUnitCourse(model));
    }
    
    @RequestMapping(value = UrlEntity.A_EXECUTE_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody ApiResponse<CUDReturnMessage> ExecuteCourse(@RequestBody ExecuteCourse model) throws Exception {
        return responseResult(courseService.ExecuteCourse(model));
    }
    @RequestMapping(value = UrlEntity.A_CMS_GET_COURSE_BY_COURSE_ID, method = RequestMethod.POST)
    @CrossOrigin
    public @ResponseBody ApiResponse<CourseInfo> GetCourseByCourseId(@RequestBody GetItemInCourse  model ) throws Exception {
    	int courseId=model.getCourseId();
        return responseResult(courseService.GetCourseByCourseId(courseId));
    }
    
//    @RequestMapping(value = UrlEntity.A_GET_QUIZ_QUESTION, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
//    @CrossOrigin
//    public @ResponseBody ApiResponse<List<QuizQuestion>> GetQuizQuestion(@RequestBody Integer activityId) throws Exception {
//        return responseResult(courseService.GetQuizQuestion(activityId));
//    }

}
