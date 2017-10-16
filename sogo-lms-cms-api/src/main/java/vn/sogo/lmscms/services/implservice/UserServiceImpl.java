package vn.sogo.lmscms.services.implservice;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.impldao.UserDaoImpl;
import vn.sogo.lmscms.helpers.PasswordHelper;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.services.interfaceservice.IUserService;
import vn.sogo.lmscms.settings.RedisKeyEntity;

/**
 * Created by VinhLe on 4/20/2017.
 */
public class UserServiceImpl extends BaseService implements IUserService {

	// private static final String DEFAULT_E_URL = "BE_USER_API";
	private static final String REDIS_KEY_BE_SESSION = "BE_SS_%s_%s";

	@Autowired
	UserDaoImpl userDao;

	@Override
	public String CheckLogin(String email, String password) throws Exception {

		String result = "";

		UserSessionInfo checkResult = userDao.checkLogin(email, PasswordHelper.ParseToMD5(password));

		if (checkResult != null) {

			String sessionKey = String.format(REDIS_KEY_BE_SESSION, checkResult.getUserId(), new Date().getTime());

			writeCache(sessionKey, checkResult, RedisKeyEntity.DEFAULT_SECONDS_CACHE_SESSION);

			result = sessionKey;
		}

		return result;
	}

	@Override
	public Boolean ClearSessionKey(String sessionKey) throws Exception {

		deleteCache(sessionKey);

		return Boolean.TRUE;
	}

	@Override
	public UserSessionInfo GetUserInfoBySession(String sessionKey) throws Exception {		
		return (UserSessionInfo) getCache(sessionKey);
	}

	@Override
	public List<CenterInfo> GetAllCenter() throws Exception {
		return userDao.getAllCenter();
	}

	@Override
	public List<StudentInfo> GetAllStudent(GetStudentRequest request) throws Exception {
		
		List<StudentInfo> result = userDao.getAllStudent(request);
		
		if(result != null && result.size() > 0){
			for(StudentInfo item : result){
				item.setStudentCourse(userDao.getStudentCourse(request, item.getUserId()));
			}
		}
		
		return result;
	}

	@Override
	public CUDReturnMessage AddNewStudent(AddNewStudentRequest request) throws Exception {

		String md5Password = PasswordHelper.ParseToMD5(request.getPassword());

		request.setPassword(md5Password);

		return userDao.addNewStudent(request);
	}

	@Override
	public List<TrainerInfo> GetAllTrainer() throws Exception {
		return userDao.GetAllTrainer();
	}
	
	@Override
	public StudentDetails GetStudentInfo(Integer studentId) throws Exception {
		return userDao.GetStudentInfo(studentId);
	}
	
	@Override
	public List<ActivityLogInfo> GetStudentActivityLog(GetStudentActivityLogRequest request) throws Exception {
		return userDao.GetStudentActivityLog(request);
	}
	
	@Override
	public List<CommentType> GetAllCommentType() throws Exception {
		return userDao.GetAllCommentType();
	}
	
	@Override
	public List<CommentResult> GetAllCommentResult(Integer commentTypeId) throws Exception {
		return userDao.GetAllCommentResult(commentTypeId);
	}
	
	@Override
	public CUDReturnMessage ResetStudentPassword(ResetStudentPasswordRequest request) throws Exception {
		request.setNewPassword(PasswordHelper.ParseToMD5(request.getNewPassword()));
		
		return userDao.ResetStudentPassword(request);
	}
	
	@Override
	public CUDReturnMessage AddActivityLog(AddActivityLogRequest request) throws Exception {
		CUDReturnMessage result = userDao.AddActivityLog(request);
		
		if(result.getId() != -1 && request.getIsAddTimeline() != null && request.getIsAddTimeline()){
			//clear cache
			deleteCache(String.format(redisKeyPatternStudentTimline, request.getStudentId(), result.getId()));
		}
		
		return result;
	}

	@Override
	public List<SystemUser> GetSystemUser(GetSystemUserRequest request) throws Exception {
		return userDao.GetSystemUser(request);
	}
	
	@Override
	public List<UserType> GetAllUserType() throws Exception {
		return userDao.GetAllUserType();
	}
	
	@Override
	public CUDReturnMessage AddNewUser(AddNewUserRequest request) throws Exception {

		String md5Password = PasswordHelper.ParseToMD5(request.getPassword());

		request.setPassword(md5Password);

		return userDao.addNewUser(request);
	}
	
	@Override
	public StudentBookmarkDetail GetStudentBookmarkDetail(GetStudentBookmarkDetailRequest request) throws Exception {
		return userDao.GetStudentBookmarkDetail(request);
	}
	
	@Override
	public List<StudentProperty> GetStudentProperty(GetStudentPropertyRequest request) throws Exception {
		return userDao.GetStudentProperty(request);
	}
	
	@Override
	public List<StudentQuiz> GetStudentQuiz(GetStudentQuizRequest request) throws Exception {
		List<StudentQuiz> result = new ArrayList<StudentQuiz>();
		
		result = userDao.GetStudentQuiz(request);
		
		if(result != null && result.size() > 0){
			for(StudentQuiz item : result){
				item.setListQuizDetail(userDao.GetStudentQuizDetail(item.getTraineeActivityId()));
			}
		}
		
		return result;
	}
	
	@Override
	public List<StudentOtherActivity> GetStudentOtherActivity(GetStudentOtherActivityRequest request) throws Exception {
		return userDao.GetStudentOtherActivity(request);
	}
	
	@Override
	public CUDReturnMessage UpdateStudentCourseStatus(UpdateStudentCourseStatusRequest request) throws Exception {
		return userDao.UpdateStudentCourseStatus(request);
	}
	
	@Override
	public List<StudentCourseInfo> GetStudentAllCourse(Integer studentId) throws Exception {
		return userDao.GetStudentAllCourse(studentId);
	}
	
	@Override
    public List<ClassInfo> GetStudentClassByCourse(GetStudentClassByCourseRequest request) throws Exception {
        return userDao.GetStudentClassByCourse(request);
    }
	
	@Override
    public CUDReturnMessage RetakeStudentClass(RetakeStudentClassRequest request) throws Exception {
		return userDao.RetakeStudentClass(request);
	}
}
