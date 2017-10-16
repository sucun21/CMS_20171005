package com.sogo.lmscms.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import javax.xml.bind.DatatypeConverter;


public class ImageHelper {
	
	private String avatarSaveLocation = "";
	
	public void setAvatarSaveLocation(String avatarSaveLocation) {
		this.avatarSaveLocation = avatarSaveLocation;
	}
	
	public void saveStudentAvatar(String fileName, String base64Str){
		try{
		String base64Image = base64Str.split(",")[1];
		byte[] imageBytes = DatatypeConverter.parseBase64Binary(base64Image);
//		BufferedImage bufferedImage = ImageIO.read(new ByteArrayInputStream(imageBytes));
//		
//		File imageFile = new File(fileName);
		OutputStream out = new FileOutputStream(new File(avatarSaveLocation + fileName));
		out.write(imageBytes);
		out.close();
//		ImageIO.write(bufferedImage, "png", imageFile);
		}
		catch(Exception ex){
			ex.printStackTrace();
		}
	}
	
}
