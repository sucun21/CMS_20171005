package vn.sogo.lmscms.model.response.coursecms;

import java.util.List;

public class UnitInfo {
	private Integer unitId;
    private String unitTitle;
    private String unitDes;
    private String unitSummary;
    private List<CanDoInfo> canDos;
    private List<LessonInUnit> lessons;
	public Integer getUnitId() {
		return unitId;
	}
	public List<CanDoInfo> getCandos() {
		return canDos;
	}
	public void setCando(List<CanDoInfo> canDos) {
		this.canDos = canDos;
	}
	public List<LessonInUnit> getLesson() {
		return lessons;
	}
	public void setLesson(List<LessonInUnit> lessons) {
		this.lessons = lessons;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}

	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public String getUnitDes() {
		return unitDes;
	}
	public void setUnitDes(String unitDes) {
		this.unitDes = unitDes;
	}
	public String getUnitSummary() {
		return unitSummary;
	}
	public void setUnitSummary(String unitSummary) {
		this.unitSummary = unitSummary;
	}
}
