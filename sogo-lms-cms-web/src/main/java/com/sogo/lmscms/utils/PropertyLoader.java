package com.sogo.lmscms.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertyLoader {
	private static Properties prop = null;

	public Properties loadAllProperties() {
		prop = new Properties();
		InputStream input = null;

		try {

			String filename = "config-" + CommonUtils.runningEnvironment + ".properties";
			input = getClass().getClassLoader().getResourceAsStream(filename);

			prop.load(input);

		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
		return prop;
	}
	
	public static String getPropertyByKey(String keyName)
	{
		if(prop == null){
			prop = new PropertyLoader().loadAllProperties();
		}
		
		return prop.getProperty(keyName);
	}
}
