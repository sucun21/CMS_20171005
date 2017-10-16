package vn.sogo.lmscms.dao.interfacedao;

import java.util.List;

import vn.sogo.lmscms.model.request.GetUnitByCourseAndClassTypeRequest;
import vn.sogo.lmscms.model.shared.*;

public interface ISharedDao {

	List<ClassTypeInfo> getAllClassType() throws Exception;

	List<UnitByCourseAndClassType> getUnitByCourseAndClassType(GetUnitByCourseAndClassTypeRequest request) throws Exception;
	
}
