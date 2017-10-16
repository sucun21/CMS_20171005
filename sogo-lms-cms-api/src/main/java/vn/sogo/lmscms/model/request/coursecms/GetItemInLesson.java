package vn.sogo.lmscms.model.request.coursecms;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
public class GetItemInLesson implements Serializable {

	private Integer lessonId;

	public Integer getLessonId() {
		return lessonId;
	}

	public void setLessonId(Integer lessonId) {
		this.lessonId = lessonId;
	}

		
   
}
