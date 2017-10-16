package vn.sogo.lmscms.services.interfaceservice;

import java.util.List;

import vn.sogo.lmscms.model.CUDReturnMessage;
import vn.sogo.lmscms.model.request.coursecms.ExcuteTrainerCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteCanDo;
import vn.sogo.lmscms.model.request.coursecms.ExecuteCourse;
import vn.sogo.lmscms.model.request.coursecms.ExecuteLesson;
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

/**
 * Created by VinhLe on 4/20/2017.
 */
public interface ICourseCMSService {

	List<CourseInfo> GetCourseByUserType(UserInfo model) throws Exception;
	
	CourseInfo GetCourseByCourseId(Integer courseId) throws Exception;

	List<CanDoInfo> GetCanDoInUnit(Integer unitId) throws Exception;
	
	List<CanDoInfo> GetCanDoInLesson(Integer lessionId) throws Exception;

	ActivityDetails GetActivityDetail(Integer activityId) throws Exception;

	List<UnitInCourse> GetUnitInCourse(int courseId) throws Exception;
	
	List<TrainerCourseInfo> GetTrainerInCourse(Integer courseId) throws Exception;
	
	UnitInfo GetUnitInfoByUnitId(Integer unitId) throws Exception;
	
	List<LessonInUnit> GetLessonInUnit(Integer unitId) throws Exception;
	
	LessonInfo GetLessonInfoByLessonId(Integer lessonId) throws Exception;
	
	List<ActivityDetails> GetActivityInLesson(Integer lessonId) throws Exception;
	
	List<UnitInfo> GetAllUnit(Integer courseId) throws Exception;
	
    CUDReturnMessage ExecuteTrainerCourse(ExcuteTrainerCourse model)throws Exception;
	
	CUDReturnMessage ExecuteUnitCourse(ExecuteUnitCourse model)throws Exception;
	
	CUDReturnMessage ExecuteCourse(ExecuteCourse model)throws Exception;
	
	CUDReturnMessage ExecuteCanDo(ExecuteCanDo model)throws Exception;
	
	CUDReturnMessage ExecuteLesson(ExecuteLesson model)throws Exception;


}
