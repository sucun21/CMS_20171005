package com.sogo.lmscms;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.sogo.lmscms.model.request.CourseObjRequest;
import com.sogo.lmscms.model.response.CourseObjRespone;
import com.sogo.lmscms.settings.UrlEntity;
import com.sogo.lmscms.settings.UrlSetting;

import junit.framework.TestCase;

public class CourseUnitTests extends TestCase {
    @Autowired
    RestTemplate restTemplate;

    @Test
    public void testGetCourseTest() throws Exception {
    	CourseObjRequest request = new CourseObjRequest();
        request.setCourseId(1);
        request.setTraineeId(1);
        CourseObjRespone response = restTemplate.postForObject(UrlSetting.REST_SERVER + UrlEntity.E_COURSE + UrlEntity.A_GET_COURSE_TEST, request, CourseObjRespone.class);
    }
}
