package com.sogo.lmscms.utils;

public class CommonUtils {
	public static final String runningEnvironment = System.getProperty("env");
	public static final String SESSION_COOKIE_NAME = PropertyLoader.getPropertyByKey("SESSION_COOKIE_NAME");
	public static final Integer SESSION_COOKIE_EXPIRE_SECOND = Integer.parseInt(PropertyLoader.getPropertyByKey("SESSION_COOKIE_EXPIRE_SECOND"));
	public static final String SESSION_COOKIE_DOMAIN = PropertyLoader.getPropertyByKey("SESSION_COOKIE_DOMAIN");
	public static final long version = System.currentTimeMillis() / 1000L;
	public static final String imageDomain = PropertyLoader.getPropertyByKey("IMAGE_DOMAIN");
	public static final Integer PAGE_SIZE = 10;
	public static final String restServer = PropertyLoader.getPropertyByKey("REST_SERVER");
	public String getRunningEnvironment() {
		return runningEnvironment;
	}
	
	public long getVersion() {
		return version;
	}
	
	public String getImageDomain(){
		return imageDomain;
	}
	
	public String getRestServer(){
		return restServer;
	}
}
