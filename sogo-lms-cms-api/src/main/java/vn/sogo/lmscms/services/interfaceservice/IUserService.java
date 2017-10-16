package vn.sogo.lmscms.services.interfaceservice;

import java.util.List;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;

/**
 * Created by VinhLe on 4/20/2017.
 */
public interface IUserService {

//    protected static final String E_URL = "FE_API_USER";
	String CheckLogin(String email, String password) throws Exception;
	UserSessionInfo GetUserInfoBySession(String sessionKey) throws Exception;
	List<CenterInfo> GetAllCenter() throws Exception;
	Boolean ClearSessionKey(String sessionKey) throws Exception;
	List<StudentInfo> GetAllStudent(GetStudentRequest request) throws Exception;
	CUDReturnMessage AddNewStudent(AddNewStudentRequest req) throws Exception;
	List<TrainerInfo> GetAllTrainer() throws Exception;
	StudentDetails GetStudentInfo(Integer studentId) throws Exception;
	List<ActivityLogInfo> GetStudentActivityLog(GetStudentActivityLogRequest request) throws Exception;
	List<CommentType> GetAllCommentType() throws Exception;
	List<CommentResult> GetAllCommentResult(Integer commentTypeId) throws Exception;
	CUDReturnMessage ResetStudentPassword(ResetStudentPasswordRequest request) throws Exception;
	CUDReturnMessage AddActivityLog(AddActivityLogRequest request) throws Exception;
	List<SystemUser> GetSystemUser(GetSystemUserRequest request) throws Exception;
	List<UserType> GetAllUserType() throws Exception;
	CUDReturnMessage AddNewUser(AddNewUserRequest req) throws Exception;
	StudentBookmarkDetail GetStudentBookmarkDetail(GetStudentBookmarkDetailRequest request) throws Exception;
	List<StudentProperty> GetStudentProperty(GetStudentPropertyRequest request) throws Exception;
	List<StudentQuiz> GetStudentQuiz(GetStudentQuizRequest request) throws Exception;
	List<StudentOtherActivity> GetStudentOtherActivity(GetStudentOtherActivityRequest request) throws Exception;
	CUDReturnMessage UpdateStudentCourseStatus(UpdateStudentCourseStatusRequest request) throws Exception;
	List<StudentCourseInfo> GetStudentAllCourse(Integer studentId) throws Exception;
	List<ClassInfo> GetStudentClassByCourse(GetStudentClassByCourseRequest request) throws Exception;
	CUDReturnMessage RetakeStudentClass(RetakeStudentClassRequest request) throws Exception;
}
