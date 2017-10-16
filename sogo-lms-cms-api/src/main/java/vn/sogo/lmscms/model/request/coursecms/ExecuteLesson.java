package vn.sogo.lmscms.model.request.coursecms;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ExecuteLesson implements Serializable {
	private Integer unitId;
	private Integer lessonId;
    private String lessonTitle;
    private String lessonDes;
	public Integer getUnitId() {
		return unitId;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}
	public Integer getLessonId() {
		return lessonId;
	}
	public void setLessonId(Integer lessonId) {
		this.lessonId = lessonId;
	}
	public String getLessonTitle() {
		return lessonTitle;
	}
	public void setLessonTitle(String lessonTitle) {
		this.lessonTitle = lessonTitle;
	}
	public String getLessonDes() {
		return lessonDes;
	}
	public void setLessonDes(String lessonDes) {
		this.lessonDes = lessonDes;
	}
    
}
