package com.sogo.lmscms.model.view;

public class BaseViewModel {
	private Integer code;
	private String message;
	
	public BaseViewModel() {
		this.code = -1;
		this.message = "Server Error";
	}
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
