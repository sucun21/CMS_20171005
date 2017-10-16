package vn.sogo.lmscms.model.request.coursecms;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ExecuteUnitCourse implements Serializable {
	private Integer courseId;
	private Integer unitId;
	public Integer getUnitId() {
		return unitId;
	}
	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}
	private String unitTitle;
	private String unitDes;
	private String unitSummary;
	private String executeType;
	public Integer getCourseId() {
		return courseId;
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
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public String getUnitTitle() {
		return unitTitle;
	}
	public void setUnitTitle(String unitTitle) {
		this.unitTitle = unitTitle;
	}
	public String getExecuteType() {
		return executeType;
	}
	public void setExecuteType(String executeType) {
		this.executeType = executeType;
	}
	

    
	
}
