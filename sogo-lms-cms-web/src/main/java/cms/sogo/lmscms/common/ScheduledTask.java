package cms.sogo.lmscms.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

import com.sogo.lmscms.model.response.ApiResponse;
import com.sogo.lmscms.settings.UrlEntity;
import com.sogo.lmscms.utils.RestHelper;

public class ScheduledTask {
	
	@Autowired
	RestHelper restHelper;
	
	@Scheduled(fixedDelay = 60000)
    public void pingApi() {
		ApiResponse<String> result = restHelper.postForObject(UrlEntity.A_PING, null, String.class);
    }
}
