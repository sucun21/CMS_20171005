package vn.sogo.lmscms.model.request.coursecms;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ExecuteCanDo implements Serializable {
	private Integer unitId;
	private Integer lessonId;
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
}
