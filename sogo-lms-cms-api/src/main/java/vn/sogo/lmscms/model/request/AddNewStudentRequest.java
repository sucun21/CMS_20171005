package vn.sogo.lmscms.model.request;

import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class AddNewStudentRequest implements Serializable {
	private String firstName;
	private String lastName;
	private String userEmail;
	private String userPhone;
	private String password;
	private Timestamp dateOfBirth;
	private Integer gender;
	private Integer centerId;
    private Integer courseId;
    private String contractNo;
    private Integer introClassId;
    private Integer normalClassId;
    private Timestamp startDate;
    private Timestamp endDate;
    private String avatarUrl;
    private Integer createdBy;
    
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Timestamp getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Timestamp dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public Integer getGender() {
		return gender;
	}
	public void setGender(Integer gender) {
		this.gender = gender;
	}
	public Integer getCenterId() {
		return centerId;
	}
	public void setCenterId(Integer centerId) {
		this.centerId = centerId;
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public String getContractNo() {
		return contractNo;
	}
	public void setContractNo(String contractNo) {
		this.contractNo = contractNo;
	}
	public Integer getIntroClassId() {
		return introClassId;
	}
	public void setIntroClassId(Integer introClassId) {
		this.introClassId = introClassId;
	}
	public Integer getNormalClassId() {
		return normalClassId;
	}
	public void setNormalClassId(Integer normalClassId) {
		this.normalClassId = normalClassId;
	}
	public Timestamp getStartDate() {
		return startDate;
	}
	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	public Timestamp getEndDate() {
		return endDate;
	}
	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}
	public String getAvatarUrl() {
		return avatarUrl;
	}
	public void setAvatarUrl(String avatarUrl) {
		this.avatarUrl = avatarUrl;
	}
	public Integer getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}
	
}
