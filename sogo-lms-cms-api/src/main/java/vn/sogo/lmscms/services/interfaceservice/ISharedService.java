package vn.sogo.lmscms.services.interfaceservice;

import java.util.List;

import vn.sogo.lmscms.model.request.GetUnitByCourseAndClassTypeRequest;
import vn.sogo.lmscms.model.shared.*;


public interface ISharedService {

	List<ClassTypeInfo> getAllClassType() throws Exception;

	List<UnitByCourseAndClassType> getUnitByCourseAndClassType(GetUnitByCourseAndClassTypeRequest request) throws Exception;

}
