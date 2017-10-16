package vn.sogo.lmscms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import vn.sogo.lmscms.model.request.*;
import vn.sogo.lmscms.model.response.ApiResponse;
import vn.sogo.lmscms.model.shared.*;
import vn.sogo.lmscms.services.interfaceservice.ISharedService;
import vn.sogo.lmscms.settings.UrlEntity;

@RestController
@RequestMapping(UrlEntity.E_SHARED)
public class SharedApiController extends BaseController {
	
	@Autowired
    ISharedService sharedService;
	
	@RequestMapping(value = UrlEntity.A_PING, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<String> ping() throws Exception {
        return responseResult("pong");
    }
	
	@RequestMapping(value = UrlEntity.A_GET_ALL_CLASS_TYPE, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<List<ClassTypeInfo>> getAllClassType() throws Exception {
        return responseResult(sharedService.getAllClassType());
    }
	
	@RequestMapping(value = UrlEntity.A_GET_UNIT_BY_COURSE_AND_CLASS_TYPE, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ApiResponse<List<UnitByCourseAndClassType>> getUnitByCourseAndClassType(@RequestBody GetUnitByCourseAndClassTypeRequest request) throws Exception {
		
		List<UnitByCourseAndClassType> res = sharedService.getUnitByCourseAndClassType(request);
		
        return responseResult(res);
    }
}
