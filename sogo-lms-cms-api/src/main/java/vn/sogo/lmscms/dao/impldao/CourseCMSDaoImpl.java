package vn.sogo.lmscms.dao.impldao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.ICourseCMSDao;
import vn.sogo.lmscms.helpers.MySqlHelper;
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


public class CourseCMSDaoImpl implements ICourseCMSDao {
	@Autowired
	MySqlHelper mySqlHelper;
	
	@Override
	public List<UnitInCourse> GetUnitInCourse(Integer courseId) throws Exception{
		Object[] params = new Object[]{
				courseId
    	};
		
    	return mySqlHelper.ExecuteStoreProc("web_cms_course_get_unit_in_course", params, UnitInCourse.class);
	}
	@Override
	public CourseInfo GetCourseByCourseId(Integer courseId) throws Exception {
		Object[] params = new Object[]{
				courseId
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_course_by_course_id",params, CourseInfo.class);
	}

	@Override
	public ActivityDetails GetActivityDetail(Integer activityId) throws Exception{
		Object[] params = new Object[]{
				activityId
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_course_get_activity_by_id", params, ActivityDetails.class);
	}
	
	

	@Override
	public List<CanDoInfo> GetCanDoInUnit(Integer unitId) throws Exception {
		Object[] params = new Object[]{
				unitId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_get_unit_can_do", params, CanDoInfo.class);
	}

	@Override
	public List<CanDoInfo> GetCanDoInLesson(Integer lessonId) throws Exception {
		Object[] params = new Object[]{
				lessonId
    	};
		return mySqlHelper.ExecuteStoreProc("web_fe_get_lesson_can_do", params, CanDoInfo.class);
	}

	@Override
	public List<TrainerCourseInfo> GetTrainerInCourse(Integer courseId) throws Exception {
		Object[] params = new Object[]{
				courseId
    	};
		
    	return mySqlHelper.ExecuteStoreProc("web_cms_get_trainer_course", params, TrainerCourseInfo.class);
	}

	@Override
	public UnitInfo GetUnitInfoByUnitId(Integer unitId) throws Exception {
		UnitInfo result=new UnitInfo();
		List<CanDoInfo> canDos=new ArrayList<CanDoInfo>();
		List<LessonInUnit> lessons=new ArrayList<LessonInUnit>();
		Object[] params = new Object[]{
				unitId
    	};
		result= mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_unit_info", params, UnitInfo.class);
		if(result!=null){
			canDos=GetCanDoInUnit(unitId);
			lessons=GetLessonInUnit(unitId);
			result.setCando(canDos);
			result.setLesson(lessons);
		}
		return result;
	}
		
	@Override
	public List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception{	
		Object[] params = new Object[]{
				unitId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_course_get_lesson_in_unit", params, LessonInUnit.class);
	}	

	@Override
	public LessonInfo GetLessonInfoByLessonId(Integer lessonId) throws Exception {
		
		Object[] params = new Object[]{
				lessonId
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_lesson_info", params, LessonInfo.class);
	}
	@Override
	public List<ActivityDetails> GetActivityInLesson(Integer lessonId) throws Exception {
		Object[] params = new Object[]{
				lessonId
    	};
		
    	return mySqlHelper.ExecuteStoreProc("web_cms_get_lesson_activity", params, ActivityDetails.class);
	}

	@Override
	public List<UnitInfo> GetAllUnit(Integer courseId) throws Exception {
		Object[] params = new Object[]{
				courseId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_get_unit_filter_course",params, UnitInfo.class);
	}

	@Override
	public CUDReturnMessage ExecuteTrainerCourse(ExcuteTrainerCourse model) throws Exception {
		Integer courseId=model.getCourseId();
		Integer trainerId=model.getTrainerId();
		String excuteType=model.getExecuteType();
		Object[] params = new Object[]{
				courseId,
				trainerId,
				excuteType
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_execute_trainer_course",params, CUDReturnMessage.class);
	}

	@Override
	public CUDReturnMessage ExecuteCourse(ExecuteCourse model) throws Exception {
		// TODO Auto-generated method stub
		Integer courseId=model.getCourseId();
		String courseTitle=model.getCourseTitle();
		String courseImage = model.getCourseImage();
		String courseDes=model.getCourseDes();
		String courseShortDes=model.getCourseShortDes();
		String executeType=model.getExecuteType();
		String updateField = model.getUpdateField();
		Object[] params = new Object[]{
				courseId,
				courseTitle,
				courseImage,
				courseDes,
				courseShortDes,
				executeType,
				updateField
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_execute_course",params, CUDReturnMessage.class);
	}

	@Override
	public CUDReturnMessage ExecuteUnitCourse(ExecuteUnitCourse model) throws Exception {
		// TODO Auto-generated method stub
		Integer courseId=model.getCourseId();
		Integer unitId=model.getUnitId();
		String unitTitle=model.getUnitTitle();
		String excuteType=model.getExecuteType();
		String unitDes=model.getUnitDes();
		String unitSumary=model.getUnitSummary();
		Object[] params = new Object[]{
				courseId,
				unitId,
				unitTitle,
				excuteType,
				unitDes,
				unitSumary
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_execute_unit_course",params, CUDReturnMessage.class);
	}

	@Override
	public List<CourseInfo> GetCourseByUserType(UserInfo model)throws Exception {
		List<CourseInfo> result = new ArrayList<CourseInfo>();
		
		int userId=model.getUserId();
		int userTypeId=model.getUserTypeId();
		Object[] params=new Object[]{
				userId,
				userTypeId
		};
    	
    	result = mySqlHelper.ExecuteStoreProc("web_cms_get_course_by_user_type",params, CourseInfo.class);
    	for(int i=0 ;i<result.size();i++){
    		int courseId=result.get(i).getCourseId();
    		List<TrainerCourseInfo> trainCourses=new ArrayList<TrainerCourseInfo>();
    		List<UnitInCourse> unitCourses=new ArrayList<UnitInCourse>();
    		trainCourses=GetTrainerInCourse(courseId);
    		unitCourses=GetUnitInCourse(courseId);
    		result.get(i).setTrainerInfo(trainCourses);
    		result.get(i).setUnitInfo(unitCourses);
    		
    	}
        return result;

	}
	@Override
	public CUDReturnMessage ExecuteCanDo(ExecuteCanDo model) throws Exception {
		int unitId=model.getUnitId();
		int lessonId=model.getLessonId();
		Object[] params=new Object[]{
				unitId,
				lessonId
		};
		return mySqlHelper.ExecuteStoreProcSingleResult("",params, CUDReturnMessage.class);
    	
	}
	@Override
	public CUDReturnMessage ExecuteLesson(vn.sogo.lmscms.model.request.coursecms.ExecuteLesson model) throws Exception {
		Integer lessonId=model.getLessonId();
		Integer unitId=model.getUnitId();
		Object[] params = new Object[]{
				lessonId,
				unitId
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_execute_unit_course",params, CUDReturnMessage.class);

	}
}
