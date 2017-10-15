package vn.sogo.lmscms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import vn.sogo.lmscms.model.response.ApiResponse;
import vn.sogo.lmscms.settings.UrlEntity;


@RestController
@RequestMapping(UrlEntity.E_SHARED)
public class SharedApiController extends BaseController {
	@RequestMapping(value = UrlEntity.A_PING, method = RequestMethod.POST)
    public @ResponseBody ApiResponse<String> ping() throws Exception {
        return responseResult("pong");
    }
}
