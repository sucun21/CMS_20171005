delimiter //

DROP PROCEDURE IF EXISTS web_cms_get_student_course;
//

CREATE PROCEDURE `web_cms_get_student_course`(
	IN p_search_key VARCHAR(250),
	IN p_student_id INT,
    IN p_center_id INT,
    IN p_course_id INT
)
BEGIN
    
	SELECT (SELECT course_title FROM sg_course sc WHERE sc.course_id = sct.course_id) `courseTitle`,
           (SELECT center_name FROM sg_center sgc WHERE sgc.center_id = sct.study_center) `centerName`,
           sct.contract_no `contractNo`,
           TIMESTAMP(sct.start_date) `startDate`,
           TIMESTAMP(sct.end_date) `endDate`,
           sct.is_active `isCourseActive`,
           sct.course_trainee_id `courseTraineeId`,
           sct.course_id `courseId`,
           cast_to_int(SUM(CASE WHEN soct.attended_date < NOW() AND soct.is_attended = 0 THEN 1 ELSE 0 END)) `missedClass`,
           cast_to_int(SUM(CASE WHEN soct.attended_date < NOW() AND soct.is_attended = 1 THEN 1 ELSE 0 END)) `attendedClass`,
           cast_to_int(SUM(CASE WHEN soct.is_retake = 1 THEN 1 ELSE 0 END)) `retakeClass`,
           cast_to_int(COUNT(1)) `totalClass`,
           cast_to_int((SELECT COUNT(1) FROM sg_unit 
						WHERE is_active = 1
						AND is_delete = 0
						AND course_id = sct.course_id)) `totalUnit`,
		   cast_to_int(SUM(CASE WHEN stuc.is_completed = 1 THEN 1 ELSE 0 END)) `completedUnit`,
           cast_to_int(SUM(CASE WHEN stuc.is_completed <> 1 THEN 1 ELSE 0 END)) `uncompletedUnit`
    FROM sg_course_trainee sct
    JOIN sg_offline_class_trainee soct ON soct.course_trainee_id = sct.course_trainee_id AND soct.is_cancel = 0 AND soct.is_delete = 0
    LEFT JOIN sg_trainee_unit_completed stuc ON stuc.course_trainee_id = sct.course_trainee_id 
											    AND stuc.unit_completed_id = soct.unit_id 
                                                AND stuc.is_delete = 0
    WHERE (p_search_key != '' or p_course_id IS NULL OR sct.course_id = p_course_id)
          AND (p_search_key != '' or p_center_id IS NULL OR sct.study_center = p_center_id)
		  AND sct.trainee_id = p_student_id
    GROUP BY sct.course_trainee_id, sct.course_id, sct.study_center, sct.start_date, sct.end_date, sct.is_active
	ORDER BY sct.created_date ASC;
END
//

delimiter ;