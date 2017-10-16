package vn.sogo.lmscms.dao.impldao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.IOfflineClassDao;
import vn.sogo.lmscms.helpers.MySqlHelper;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.offlineclass.*;
import vn.sogo.lmscms.model.request.*;

public class OfflineClassDaoImpl implements IOfflineClassDao {
	@Autowired
	MySqlHelper mySqlHelper;
	
	@Override
    public List<PendingCheckAttendanceClass> getPendingCheckAttendanceClass(GetPendingCheckAttendanceClassRequest request) throws Exception {
    	
		List<PendingCheckAttendanceClass> result = null;
    	
    	Object[] params = new Object[]{
    			request.getIsAdmin(),
				request.getCourseId(),
				request.getCenterId(),
				request.getTrainerId()
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_pending_check_attendance_class", params, PendingCheckAttendanceClass.class);

        return result;
    }
	
	@Override
    public List<IncomingClass> getIncomingClass(GetIncomingClassRequest request) throws Exception {
    	
		List<IncomingClass> result = null;
    	
    	Object[] params = new Object[]{
    			request.getIsAdmin(),
				request.getCourseId(),
				request.getCenterId(),
				request.getTrainerId(),
				request.getNextDayNum()
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_incoming_class", params, IncomingClass.class);

        return result;
    }
	
	@Override
    public List<ClassSchedule> getClassSchedule(GetClassScheduleRequest request) throws Exception {
    	
		List<ClassSchedule> result = null;
    	
    	Object[] params = new Object[]{
    			request.getIsAdmin(),
				request.getCourseId(),
				request.getCenterId(),
				request.getTrainerId(),
				request.getStartDate(),
				request.getEndDate()
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_class_schedule", params, ClassSchedule.class);

        return result;
    }
	
	@Override
    public List<StudentInfoByClass> getStudentByClass(Integer classId) throws Exception {
    	
		List<StudentInfoByClass> result = null;
    	
    	Object[] params = new Object[]{
    			classId
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_student_by_class", params, StudentInfoByClass.class);

        return result;
    }

	public ClassInfoById getClassInfoById(int classId) throws Exception {
		// TODO Auto-generated method stub
		ClassInfoById result = null;
    	
    	Object[] params = new Object[]{
    			classId
    	};
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_class_info_by_id", params, ClassInfoById.class);

        return result;
	}
	
	@Override
    public CUDReturnMessage updateStudentAttendance(UpdateStudentAttendanceRequest request) throws Exception {
    	
		CUDReturnMessage result = null;
    	
    	Object[] params = new Object[]{
    			request.getClassId(),
    			request.getTrainerId(),
    			request.getStudentId(),
    			request.getStatus()
    	};
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_update_student_attendance", params, CUDReturnMessage.class);

        return result;
    }
	
	@Override
    public CUDReturnMessage updateClassAttendanceCheck(UpdateClassAttendanceCheckRequest request) throws Exception {
    	
		CUDReturnMessage result = null;
    	
    	Object[] params = new Object[]{
    			request.getClassId(),
    			request.getTrainerId(),
    	};
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_update_class_attendance_check", params, CUDReturnMessage.class);

        return result;
    }
	
	@Override
    public CUDReturnMessage ChangeClassTrainer(ChangeClassTrainerRequest request) throws Exception {
    	
		CUDReturnMessage result = null;
    	
    	Object[] params = new Object[]{
    			request.getIsAdmin(),
    			request.getClassId(),
    			request.getTrainerId(),
    			request.getNewTrainerId()
    	};
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_change_class_trainer", params, CUDReturnMessage.class);

        return result;
    }
	
	@Override
    public CUDReturnMessage ChangeClassTime(ChangeClassTimeRequest request) throws Exception {
    	
		CUDReturnMessage result = null;
    	
    	Object[] params = new Object[]{
    			request.getIsAdmin(),
    			request.getClassId(),
    			request.getTrainerId(),
    			request.getNewClassTime()
    	};
		result = mySqlHelper.ExecuteStoreProcSingleResult("web_cms_change_class_time", params, CUDReturnMessage.class);

        return result;
    }
	
	@Override
    public List<IncomingFirstClass> GetIncomingFirstClass(GetIncomingFirstClassRequest request) throws Exception {
    	
		List<IncomingFirstClass> result = null;
    	
		Object[] params = new Object[]{
    			request.getCenterId(),
    			request.getCourseId(),
    	};
		result = mySqlHelper.ExecuteStoreProc("web_cms_get_incoming_first_class", params, IncomingFirstClass.class);

        return result;
    }
	
	@Override
	public List<OfflineClassQuizReport> GetQuizReport(Integer classId) throws Exception {
		
		Object[] params = new Object[]{
				classId
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_get_quiz_report", params, OfflineClassQuizReport.class);
	}
	
	@Override
	public OfflineClassQuizReportSummary GetQuizReportSummary(GetQuizReportDetailRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getClassId(),
				request.getActivityId()
    	};

        return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_get_quiz_report_summary", params, OfflineClassQuizReportSummary.class);
	}
	
	@Override
	public List<OfflineClassQuizReportStudent> GetQuizReportStudent(GetQuizReportDetailRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getClassId(),
				request.getActivityId()
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_get_quiz_report_student_list", params, OfflineClassQuizReportStudent.class);
	}
	
	@Override
	public List<OfflineClassQuizReportStudentDetail> GetQuizReportStudentDetail(GetQuizReportDetailRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getClassId(),
				request.getActivityId()
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_get_quiz_report_student_detail", params, OfflineClassQuizReportStudentDetail.class);
	}
	
	@Override
	public List<OfflineClassQuizReportQuestion> GetQuizReportQuestion(Integer activityId) throws Exception {
		Object[] params = new Object[]{
				activityId
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_get_quiz_report_question_list", params, OfflineClassQuizReportQuestion.class);
	}
	
	@Override
	public List<OfflineClassForRetake> GetOfflineClassForRetake(Integer unitId) throws Exception {
		Object[] params = new Object[]{
				unitId
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_offline_class_get_class_for_retake", params, OfflineClassForRetake.class);
	}
	
	@Override
	public CUDReturnMessage AddNewGroupClass(AddNewGroupClassRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getGroupClassName(),
				request.getCourseId(),
				request.getCenterId(),
				request.getTrainerId(),
				request.getUnitStartId(),
				request.getStartDayInWeek(),
				request.getStartTime(),
				request.getStartDate(),
				request.getLimitUser(),
				request.getFacilitatorId(),
				request.getCreatedBy(),
				request.getClassTypeId()
    	};

        return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_offline_class_add_new_group_class", params, CUDReturnMessage.class);
	}
	
	@Override
	public List<GroupClassItem> GetAllGroupClass(GetAllGroupClassRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getSearchKey(),
				request.getTrainerId(),
				request.getCourseId(),
				request.getCenterId(),
				request.getPageNumber(),
				request.getPageSize(),
				request.getClassTypeId(),
				request.getStatusId()
    	};

        return mySqlHelper.ExecuteStoreProc("web_cms_offline_class_get_all_group", params, GroupClassItem.class);
	}
	
	@Override
	public List<GroupClassSchedule> getGroupClassSchedule(Integer groupClassId, Integer weekView) throws Exception {
		Object[] params = new Object[]{
			groupClassId,
			weekView
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_offline_class_get_group_schedule", params, GroupClassSchedule.class);
	}
	
	@Override
	public CUDReturnMessage extendGroupClass(ExtendGroupClassRequest request) throws Exception {
		Object[] params = new Object[]{
			request.getGroupClassId(),
			request.getModifiedBy()
    	};
		return mySqlHelper.ExecuteStoreProcSingleResult("web_cms_offline_class_get_extend_group", params, CUDReturnMessage.class);
	}
	
	@Override
	public List<IncomingIntroClass> getIncomingIntroClass(GetIncomingIntroClassRequest request) throws Exception {
		Object[] params = new Object[]{
			request.getCenterId(),
			request.getCourseId()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_get_incoming_intro_class", params, IncomingIntroClass.class);
	}
	
	@Override
	public List<IncomingNormalClass> getIncomingNormalClass(GetIncomingNormalClassRequest request) throws Exception {
		Object[] params = new Object[]{
				request.getCenterId(),
				request.getCourseId(),
				request.getIntroClassTime()
    	};
		return mySqlHelper.ExecuteStoreProc("web_cms_get_incoming_normal_class", params, IncomingNormalClass.class);
	}
	
	
}
