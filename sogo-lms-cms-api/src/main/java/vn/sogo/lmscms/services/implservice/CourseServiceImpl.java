package vn.sogo.lmscms.services.implservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import vn.sogo.lmscms.dao.impldao.*;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.GetActivityCatalougeRequest;
import vn.sogo.lmscms.services.interfaceservice.ICourseService;
/**
 * Created by VinhLe on 4/20/2017.
 */
public class CourseServiceImpl extends BaseService implements ICourseService {

    /*----------------------------------- Variable $CourseService ---------------------------------------------*/

//    private static final String DEFAULT_E_URL = "FE_COURSE_API";

    @Autowired
    CourseDaoImpl courseDao;

    /*----------------------------------- Method $CourseService ---------------------------------------------*/

    @Override
    public List<CourseInfo> GetAllCourse() throws Exception {    	
    	return courseDao.getAllCourse();
    }
    
    @Override
    public List<IntroductionClassInfo> getIntroClassByCenterAndCourse(Integer centerId, Integer courseId) throws Exception{
    	List<IntroductionClassInfo> result = new ArrayList<IntroductionClassInfo>();
    	
    	if(centerId > 0 && courseId > 0)
    		result = courseDao.getIntroClassByCenterAndCourse(centerId, courseId);
    	
    	return result;
    }
    
    @Override
	public List<CourseActivity> GetCourseActivity(Integer courseId) throws Exception{
    	return courseDao.GetCourseActivity(courseId);
    }
    
    @Override
	public List<UnitInCourse> GetUnitInCourse(Integer courseId) throws Exception{
    	return courseDao.GetUnitInCourse(courseId);
    }
    
    @Override
	public List<CourseHoliday> GetCourseHoliday() throws Exception{		
    	return courseDao.GetCourseHoliday();
    }
    
    @Override
	public List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception{	
    	return courseDao.GetLessonInUnit(unitId);
    }
    
    @Override
	public List<ActivityCatalouge> GetActivityCatalouge(GetActivityCatalougeRequest request) throws Exception{
    	return courseDao.GetActivityCatalouge(request);
    }
    
    @Override
	public ActivityDetails GetActivityDetail(Integer activityId) throws Exception{
    	return courseDao.GetActivityDetail(activityId);
    }
    
    @Override
	public List<QuizQuestion> GetQuizQuestion(Integer activityId) throws Exception{
    	
    	List<QuizQuestion> listQuestion = courseDao.GetQuizQuestion(activityId);
    	
    	for(QuizQuestion question: listQuestion){
			question.setListAnswer(courseDao.GetQuestionAnswer(question.getQuestionId()));
		}
    	
    	return listQuestion;
    }
}
