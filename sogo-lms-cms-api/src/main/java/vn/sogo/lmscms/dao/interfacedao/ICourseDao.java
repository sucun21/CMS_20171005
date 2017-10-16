package vn.sogo.lmscms.dao.interfacedao;

import java.util.List;

import vn.sogo.lmscms.model.ActivityCatalouge;
import vn.sogo.lmscms.model.ActivityDetails;
import vn.sogo.lmscms.model.CourseActivity;
import vn.sogo.lmscms.model.CourseHoliday;
import vn.sogo.lmscms.model.CourseInfo;
import vn.sogo.lmscms.model.IntroductionClassInfo;
import vn.sogo.lmscms.model.LessonInUnit;
import vn.sogo.lmscms.model.QuestionAnswer;
import vn.sogo.lmscms.model.QuizQuestion;
import vn.sogo.lmscms.model.UnitInCourse;
import vn.sogo.lmscms.model.request.GetActivityCatalougeRequest;

public interface ICourseDao {
	List<CourseInfo> getAllCourse() throws Exception;
	List<IntroductionClassInfo> getIntroClassByCenterAndCourse(Integer centerId, Integer courseId) throws Exception;
	List<CourseActivity> GetCourseActivity(Integer courseId) throws Exception;
	List<UnitInCourse> GetUnitInCourse(Integer courseId) throws Exception;
	List<CourseHoliday> GetCourseHoliday() throws Exception;
	List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception;
	List<ActivityCatalouge> GetActivityCatalouge(GetActivityCatalougeRequest request) throws Exception;
	ActivityDetails GetActivityDetail(Integer activityId) throws Exception;
	List<QuizQuestion> GetQuizQuestion(Integer activityId) throws Exception;
	List<QuestionAnswer> GetQuestionAnswer(Integer questionId) throws Exception;
}
