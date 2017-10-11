delimiter //

DROP PROCEDURE IF EXISTS web_cms_execute_course;
//

CREATE PROCEDURE `web_cms_execute_course`(
	IN p_course_id INT,
	IN p_course_title VARCHAR(500),
    IN p_course_des LONGBLOB,
    IN p_course_short_des VARCHAR(2000),
    IN p_execute_type VARCHAR(1)
    
)
BEGIN
    
	DECLARE errorText TEXT;
    
    /**Delare handler sql_exception*/
    DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
	  GET DIAGNOSTICS CONDITION 1 errorText = MESSAGE_TEXT;
		  SELECT -1 `id`,
				errorText `message`;
	  ROLLBACK;
	END;
     
	 IF p_execute_type='I' THEN
		INSERT INTO sg_course(course_id,course_title,course_des,course_short_des,is_active,is_delete)
		VALUES (p_course_id,p_course_title,p_course_des,p_course_short_des,1,0);
    ELSEIF p_execute_type='U' THEN
		UPDATE sg_course
		SET course_title=p_course_title,course_des=p_course_des,course_short_des=p_course_short_des
		WHERE course_id=p_course_id;
    ELSE 
		DELETE FROM sg_course
		WHERE course_id=p_course_id;
	END IF;
	 SELECT 1 `id`,
			   'Course executed' `message`;
END
//

delimiter ;