package com.sogo.lmscms.model.response;

import java.io.Serializable;

@SuppressWarnings("serial")
public class CUDReturnMessage implements Serializable {
	private Integer id;
	private String message;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public CUDReturnMessage(){
		this.id = -1;
		this.message = "Thao tác thất bại";
	}
	
}
