package vn.sogo.lmscms.dao.interfacedao;

import java.util.List;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;

public interface IUserDao {

	UserSessionInfo checkLogin(String email, String password) throws Exception;
	List<CenterInfo> getAllCenter() throws Exception;
	List<StudentInfo> getAllStudent(GetStudentRequest request) throws Exception;
	CUDReturnMessage addNewStudent(AddNewStudentRequest request) throws Exception;
	List<TrainerInfo> GetAllTrainer() throws Exception;
	StudentDetails GetStudentInfo(Integer studentId) throws Exception;
	List<ActivityLogInfo> GetStudentActivityLog(GetStudentActivityLogRequest studentId) throws Exception;
	List<CommentType> GetAllCommentType() throws Exception;
	List<CommentResult> GetAllCommentResult(Integer commentTypeId) throws Exception;
	CUDReturnMessage ResetStudentPassword(ResetStudentPasswordRequest request) throws Exception;
	CUDReturnMessage AddActivityLog(AddActivityLogRequest request) throws Exception;
	List<SystemUser> GetSystemUser(GetSystemUserRequest request) throws Exception;
	List<UserType> GetAllUserType() throws Exception;
	CUDReturnMessage addNewUser(AddNewUserRequest request) throws Exception;
	StudentBookmarkDetail GetStudentBookmarkDetail(GetStudentBookmarkDetailRequest request) throws Exception;
	List<StudentProperty> GetStudentProperty(GetStudentPropertyRequest request) throws Exception;
	List<StudentQuiz> GetStudentQuiz(GetStudentQuizRequest request) throws Exception;
	List<StudentQuizDetail> GetStudentQuizDetail(Integer traineeActivityId) throws Exception;
	List<StudentOtherActivity> GetStudentOtherActivity(GetStudentOtherActivityRequest request) throws Exception;
	CUDReturnMessage UpdateStudentCourseStatus(UpdateStudentCourseStatusRequest request) throws Exception;
	List<StudentCourseInfo> GetStudentAllCourse(Integer studentId) throws Exception;
	List<ClassInfo> GetStudentClassByCourse(GetStudentClassByCourseRequest request) throws Exception;
	CUDReturnMessage RetakeStudentClass(RetakeStudentClassRequest request) throws Exception;
	List<StudentCourse> getStudentCourse(GetStudentRequest request, Integer studentId) throws Exception;
}
