package vn.sogo.lmscms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.model.response.*;
import vn.sogo.lmscms.services.interfaceservice.IUserService;
import vn.sogo.lmscms.settings.UrlEntity;

@RestController
@RequestMapping(UrlEntity.E_USER)
public class UserApiController extends BaseController {

    /*----------------------------------- Variable $UserApiController ---------------------------------------------*/

//    private static final Logger logger = Logger.getLogger(UserApiController.class);

    @Autowired
    IUserService userService;

    /*----------------------------------- Method $UserApiController ---------------------------------------------*/

    @RequestMapping(value = UrlEntity.A_CHECK_LOGIN, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<String> CheckLogin(@RequestBody CheckLoginRequest model) throws Exception {
        return responseResult(userService.CheckLogin(model.getEmail(), model.getPassword()));
    }
    
    @RequestMapping(value = UrlEntity.A_CLEAR_SESSION_KEY, method = RequestMethod.POST, consumes = MediaType.TEXT_PLAIN_VALUE)
    public @ResponseBody ApiResponse<Boolean> ClearSessionKey(@RequestBody String sessionKey) throws Exception {
        return responseResult(userService.ClearSessionKey(sessionKey));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_USER_INFO_BY_SESSION, method = RequestMethod.POST, consumes = MediaType.TEXT_PLAIN_VALUE)
    public @ResponseBody ApiResponse<UserSessionInfo> GetUserInfoBySession(@RequestBody String sessionKey) throws Exception {
        return responseResult(userService.GetUserInfoBySession(sessionKey));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_CENTER, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<CenterInfo>> GetAllCenter() throws Exception {
        return responseResult(userService.GetAllCenter());
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_STUDENT, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentInfo>> GetAllStudent(@RequestBody GetStudentRequest request) throws Exception {
        return responseResult(userService.GetAllStudent(request));
    }
    
    @RequestMapping(value = UrlEntity.A_ADD_NEW_STUDENT, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> GetAllStudent(@RequestBody AddNewStudentRequest model) throws Exception {
        return responseResult(userService.AddNewStudent(model));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_TRAINER, method = RequestMethod.POST)
    @CrossOrigin
    public @ResponseBody ApiResponse<List<TrainerInfo>> GetAllTrainer() throws Exception {
        return responseResult(userService.GetAllTrainer());
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_INFO, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<StudentDetails> GetStudentInfo(@RequestBody Integer studentId) throws Exception {
        return responseResult(userService.GetStudentInfo(studentId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_ACTIVITY_LOG, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<ActivityLogInfo>> GetStudentActivityLog(@RequestBody GetStudentActivityLogRequest request) throws Exception {
        return responseResult(userService.GetStudentActivityLog(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_COMMENT_TYPE, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<CommentType>> GetAllCommentType() throws Exception {
        return responseResult(userService.GetAllCommentType());
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_COMMENT_RESULT, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<CommentResult>> GetAllCommentResult(@RequestBody Integer commentTypeId) throws Exception {
        return responseResult(userService.GetAllCommentResult(commentTypeId));
    }
    
    @RequestMapping(value = UrlEntity.A_RESET_STUDENT_PASSWORD, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> ResetStudentPassword(@RequestBody ResetStudentPasswordRequest request) throws Exception {
        return responseResult(userService.ResetStudentPassword(request));
    }
    
    @RequestMapping(value = UrlEntity.A_ADD_ACTIVITY_LOG, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> AddActivityLog(@RequestBody AddActivityLogRequest request) throws Exception {
        return responseResult(userService.AddActivityLog(request));
    }
    @RequestMapping(value = UrlEntity.A_GET_SYSTEM_USER, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<SystemUser>> GetSystemUser(@RequestBody GetSystemUserRequest request) throws Exception {
        return responseResult(userService.GetSystemUser(request));
    }
    @RequestMapping(value = UrlEntity.A_GET_ALL_USER_TYPE, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<UserType>> GetAllUserType() throws Exception {
        return responseResult(userService.GetAllUserType());
    }
    @RequestMapping(value = UrlEntity.A_ADD_NEW_USER, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> AddNewUser(@RequestBody AddNewUserRequest model) throws Exception {
        return responseResult(userService.AddNewUser(model));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_BOOKMARK_DETAIL, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<StudentBookmarkDetail> GetStudentBookmarkDetail(@RequestBody GetStudentBookmarkDetailRequest request) throws Exception {
        return responseResult(userService.GetStudentBookmarkDetail(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_PROPERTY, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentProperty>> GetStudentProperty(@RequestBody GetStudentPropertyRequest request) throws Exception {
        return responseResult(userService.GetStudentProperty(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_QUIZ, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentQuiz>> GetStudentQuiz(@RequestBody GetStudentQuizRequest request) throws Exception {
        return responseResult(userService.GetStudentQuiz(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_OTHER_ACTIVITY, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentOtherActivity>> GetStudentQuiz(@RequestBody GetStudentOtherActivityRequest request) throws Exception {
        return responseResult(userService.GetStudentOtherActivity(request));
    }
    
    @RequestMapping(value = UrlEntity.A_UPDATE_STUDENT_COURSE_STATUS, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> UpdateStudentCourseStatus(@RequestBody UpdateStudentCourseStatusRequest request) throws Exception {
        return responseResult(userService.UpdateStudentCourseStatus(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_ALL_COURSE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentCourseInfo>> GetStudentAllCourse(@RequestBody Integer studentId) throws Exception {
        return responseResult(userService.GetStudentAllCourse(studentId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_CLASS_BY_COURSE, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<ClassInfo>> GetStudentClassByCourse(@RequestBody GetStudentClassByCourseRequest request) throws Exception {
        return responseResult(userService.GetStudentClassByCourse(request));
    }
    
    @RequestMapping(value = UrlEntity.A_RETAKE_STUDENT_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> RetakeStudentClass(@RequestBody RetakeStudentClassRequest request) throws Exception {
        return responseResult(userService.RetakeStudentClass(request));
    }
    
}
