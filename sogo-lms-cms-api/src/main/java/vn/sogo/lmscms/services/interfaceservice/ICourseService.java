package vn.sogo.lmscms.services.interfaceservice;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.GetActivityCatalougeRequest;

import java.util.List;

/**
 * Created by VinhLe on 4/20/2017.
 */
public interface ICourseService {

	List<CourseInfo> GetAllCourse() throws Exception;
	
	List<IntroductionClassInfo> getIntroClassByCenterAndCourse(Integer centerId, Integer courseId) throws Exception;

	List<CourseActivity> GetCourseActivity(Integer courseId) throws Exception;

	List<UnitInCourse> GetUnitInCourse(Integer courseId) throws Exception;

	List<CourseHoliday> GetCourseHoliday() throws Exception;

	List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception;

	List<ActivityCatalouge> GetActivityCatalouge(GetActivityCatalougeRequest request) throws Exception;

	ActivityDetails GetActivityDetail(Integer activityId) throws Exception;

	List<QuizQuestion> GetQuizQuestion(Integer activityId) throws Exception;

}
