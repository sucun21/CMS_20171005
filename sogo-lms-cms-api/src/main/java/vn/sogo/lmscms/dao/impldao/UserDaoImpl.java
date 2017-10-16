package vn.sogo.lmscms.dao.impldao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.IUserDao;
import vn.sogo.lmscms.helpers.MySqlHelper;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;

public class UserDaoImpl implements IUserDao {
	@Autowired
	MySqlHelper mySqlHelper;
	
	@Override
    public UserSessionInfo checkLogin(String email, String password) throws Exception {
    	
		UserSessionInfo result = null;
    	
    	if(!email.isEmpty() && !password.isEmpty()){
    		Object[] params = new Object[]{
    				email,
    				password
        	};
    		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_checklogin", params, UserSessionInfo.class);
    	}
    	
        return result;
    }
	
	@Override
	public List<CenterInfo> getAllCenter() throws Exception{
		List<CenterInfo> result = new ArrayList<CenterInfo>();
		
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_center", CenterInfo.class);
		
		return result;
	}
	
	@Override
	public List<StudentInfo> getAllStudent(GetStudentRequest request) throws Exception{
		List<StudentInfo> result = new ArrayList<StudentInfo>();
		
		Object[] params = new Object[]{
				request.getSearchKey(),
				request.getCenterId(),
				request.getCourseId(),
				request.getStudentStatus(),
				request.getPageNumber(),
				request.getPageSize()
    	};
		
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_student", params, StudentInfo.class);
		
		return result;
	}
	
	@Override
	public List<StudentCourse> getStudentCourse(GetStudentRequest request, Integer studentId) throws Exception{
		List<StudentCourse> result = new ArrayList<StudentCourse>();
		
		Object[] params = new Object[]{
				request.getSearchKey(),
				studentId,
				request.getCenterId(),
				request.getCourseId()
    	};
		
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_student_course", params, StudentCourse.class);
		
		return result;
	}
	
	@Override
	public CUDReturnMessage addNewStudent(AddNewStudentRequest request) throws Exception {
		CUDReturnMessage result = new CUDReturnMessage();
		
		Object[] params = new Object[]{
				request.getFirstName(),
				request.getLastName(),
				request.getUserEmail(),
				request.getUserPhone(),
				request.getPassword(),
				request.getDateOfBirth(),
				request.getGender(),
				request.getCenterId(),
				request.getCourseId(),
				request.getContractNo(),
				request.getIntroClassId(),
				request.getNormalClassId(),
				request.getStartDate(),
				request.getEndDate(),
				request.getAvatarUrl(),
				request.getCreatedBy()
    	};
		
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_add_new_student_v2", params, CUDReturnMessage.class);
		
		return result;
	}
	
	@Override
	public List<TrainerInfo> GetAllTrainer() throws Exception {
		List<TrainerInfo> result = new ArrayList<TrainerInfo>();
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_trainer_info", TrainerInfo.class);
		return result;
	}
	
	@Override
	public StudentDetails GetStudentInfo(Integer studentId) throws Exception {
		StudentDetails result = new StudentDetails();
		
		Object[] params = new Object[]{
				studentId
    	};
		
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_student_info", params, StudentDetails.class);
		return result;
	}
	
	@Override
	public List<ActivityLogInfo> GetStudentActivityLog(GetStudentActivityLogRequest request) throws Exception {
		List<ActivityLogInfo> result = new ArrayList<ActivityLogInfo>();
		
		Object[] params = new Object[]{
				request.getStudentId(),
				request.getCourseTraineeId()
    	};
		
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_student_activity_log", params, ActivityLogInfo.class);
		return result;
	}
	
	@Override
	public List<CommentType> GetAllCommentType() throws Exception {
		List<CommentType> result = new ArrayList<CommentType>();
				
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_comment_type", CommentType.class);
		return result;
	}
	
	@Override
	public List<CommentResult> GetAllCommentResult(Integer commentTypeId) throws Exception {
		List<CommentResult> result = new ArrayList<CommentResult>();
		
		Object[] params = new Object[]{
				commentTypeId
    	};
		
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_comment_result", params, CommentResult.class);
		return result;
	}
	
	@Override
	public CUDReturnMessage ResetStudentPassword(ResetStudentPasswordRequest request) throws Exception {
		CUDReturnMessage result = new CUDReturnMessage();
		
		Object[] params = new Object[]{
				request.getActionUser(),
				request.getStudentId(),
				request.getNewPassword()
    	};
		
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_reset_student_password", params, CUDReturnMessage.class);
		
		return result;
	}
	
