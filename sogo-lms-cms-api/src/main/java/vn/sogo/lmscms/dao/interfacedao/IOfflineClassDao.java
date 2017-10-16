package vn.sogo.lmscms.dao.interfacedao;

import java.util.List;

import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.offlineclass.*;
import vn.sogo.lmscms.model.request.*;

public interface IOfflineClassDao {

	List<PendingCheckAttendanceClass> getPendingCheckAttendanceClass(GetPendingCheckAttendanceClassRequest request) throws Exception;

	List<IncomingClass> getIncomingClass(GetIncomingClassRequest request) throws Exception;

	List<ClassSchedule> getClassSchedule(GetClassScheduleRequest request) throws Exception;

	List<StudentInfoByClass> getStudentByClass(Integer classId) throws Exception;

	CUDReturnMessage updateStudentAttendance(UpdateStudentAttendanceRequest request) throws Exception;

	CUDReturnMessage updateClassAttendanceCheck(UpdateClassAttendanceCheckRequest request) throws Exception;

	CUDReturnMessage ChangeClassTrainer(ChangeClassTrainerRequest request) throws Exception;

	CUDReturnMessage ChangeClassTime(ChangeClassTimeRequest request) throws Exception;
	
	ClassInfoById getClassInfoById(int classId) throws Exception;

	List<IncomingFirstClass> GetIncomingFirstClass(GetIncomingFirstClassRequest request) throws Exception;

	List<OfflineClassQuizReport> GetQuizReport(Integer classId) throws Exception;

	OfflineClassQuizReportSummary GetQuizReportSummary(GetQuizReportDetailRequest request) throws Exception;

	List<OfflineClassQuizReportStudent> GetQuizReportStudent(GetQuizReportDetailRequest request) throws Exception;

	List<OfflineClassQuizReportStudentDetail> GetQuizReportStudentDetail(GetQuizReportDetailRequest request) throws Exception;

	List<OfflineClassQuizReportQuestion> GetQuizReportQuestion(Integer activityId) throws Exception;

	List<OfflineClassForRetake> GetOfflineClassForRetake(Integer unitId) throws Exception;

	CUDReturnMessage AddNewGroupClass(AddNewGroupClassRequest request) throws Exception;

	List<GroupClassItem> GetAllGroupClass(GetAllGroupClassRequest request) throws Exception;

	List<GroupClassSchedule> getGroupClassSchedule(Integer groupClassId, Integer weekView) throws Exception;

	CUDReturnMessage extendGroupClass(ExtendGroupClassRequest request) throws Exception;

	List<IncomingIntroClass> getIncomingIntroClass(GetIncomingIntroClassRequest request) throws Exception;

	List<IncomingNormalClass> getIncomingNormalClass(GetIncomingNormalClassRequest request) throws Exception;

}
