package vn.sogo.lmscms.services.implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.impldao.CourseCMSDaoImpl;
import vn.sogo.lmscms.model.CUDReturnMessage;
import vn.sogo.lmscms.model.request.coursecms.ExcuteTrainerCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteCanDo;
import vn.sogo.lmscms.model.request.coursecms.ExecuteCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteUnitCourse;
import vn.sogo.lmscms.model.request.coursecms.UserInfo;
import vn.sogo.lmscms.model.response.coursecms.ActivityDetails;
import vn.sogo.lmscms.model.response.coursecms.CanDoInfo;
import vn.sogo.lmscms.model.response.coursecms.CourseInfo;
import vn.sogo.lmscms.model.response.coursecms.LessonInUnit;
import vn.sogo.lmscms.model.response.coursecms.LessonInfo;
import vn.sogo.lmscms.model.response.coursecms.TrainerCourseInfo;
import vn.sogo.lmscms.model.response.coursecms.UnitInCourse;
import vn.sogo.lmscms.model.response.coursecms.UnitInfo;
import vn.sogo.lmscms.services.interfaceservice.ICourseCMSService;
/**
 * Created by VinhLe on 4/20/2017.
 */
public class CourseServiceCMSImpl extends BaseService implements ICourseCMSService {

    /*----------------------------------- Variable $CourseService ---------------------------------------------*/

//    private static final String DEFAULT_E_URL = "FE_COURSE_API";

    @Autowired
    CourseCMSDaoImpl courseCMSDao;

    /*----------------------------------- Method $CourseService ---------------------------------------------*/

    
    @Override
	public List<UnitInCourse> GetUnitInCourse(int courseId) throws Exception{
    	return courseCMSDao.GetUnitInCourse(courseId);
    }
    
    @Override
	public CourseInfo GetCourseByCourseId(Integer courseId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetCourseByCourseId(courseId);
	}
    
    @Override
	public ActivityDetails GetActivityDetail(Integer activityId) throws Exception{
    	return courseCMSDao.GetActivityDetail(activityId);
    }

	@Override
	public List<CanDoInfo> GetCanDoInUnit(Integer unitId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetCanDoInUnit(unitId);
	}

	@Override
	public List<CanDoInfo> GetCanDoInLesson(Integer lessonId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetCanDoInLesson(lessonId);
	}

	@Override
	public List<TrainerCourseInfo> GetTrainerInCourse(Integer courseId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetTrainerInCourse(courseId);
	}

	@Override
	public UnitInfo GetUnitInfoByUnitId(Integer unitId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetUnitInfoByUnitId(unitId);
	}

	@Override
	public LessonInfo GetLessonInfoByLessonId(Integer lessonId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetLessonInfoByLessonId(lessonId);
	}

	@Override
	public List<ActivityDetails> GetActivityInLesson(Integer lessonId) throws Exception {
		return courseCMSDao.GetActivityInLesson(lessonId);
	}

	@Override
	public List<UnitInfo> GetAllUnit(Integer courseId) throws Exception {
		return courseCMSDao.GetAllUnit(courseId);
	}

	@Override
	public CUDReturnMessage ExecuteTrainerCourse(ExcuteTrainerCourse model)
			throws Exception {
		return courseCMSDao.ExecuteTrainerCourse(model);
	}

	@Override
	public CUDReturnMessage ExecuteUnitCourse(ExecuteUnitCourse model) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.ExecuteUnitCourse(model);
	}

	@Override
	public CUDReturnMessage ExecuteCourse(ExecuteCourse model) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.ExecuteCourse(model);
	}

	@Override
	public List<CourseInfo> GetCourseByUserType(UserInfo model) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetCourseByUserType(model);
	}

	@Override
	public List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception {
		// TODO Auto-generated method stub
		return courseCMSDao.GetLessonInUnit(unitId);
	}

	@Override
	public CUDReturnMessage ExecuteCanDo(ExecuteCanDo model) throws Exception {
		return courseCMSDao.ExecuteCanDo(model);
	}

	@Override
	public CUDReturnMessage ExecuteLesson(vn.sogo.lmscms.model.request.coursecms.ExecuteLesson model) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
}