	@Override
	public CUDReturnMessage AddActivityLog(AddActivityLogRequest request) throws Exception {
		CUDReturnMessage result = new CUDReturnMessage();
		
		Object[] params = new Object[]{
				request.getCommentContent(),
				request.getCommentTypeId(),
				request.getCommentResultId(),
				request.getTrainerId(),
				request.getCourseTraineeId(),
				request.getStudentId(),
				request.getIsAddTimeline()
    	};
		
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_add_activity_log", params, CUDReturnMessage.class);
		
		return result;
	}

	@Override
	public List<SystemUser> GetSystemUser(GetSystemUserRequest request) throws Exception {
		List<SystemUser> result=new ArrayList<SystemUser>();
		Object[] params=new Object[]{
				 request.getSearchKey(),
				 request.getUserStatus(),
				 request.getUserTypeId(),
				 request.getPageNumber(),
				 request.getPageSize(),
		};
		result=mySqlHelper.ExecuteStoreProc("web_cms_get_system_user", params, SystemUser.class);
		return result;
	}
	
	@Override
	public List<UserType> GetAllUserType() throws Exception {
		List<UserType> result = new ArrayList<UserType>();
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_all_user_type", UserType.class);
		return result;
	}
	
	@Override
	public CUDReturnMessage addNewUser(AddNewUserRequest request) throws Exception {
		CUDReturnMessage result = new CUDReturnMessage();
		
		Object[] params = new Object[]{
				request.getFirstName(),
				request.getLastName(),
				request.getUserTypeId(),
				request.getUserEmail(),
				request.getUserPhone(),
				request.getPassword(),
				request.getDateOfBirth(),
				request.getGender(),
				request.getCreatedBy()
    	};
		
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_add_new_user", params, CUDReturnMessage.class);
		
		return result;
	}
	
	@Override
	public StudentBookmarkDetail GetStudentBookmarkDetail(GetStudentBookmarkDetailRequest request) throws Exception {
		
		Object[] params = new Object[]{
				request.getCourseTraineeId(),
				request.getStudentId()
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_student_bookmark_detail", params, StudentBookmarkDetail.class);
	}
	
	@Override
	public List<StudentProperty> GetStudentProperty(GetStudentPropertyRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getCourseTraineeId(),
				request.getLessonId(),
				request.getUnitId()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_student_get_property", params, StudentProperty.class);
	}
	
	@Override
	public List<StudentQuiz> GetStudentQuiz(GetStudentQuizRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getCourseTraineeId(),
				request.getLessonId(),
				request.getUnitId()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_student_get_quiz", params, StudentQuiz.class);
	}
	
	@Override
	public List<StudentQuizDetail> GetStudentQuizDetail(Integer traineeActivityId) throws Exception {
		Object[] params = new Object[]{
			traineeActivityId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_student_get_quiz_detail", params, StudentQuizDetail.class);
	}
	
	@Override
	public List<StudentOtherActivity> GetStudentOtherActivity(GetStudentOtherActivityRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getCourseTraineeId(),
				request.getLessonId(),
				request.getUnitId()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_student_get_other_activity", params, StudentOtherActivity.class);
	}
	
	@Override
	public CUDReturnMessage UpdateStudentCourseStatus(UpdateStudentCourseStatusRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getCourseTraineeId(),
				request.getCurrentStatus(),
				request.getNewStatus()
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_student_update_course_status", params, CUDReturnMessage.class);
	}
	
	@Override
	public List<StudentCourseInfo> GetStudentAllCourse(Integer studentId) throws Exception {
		
		Object[] params = new Object[]{
				studentId
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_student_get_all_course", params, StudentCourseInfo.class);
	}
	
	@Override
    public List<ClassInfo> GetStudentClassByCourse(GetStudentClassByCourseRequest request) throws Exception {
    	
		List<ClassInfo> result = null;
    	
		Object[] params = new Object[]{
    			request.getTraineeId(),
    			request.getCourseTraineeId(),
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_student_get_class_by_course", params, ClassInfo.class);

        return result;
    }
	
	@Override
    public CUDReturnMessage RetakeStudentClass(RetakeStudentClassRequest request) throws Exception {
	
		Object[] params = new Object[]{
    			request.getCourseTraineeId(),
    			request.getOldClassId(),
    			request.getClassId(),
    			request.getUnitId(),
    			request.getCreatedBy()
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_student_retake_class", params, CUDReturnMessage.class);
	}
	
}
