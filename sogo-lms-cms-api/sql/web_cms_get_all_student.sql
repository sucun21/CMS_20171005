delimiter //

DROP PROCEDURE IF EXISTS web_cms_get_all_student;
//

CREATE PROCEDURE `web_cms_get_all_student`(
	IN p_search_key VARCHAR(250),
    IN p_center_id INT,
    IN p_course_id INT,
	IN p_student_status BIT,
    IN p_page_number INT,
    IN p_page_size INT
)
BEGIN
	
    DECLARE v_offset_row INT;
    DECLARE v_total_row INT;

    set v_offset_row = (p_page_number - 1) * p_page_size;
    
    CREATE TEMPORARY TABLE IF NOT EXISTS getAllStudentTbl AS 
    (SELECT SQL_CALC_FOUND_ROWS su.user_id `userId`,
		   su.user_type_id `userTypeId`,
           su.account_id `accountId`,
           su.user_email `userEmail`,
           su.user_phone `userPhone`,
           su.full_name `fullName`,
           su.avatar_url `avatarUrl`,
           su.is_active `isActive`,
           su.gender,
           TIMESTAMP(su.date_of_birth) `dateOfBirth`,
		   su.created_date `createdDate`,
           su1.full_name `createdByName`
    FROM sg_user su
    left join sg_user su1 on su1.user_id = su.created_by and su1.user_type_id <> 4
    /*JOIN sg_course_trainee sct on sct.trainee_id = su.user_id*/
    WHERE su.user_type_id = 4
          AND su.is_delete = 0
          AND (p_search_key != '' or p_student_status IS NULL OR su.is_active = p_student_status)
          AND (p_search_key != '' or p_course_id IS NULL OR EXISTS (SELECT 1 FROM sg_course_trainee sct WHERE sct.course_id = p_course_id AND sct.trainee_id = su.user_id))
          AND (p_search_key != '' or p_center_id IS NULL OR EXISTS (SELECT 1 FROM sg_course_trainee sct WHERE sct.study_center = p_center_id AND sct.trainee_id = su.user_id))
          AND (p_search_key is null or 
			   p_search_key = '' or 
               su.user_email = p_search_key or
               su.user_phone = p_search_key or
               UPPER(su.full_name_ascii) LIKE CONCAT('%', p_search_key, '%') OR
               CAST(su.user_id AS CHAR) = p_search_key));
    
    SELECT *,
		   cast_to_int(FOUND_ROWS()) `totalRow`
    FROM getAllStudentTbl
    ORDER BY createdDate desc
    LIMIT v_offset_row, p_page_size;
END
//

delimiter ;