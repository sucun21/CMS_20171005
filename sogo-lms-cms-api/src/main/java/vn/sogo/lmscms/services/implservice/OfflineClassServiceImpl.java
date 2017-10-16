package vn.sogo.lmscms.services.implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.impldao.OfflineClassDaoImpl;
import vn.sogo.lmscms.model.*;
import vn.sogo.lmscms.model.offlineclass.GroupClassItem;
import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.services.interfaceservice.IOfflineClassService;


public class OfflineClassServiceImpl extends BaseService implements IOfflineClassService {
	@Autowired
    OfflineClassDaoImpl offlineClassDao;
	
	@Override
    public List<PendingCheckAttendanceClass> GetPendingCheckAttendanceClass(GetPendingCheckAttendanceClassRequest request) throws Exception {    	
    	return offlineClassDao.getPendingCheckAttendanceClass(request);
    }
	
	@Override
    public List<IncomingClass> GetIncomingClass(GetIncomingClassRequest request) throws Exception {
    	return offlineClassDao.getIncomingClass(request);
    }
	
	@Override
    public List<ClassSchedule> GetClassSchedule(GetClassScheduleRequest request) throws Exception {    	
    	return offlineClassDao.getClassSchedule(request);
    }
	
	@Override
    public List<StudentInfoByClass> GetStudentByClass(Integer classId) throws Exception {
        return offlineClassDao.getStudentByClass(classId);
    }
	
	@Override
    public CUDReturnMessage UpdateStudentAttendance(UpdateStudentAttendanceRequest request) throws Exception {
        return offlineClassDao.updateStudentAttendance(request);
    }
	
	@Override
    public CUDReturnMessage UpdateClassAttendanceCheck(UpdateClassAttendanceCheckRequest request) throws Exception {
    	
		CUDReturnMessage result = null;
		
		result = offlineClassDao.updateClassAttendanceCheck(request);

		if(result != null && result.getId() == 1){
			//xóa cache timeline student có tham gia học
			List<StudentInfoByClass> listStudent = offlineClassDao.getStudentByClass(request.getClassId());
			for(StudentInfoByClass student: listStudent){
				if(student.getIsAttended())
				{
					deleteCache(String.format(redisKeyPatternStudentTimline, student.getUserId(), student.getCourseId()));
				}
			}
		}

        return result;
    }
	@Override
	public ClassInfoById GetClassInfoById(int classId) throws Exception {
		return offlineClassDao.getClassInfoById(classId);
	}
	
	@Override
    public CUDReturnMessage ChangeClassTrainer(ChangeClassTrainerRequest request) throws Exception {
        return offlineClassDao.ChangeClassTrainer(request);
    }
	
	@Override
    public CUDReturnMessage ChangeClassTime(ChangeClassTimeRequest request) throws Exception {
        return offlineClassDao.ChangeClassTime(request);
    }
	
	@Override
    public List<IncomingFirstClass> GetIncomingFirstClass(GetIncomingFirstClassRequest request) throws Exception {
        return offlineClassDao.GetIncomingFirstClass(request);
    }
	
	@Override
	public List<OfflineClassQuizReport> GetQuizReport(Integer classId) throws Exception {
		return offlineClassDao.GetQuizReport(classId);
	}
	
	@Override
	public OfflineClassQuizReportDetail GetQuizReportDetail(GetQuizReportDetailRequest request) throws Exception {
		OfflineClassQuizReportDetail result = new OfflineClassQuizReportDetail();
		
		result.setReportSummary(offlineClassDao.GetQuizReportSummary(request));
		result.setListStudent(offlineClassDao.GetQuizReportStudent(request));
		result.setListStudentDetail(offlineClassDao.GetQuizReportStudentDetail(request));
		result.setListQuestion(offlineClassDao.GetQuizReportQuestion(request.getActivityId()));
		
		return result;
	}
	
	@Override
	public List<OfflineClassForRetake> GetOfflineClassForRetake(Integer unitId) throws Exception {
		return offlineClassDao.GetOfflineClassForRetake(unitId);
	}
	
    @Override
	public CUDReturnMessage AddNewGroupClass(AddNewGroupClassRequest request) throws Exception {
    	return offlineClassDao.AddNewGroupClass(request);
    }
    
    @Override
	public List<GroupClassItem> GetAllGroupClass(GetAllGroupClassRequest request) throws Exception {
    	
    	List<GroupClassItem> listGroupClass = offlineClassDao.GetAllGroupClass(request);
    	
    	for(GroupClassItem groupClass: listGroupClass){
    		groupClass.setListSchedule(offlineClassDao.getGroupClassSchedule(groupClass.getGroupClassId(), request.getWeekView()));
    	}
    	return listGroupClass;
    }
    
    @Override
	public CUDReturnMessage extendGroupClass(ExtendGroupClassRequest request) throws Exception {
    	return offlineClassDao.extendGroupClass(request);
    }
    
    @Override
	public List<IncomingIntroClass> getIncomingIntroClass(GetIncomingIntroClassRequest request) throws Exception {
		return offlineClassDao.getIncomingIntroClass(request);
	}
	
	@Override
	public List<IncomingNormalClass> getIncomingNormalClass(GetIncomingNormalClassRequest request) throws Exception {
		return offlineClassDao.getIncomingNormalClass(request);
	}
}
