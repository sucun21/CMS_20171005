package vn.sogo.lmscms.dao.impldao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.ICourseDao;
import vn.sogo.lmscms.helpers.MySqlHelper;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;

public class CourseDaoImpl implements ICourseDao {
	@Autowired
	MySqlHelper mySqlHelper;
	
	@Override
    public List<CourseInfo> getAllCourse() throws Exception{
    	
		List<CourseInfo> result = new ArrayList<CourseInfo>();
    	
    	result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_course", CourseInfo.class);

        return result;
    }
	
	@Override
	public List<IntroductionClassInfo> getIntroClassByCenterAndCourse(Integer centerId, Integer courseId) throws Exception{
		List<IntroductionClassInfo> result = new ArrayList<IntroductionClassInfo>();
    	
		Object[] params = new Object[]{
				centerId,
				courseId
    	};
		
    	result = mySqlHelper.ExecuteStoreProc("web_cms_get_intro_class_by_center_and_course", params, IntroductionClassInfo.class);

        return result;
	}
	
	@Override
	public List<CourseActivity> GetCourseActivity(Integer courseId) throws Exception{
		Object[] params = new Object[]{
				courseId
    	};
		
    	return mySqlHelper.ExecuteStoreProc("web_cms_get_course_activity", params, CourseActivity.class);
	}
	
	@Override
	public List<UnitInCourse> GetUnitInCourse(Integer courseId) throws Exception{
		Object[] params = new Object[]{
				courseId
    	};
		
    	return mySqlHelper.ExecuteStoreProc("web_cms_course_get_unit_in_course", params, UnitInCourse.class);
	}
	@Override
	public List<CourseHoliday> GetCourseHoliday() throws Exception{		
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_holiday", CourseHoliday.class);
	}
	
	@Override
	public List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception{	
		Object[] params = new Object[]{
				unitId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_lesson_in_unit", params, LessonInUnit.class);
	}
	@Override
	public List<ActivityCatalouge> GetActivityCatalouge(GetActivityCatalougeRequest request) throws Exception{	
		Object[] params = new Object[]{
				request.getCourseId(),
				request.getUnitId(),
				request.getLessonId()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_activity_catalouge", params, ActivityCatalouge.class);
	
	}
	
	@Override
	public ActivityDetails GetActivityDetail(Integer activityId) throws Exception{
		Object[] params = new Object[]{
				activityId
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_course_get_activity_by_id", params, ActivityDetails.class);
	}
	
	@Override
	public List<QuizQuestion> GetQuizQuestion(Integer activityId) throws Exception{
		Object[] params = new Object[]{
				activityId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_activity_quiz_question", params, QuizQuestion.class);
	}
	
	@Override
	public List<QuestionAnswer> GetQuestionAnswer(Integer questionId) throws Exception{
		Object[] params = new Object[]{
				questionId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_question_answer", params, QuestionAnswer.class);
	}
	
	
	
}
