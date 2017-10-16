delimiter //

DROP PROCEDURE IF EXISTS web_cms_get_incoming_normal_class;
//

CREATE PROCEDURE `web_cms_get_incoming_normal_class`(
	p_center_id INT,
	p_course_id INT,
	p_intro_class_time TIMESTAMP
)
BEGIN
	/*DECLARE v_course_first_unit INT;*/
	
	SELECT soc.class_id `classId`,
				 sogc.group_class_id `groupClassId`,
				 TIMESTAMP(ADDTIME(soc.study_date, soc.study_time)) `studyDateTime`,
         TIMESTAMP(soc.study_date) `studyDate`,
         su.full_name `trainerName`,
         sogc.group_class_name `groupClassName`,
         sc.center_name `centerName`,
         soc.total_user_booked `totalUserBooked`,
         sogc.limit_user `limitUser` 
	FROM sg_offline_class soc
	JOIN sg_offline_group_class sogc ON sogc.group_class_id = soc.group_class_id
																			AND sogc.class_type_id = 2
																		  AND sogc.is_delete = 0
																			AND sogc.is_active = 1
																			AND sogc.course_id = p_course_id
																			AND sogc.center_id = p_center_id
																			AND soc.unit_id = sogc.unit_start_id
	JOIN sg_user su ON su.user_id = soc.trainer_id
	JOIN sg_center sc ON sc.center_id = sogc.center_id
	WHERE soc.is_active = 1
        AND soc.is_delete = 0
				AND ADDTIME(soc.study_date, soc.study_time) > p_intro_class_time
				AND soc.total_user_booked < sogc.limit_user
	ORDER BY ADDTIME(soc.study_date, soc.study_time) ASC;
	
END
//

delimiter ;