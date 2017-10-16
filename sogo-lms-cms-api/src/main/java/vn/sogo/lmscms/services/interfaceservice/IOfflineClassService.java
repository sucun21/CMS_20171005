package vn.sogo.lmscms.services.interfaceservice;

import java.util.List;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.offlineclass.GroupClassItem;
import vn.sogo.lmscms.model.request.*;

public interface IOfflineClassService {

	List<PendingCheckAttendanceClass> GetPendingCheckAttendanceClass(GetPendingCheckAttendanceClassRequest request) throws Exception;

	List<IncomingClass> GetIncomingClass(GetIncomingClassRequest request) throws Exception;

	List<ClassSchedule> GetClassSchedule(GetClassScheduleRequest request) throws Exception;

	List<StudentInfoByClass> GetStudentByClass(Integer classId) throws Exception;

	CUDReturnMessage UpdateStudentAttendance(UpdateStudentAttendanceRequest request) throws Exception;

	CUDReturnMessage UpdateClassAttendanceCheck(UpdateClassAttendanceCheckRequest request) throws Exception;
	ClassInfoById GetClassInfoById(int classId) throws Exception;

	CUDReturnMessage ChangeClassTrainer(ChangeClassTrainerRequest request) throws Exception;

	CUDReturnMessage ChangeClassTime(ChangeClassTimeRequest request) throws Exception;

	List<IncomingFirstClass> GetIncomingFirstClass(GetIncomingFirstClassRequest request) throws Exception;

	List<OfflineClassQuizReport> GetQuizReport(Integer classId) throws Exception;

	OfflineClassQuizReportDetail GetQuizReportDetail(GetQuizReportDetailRequest request) throws Exception;

	List<OfflineClassForRetake> GetOfflineClassForRetake(Integer unitId) throws Exception;

	CUDReturnMessage AddNewGroupClass(AddNewGroupClassRequest request) throws Exception;

	List<GroupClassItem> GetAllGroupClass(GetAllGroupClassRequest request) throws Exception;

	CUDReturnMessage extendGroupClass(ExtendGroupClassRequest request) throws Exception;

	List<IncomingIntroClass> getIncomingIntroClass(GetIncomingIntroClassRequest request) throws Exception;

	List<IncomingNormalClass> getIncomingNormalClass(GetIncomingNormalClassRequest request) throws Exception;
	
}
