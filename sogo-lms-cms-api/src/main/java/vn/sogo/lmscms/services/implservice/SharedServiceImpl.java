package vn.sogo.lmscms.services.implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.ISharedDao;
import vn.sogo.lmscms.model.request.GetUnitByCourseAndClassTypeRequest;
import vn.sogo.lmscms.model.shared.*;
import vn.sogo.lmscms.services.interfaceservice.ISharedService;

public class SharedServiceImpl extends BaseService implements ISharedService {

    /*----------------------------------- Variable $CourseService ---------------------------------------------*/

//    private static final String DEFAULT_E_URL = "FE_COURSE_API";

    @Autowired
    ISharedDao sharedDao;

    /*----------------------------------- Method $CourseService ---------------------------------------------*/

    @Override
    public List<ClassTypeInfo> getAllClassType() throws Exception {    	
    	return sharedDao.getAllClassType();
    }
    
    @Override
    public List<UnitByCourseAndClassType> getUnitByCourseAndClassType(GetUnitByCourseAndClassTypeRequest request) throws Exception{
    	return sharedDao.getUnitByCourseAndClassType(request);
    }
}
