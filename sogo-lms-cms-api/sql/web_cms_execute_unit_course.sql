delimiter //

DROP PROCEDURE IF EXISTS web_cms_execute_unit_course;
//

CREATE PROCEDURE `web_cms_execute_unit_course`(
	IN p_course_id INT,
	IN p_unit_id INT,
	IN p_unit_title VARCHAR(250),
    IN p_execute_type VARCHAR(1),
    IN p_unit_des BLOB,
    IN p_unit_summary LONGBLOB
    
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
		IF EXISTS (SELECT 1 FROM sg_unit WHERE course_id = p_course_id AND unit_title = p_unit_title) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unit course does exist';
		END IF;
		INSERT INTO sg_unit(course_id,unit_title,is_active,is_delete)
		VALUES (p_course_id,p_unit_title,1,0);
    ELSEIF p_execute_type='U' THEN
		UPDATE sg_unit
		SET unit_des=p_unit_des,unit_summary=p_unit_summary
		WHERE course_id=p_course_id
		AND unit_id=p_unit_id
		AND unit_title=p_unit_title;
    ELSE 
		DELETE FROM sg_unit
		WHERE course_id=p_course_id
		AND unit_id=p_unit_id
		AND unit_title=p_unit_title;
	END IF;
	 SELECT 1 `id`,
			   'Unit course inserted' `message`;
END//

delimiter ;