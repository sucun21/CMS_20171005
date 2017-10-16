package vn.sogo.lmscms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import vn.sogo.lmscms.model.response.*;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.offlineclass.GroupClassItem;
import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.services.interfaceservice.IOfflineClassService;
import vn.sogo.lmscms.settings.UrlEntity;

@RestController
@RequestMapping(UrlEntity.E_OFFLINE_CLASS)
public class OfflineClassApiController extends BaseController {
	@Autowired
    IOfflineClassService offlineClassService;

    /*----------------------------------- Method $UserApiController ---------------------------------------------*/

    @RequestMapping(value = UrlEntity.A_GET_PENDING_CHECK_ATTENDANCE_CLASS, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<PendingCheckAttendanceClass>> GetPendingCheckAttendanceClass(@RequestBody GetPendingCheckAttendanceClassRequest request) throws Exception {
        return responseResult(offlineClassService.GetPendingCheckAttendanceClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_INCOMING_CLASS, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<IncomingClass>> GetIncomingClass(@RequestBody GetIncomingClassRequest request) throws Exception {
        return responseResult(offlineClassService.GetIncomingClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_CLASS_SCHEDULE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<ClassSchedule>> GetClassSchedule(@RequestBody GetClassScheduleRequest request) throws Exception {
        return responseResult(offlineClassService.GetClassSchedule(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_STUDENT_BY_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<StudentInfoByClass>> GetStudentByClass(@RequestBody int classId) throws Exception {
        return responseResult(offlineClassService.GetStudentByClass(classId));
    }
    
    @RequestMapping(value = UrlEntity.A_UPDATE_STUDENT_ATTENDANCE, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> UpdateStudentAttendance(@RequestBody UpdateStudentAttendanceRequest request) throws Exception {
        return responseResult(offlineClassService.UpdateStudentAttendance(request));
    }
    
    @RequestMapping(value = UrlEntity.A_UPDATE_CLASS_ATTENDANCE_CHECK, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> UpdateClassAttendanceCheck(@RequestBody UpdateClassAttendanceCheckRequest request) throws Exception {
        return responseResult(offlineClassService.UpdateClassAttendanceCheck(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_CLASS_INFO_BY_ID, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<ClassInfoById> GetClassInfoById(@RequestBody int classId) throws Exception {
        return responseResult(offlineClassService.GetClassInfoById(classId));
    }
    
    @RequestMapping(value = UrlEntity.A_CHANGE_CLASS_TRAINER, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> ChangeClassTrainer(@RequestBody ChangeClassTrainerRequest request) throws Exception {
        return responseResult(offlineClassService.ChangeClassTrainer(request));
    }
    
    @RequestMapping(value = UrlEntity.A_CHANGE_CLASS_TIME, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> ChangeClassTime(@RequestBody ChangeClassTimeRequest request) throws Exception {
        return responseResult(offlineClassService.ChangeClassTime(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_INCOMING_FIRST_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<IncomingFirstClass>> GetIncomingFirstClass(@RequestBody GetIncomingFirstClassRequest request) throws Exception {
        return responseResult(offlineClassService.GetIncomingFirstClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_QUIZ_REPORT, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<OfflineClassQuizReport>> GetQuizReport(@RequestBody Integer classId) throws Exception {
        return responseResult(offlineClassService.GetQuizReport(classId));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_QUIZ_REPORT_DETAIL, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<OfflineClassQuizReportDetail> GetQuizReportDetail(@RequestBody GetQuizReportDetailRequest request) throws Exception {
        return responseResult(offlineClassService.GetQuizReportDetail(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_OFFLINE_CLASS_FOR_RETAKE, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<OfflineClassForRetake>> GetOfflineClassForRetake(@RequestBody Integer unitId) throws Exception {
        return responseResult(offlineClassService.GetOfflineClassForRetake(unitId));
    }
    
    @RequestMapping(value = UrlEntity.A_ADD_NEW_GROUP_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> AddNewGroupClass(@RequestBody AddNewGroupClassRequest request) throws Exception {
        return responseResult(offlineClassService.AddNewGroupClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_ALL_GROUP_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<GroupClassItem>> GetAllGroupClass(@RequestBody GetAllGroupClassRequest request) throws Exception {
        return responseResult(offlineClassService.GetAllGroupClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_EXTEND_GROUP_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<CUDReturnMessage> extendGroupClass(@RequestBody ExtendGroupClassRequest request) throws Exception {
        return responseResult(offlineClassService.extendGroupClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_INCOMING_INTRO_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<IncomingIntroClass>> getIncomingIntroClass(@RequestBody GetIncomingIntroClassRequest request) throws Exception {
        return responseResult(offlineClassService.getIncomingIntroClass(request));
    }
    
    @RequestMapping(value = UrlEntity.A_GET_INCOMING_NORMAL_CLASS, method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<IncomingNormalClass>> getIncomingNormalClass(@RequestBody GetIncomingNormalClassRequest request) throws Exception {
        return responseResult(offlineClassService.getIncomingNormalClass(request));
    }
}
