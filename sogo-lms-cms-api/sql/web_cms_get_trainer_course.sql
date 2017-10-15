delimiter //
DROP procedure IF EXISTS `web_cms_get_trainer_course`;
//

CREATE PROCEDURE `web_cms_get_trainer_course`(
    IN p_course_id INT
)
BEGIN
    
	SELECT trainer_id `userId`,
				 su.full_name `fullName`
	FROM sg_course_trainer sct
	JOIN sg_user su on su.user_id = sct.trainer_id
	WHERE sct.is_active = 1
	AND sct.is_delete = 0
	AND course_id = p_course_id
	ORDER BY course_trainer_id ASC;

END
//

delimiter ;