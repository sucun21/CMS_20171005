delimiter //

DROP PROCEDURE IF EXISTS web_cms_get_course_by_user_type;
//

CREATE PROCEDURE `web_cms_get_course_by_user_type`(
	 p_user_id INT
    ,p_user_type_id INT)
BEGIN
	DECLARE p_user_type_admin INT;
    DECLARE p_user_type_trainer INT;
    SET p_user_type_admin=(SELECT user_type_id FROM sg_user_type WHERE user_type_name='Admin');
    SET p_user_type_trainer=(SELECT user_type_id FROM sg_user_type WHERE user_type_name='Trainer');
	IF p_user_type_id=p_user_type_admin THEN
	SELECT course_id `courseId`,
		   course_title `courseTitle`,
           convert(course_des, char) `courseDes`,
           course_short_des `courseShortDes`,
           course_image `courseImage`
    FROM sg_course
    WHERE is_active > 0
          AND is_delete = 0
	ORDER BY created_date;
    ELSEIF p_user_type_id=p_user_type_trainer THEN
		SELECT sgc.course_id `courseId`,
		   sgc.course_title `courseTitle`,
           convert(sgc.course_des, char) `courseDes`,
           sgc.course_short_des `courseShortDes`,
           sgc.course_image `courseImage`
    FROM sg_course sgc
    JOIN sg_course_trainer sgct ON sgc.course_id=sgct.course_id
    AND sgct.trainer_id=p_user_id
    WHERE sgc.is_active > 0
          AND sgc.is_delete = 0
          AND sgct.is_active=1
          AND sgct.is_delete=0
	ORDER BY sgc.created_date;
    END IF;
END
//

delimiter ;