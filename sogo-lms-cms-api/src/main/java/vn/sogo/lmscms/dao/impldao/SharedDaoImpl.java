package vn.sogo.lmscms.dao.impldao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.sogo.lmscms.dao.interfacedao.ISharedDao;
import vn.sogo.lmscms.helpers.MySqlHelper;
import vn.sogo.lmscms.model.request.GetUnitByCourseAndClassTypeRequest;
import vn.sogo.lmscms.model.shared.*;

public class SharedDaoImpl implements ISharedDao {
	@Autowired
	MySqlHelper mySqlHelper;
	
	@Override
    public List<ClassTypeInfo> getAllClassType() throws Exception{
        return mySqlHelper.ExecuteStoreProc("web_cms_md_get_all_class_type", ClassTypeInfo.class);
    }
	
	@Override
    public List<UnitByCourseAndClassType> getUnitByCourseAndClassType(GetUnitByCourseAndClassTypeRequest request) throws Exception{
		
		Object[] params = new Object[]{
				request.getCourseId(),
				request.getClassTypeId()
    	};
		
        return mySqlHelper.ExecuteStoreProc("web_cms_md_get_unit_by_course_and_class_type", params, UnitByCourseAndClassType.class);
    }
	
	
}
