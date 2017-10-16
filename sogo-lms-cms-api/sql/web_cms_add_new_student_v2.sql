delimiter //

DROP PROCEDURE IF EXISTS web_cms_add_new_student_v2;
//

CREATE PROCEDURE `web_cms_add_new_student_v2`(
	IN p_firstName VARCHAR(100),
  IN p_lastName VARCHAR(100),
	IN p_userEmail VARCHAR(250),
  IN p_userPhone VARCHAR(20),
  IN p_password VARCHAR(200),
  IN p_dob DATE,
  IN p_gender INT,
  IN p_centerId INT,
  IN p_courseId INT,
  IN p_contractNo VARCHAR(150),
  IN p_introClassId INT,
  IN p_normalClassId INT,
  IN p_startDate DATE,
  IN p_endDate DATE,
  IN p_avatarUrl VARCHAR(500),
  IN p_createdBy INT
)
BEGIN

	DECLARE v_traineeId INT;
	DECLARE v_courseTraineeId INT;
	DECLARE v_errorText TEXT;
	DECLARE v_userFullName TEXT;
	DECLARE errorText TEXT;
	DECLARE v_normalGroupClassId INT;
	DECLARE v_normalClassStartDate TIMESTAMP;
	DECLARE v_countNormalClassUnit INT DEFAULT 0;
	DECLARE v_end_cursor BOOLEAN DEFAULT FALSE;
	DECLARE v_courseTitle TEXT;
	DECLARE v_introClassUnitId INT;
	DECLARE v_introClassFirstLessonId INT;
	DECLARE v_introClassFirstActivityId INT;
	DECLARE v_introClassTotalActivityTime TIME;

	DECLARE v_class_id INT;
	DECLARE v_unit_id INT;
	DECLARE v_unit_title TEXT;
	DECLARE v_class_time TIMESTAMP;
	DECLARE v_class_schedule_text TEXT;
	        
	DEClARE class_cur CURSOR FOR 
	SELECT soc.class_id, 
				 soc.unit_id, 
         su.unit_title, 
         ADDTIME(soc.study_date, soc.study_time)
  FROM sg_offline_class soc
	JOIN sg_unit su on su.unit_id = soc.unit_id
	WHERE soc.class_id >= p_normalClassId
				AND soc.group_class_id = v_normalGroupClassId
-- 	WHERE soc.group_class_id = v_normalGroupClassId
-- 				AND su.class_type_id = 2
-- 				AND addtime(soc.study_date, soc.study_time) >= v_normalClassStartDate
-- 	JOIN sg_offline_group_class sogc on sogc.group_class_id = soc.group_class_id
-- 	WHERE sogc.group_class_id = v_normalGroupClassId
-- 		 AND soc.is_active = 1
-- 		 AND soc.is_delete = 0
-- 		 
-- 		 AND sogc.is_active = 1
-- 		 AND sogc.is_delete = 0
--          AND su.is_active = 1
--          AND su.is_delete = 0
 	ORDER BY ADDTIME(soc.study_date, soc.study_time) ASC
  LIMIT v_countNormalClassUnit;
    
	/**Delare handler sql_exception*/
  DECLARE EXIT HANDLER FOR SQLEXCEPTION 
  BEGIN
	  GET DIAGNOSTICS CONDITION 1 errorText = MESSAGE_TEXT;
		  SELECT -1 `id`,
				errorText `message`;
	  ROLLBACK;
	END;
    
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_end_cursor = TRUE;
	
	IF NOT EXISTS (SELECT 1 FROM sg_offline_class WHERE class_id = p_introClassId AND is_active = 1 AND is_delete = 0) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Introduction class not exists';
	ELSEIF NOT EXISTS (SELECT 1 FROM sg_offline_class soc 
										 JOIN sg_offline_group_class sogc on sogc.group_class_id = soc.group_class_id
										 WHERE class_id = p_introClassId
													 AND soc.total_user_booked < sogc.limit_user) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Introduction class full';
	ELSEIF NOT EXISTS (SELECT 1 FROM sg_offline_class WHERE class_id = p_normalClassId AND is_active = 1 AND is_delete = 0) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Normal class not exists';
	ELSEIF NOT EXISTS (SELECT 1 FROM sg_offline_class soc 
										 JOIN sg_offline_group_class sogc on sogc.group_class_id = soc.group_class_id
										 WHERE class_id = p_normalClassId
													 AND soc.total_user_booked < sogc.limit_user) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Normal class full';
	ELSEIF EXISTS (SELECT 1 FROM sg_user WHERE user_email = p_userEmail AND user_type_id = 4) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Student already exists';
	END IF;
	
	SET v_userFullName = CONCAT(p_firstName, ' ', p_lastName);
	
	SELECT course_title INTO v_courseTitle
	FROM sg_course
	WHERE course_id = p_courseId;
	
	SELECT COUNT(1) INTO v_countNormalClassUnit
	FROM sg_unit
	WHERE course_id = p_courseId
				AND class_type_id = 2
				AND is_delete = 0
				AND is_active = 1;
	
	SELECT group_class_id, ADDTIME(study_date, study_time)
	INTO v_normalGroupClassId, v_normalClassStartDate
	FROM sg_offline_class 
	WHERE class_id = p_normalClassId;
	
	SELECT unit_id INTO v_introClassUnitId
	FROM sg_offline_class
	WHERE class_id = p_introClassId;
	
	SELECT lesson_id INTO v_introClassFirstLessonId
	FROM sg_lesson sl 
	WHERE sl.unit_id = v_introClassUnitId 
				AND sl.is_active = 1 
				AND sl.is_delete = 0
	ORDER BY IFNULL(sort_order, 9999) ASC, lesson_id ASC
	LIMIT 1;
	
	SELECT activity_id INTO v_introClassFirstActivityId
	FROM sg_activity sa 
	WHERE sa.lesson_id = v_introClassFirstLessonId
				AND sa.is_active = 1
				AND sa.is_delete = 0
	ORDER BY IFNULL(sort_order, 9999) ASC, activity_id ASC
	LIMIT 1;
	
	SELECT SEC_TO_TIME(SUM(activity_time)) INTO v_introClassTotalActivityTime
	FROM sg_activity sa 
	WHERE sa.lesson_id = v_introClassFirstLessonId
				AND sa.is_active = 1
				AND sa.is_delete = 0;


	/**Start transaction*/
	START TRANSACTION;
	
	/*insert sg_user*/
	INSERT INTO sg_user (
		user_type_id, 
		user_email, 
		user_phone, 
		password, 
		full_name, 
		first_name, 
		last_name, 
		date_of_birth, 
		gender, 
		avatar_url,
		created_by,
		full_name_ascii
	)
	VALUE(4, /*user type trainee*/
		p_userEmail, 
		p_userPhone, 
		p_password, 
		v_userFullName, 
		p_firstName,
		p_lastName,
		p_dob,
		p_gender,
		p_avatarUrl,
		p_createdBy,
		convert_to_unsign(v_userFullName)
	);
	
	SET v_traineeId = LAST_INSERT_ID();
	
	/*inser sg_course_trainee*/
	INSERT INTO sg_course_trainee(
		course_id, 
		trainee_id,
		contract_no,
		start_date,
		end_date,
		created_by,
		study_center
	)
	VALUE(
		p_courseId, 
		v_traineeId,
		p_contractNo,
		p_startDate,
		p_endDate,
		p_createdBy,
		p_centerId
	);
	
	/*set course trainee id*/
	SET v_courseTraineeId = LAST_INSERT_ID();
	
	/*insert sg_trainee_timeline join course*/
	INSERT INTO sg_trainee_timeline (
		timeline_type_id, 
		trainee_id, 
		course_id, 
		post_content, 
		post_by, 
		post_by_name, 
		is_show_timeline,
		course_trainee_id) 
	VALUE (
		1, /*timeline Your start date*/
		v_traineeId, 
		p_courseId, 
		CONCAT('Welcome to the <b>', v_courseTitle, '</b> course!'), 
		v_traineeId, 
		v_userFullName, 
		1, /*show on timeline*/
		v_courseTraineeId
	);
	
	/*insert sg_offline_class_trainee intro class*/
	INSERT INTO sg_offline_class_trainee (
		class_id, 
		course_trainee_id, 
		unit_id, 
		booked_date,
		attended_date,
		created_by
	)
	SELECT class_id, 
				 v_courseTraineeId, 
				 unit_id, 
		     NOW(), 
		     ADDTIME(study_date, study_time),
		     p_createdBy
	FROM sg_offline_class 
	where class_id = p_introClassId;
		
	/*update total user booked*/
  UPDATE sg_offline_class
	SET total_user_booked = total_user_booked + 1
	WHERE class_id = p_introClassId;
	
	/*generate timeline offline class time - intro class*/
	SELECT CONCAT('<b>Here is your class schedule for this course:</b>\r\n', 
									DATE_FORMAT(ADDTIME(study_date, study_time), '%H:%i %d/%m/%Y'), ' - ' , su.unit_title) 
	INTO v_class_schedule_text
	FROM sg_offline_class soc
  JOIN sg_unit su on su.unit_id = soc.unit_id
	WHERE class_id = p_introClassId;
	
	/*insert sg_offline_class_trainee normal class*/
	OPEN class_cur;
  get_class: LOOP
		
        
		FETCH class_cur INTO v_class_id, v_unit_id, v_unit_title, v_class_time;

		IF v_end_cursor THEN 
			LEAVE get_class;
		END IF;
        
		IF EXISTS (SELECT 1 
							 FROM sg_offline_class soc
							 JOIN sg_offline_group_class sogc on sogc.group_class_id = soc.group_class_id
               WHERE soc.total_user_booked < sogc.limit_user) THEN
        
			SET v_class_schedule_text = CONCAT(v_class_schedule_text, '\r\n', 
																					DATE_FORMAT(v_class_time, '%H:%i %d/%m/%Y'), ' - ', v_unit_title);
			
			INSERT INTO sg_offline_class_trainee (
				class_id,
				course_trainee_id,
				unit_id,
				attended_date,
				created_by
			)
			VALUE(
				v_class_id,
				v_courseTraineeId,
				v_unit_id,
				v_class_time,
				p_createdBy
			);
			
			UPDATE sg_offline_class
			SET total_user_booked = total_user_booked + 1
			WHERE class_id = v_class_id;
            
		ELSE
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Normal class full';
		END IF;
        
        
	END LOOP get_class;

	CLOSE class_cur;
	
	/*insert offline class time timeline*/
	INSERT INTO sg_trainee_timeline (
		timeline_type_id, 
		trainee_id, 
		course_id, 
		post_content, 
		post_by, 
		post_by_name, 
		is_show_timeline,
		course_trainee_id
	) 
	VALUE (
		7, /*timeline offline class time*/
		v_traineeId, 
		p_courseId, 
		v_class_schedule_text, 
		v_traineeId, 
		v_userFullName, 
		1,/*show on timeline*/
		v_courseTraineeId
	);
	
	/*insert sg_trainee_result*/
	INSERT INTO sg_trainee_result(
		course_trainee_id, 
		current_unit_id, 
		current_lesson_id, 
		next_activity_id, 
		unit_remain_time
	)
	VALUE(
		v_courseTraineeId,
		v_introClassUnitId,
		v_introClassFirstLessonId,
		v_introClassFirstActivityId,
		v_introClassTotalActivityTime
	);
	
	/*insert sg_trainee_lesson*/
	INSERT INTO sg_trainee_lesson(
		course_trainee_id,
		lesson_id,
		lesson_title,
		lesson_des,
		unit_id,
		unit_title,
		unit_des,
		created_by
	)
	SELECT v_courseTraineeId,
	sl.lesson_id,
	sl.lesson_title,
	sl.lesson_des,
	su.unit_id,
	su.unit_title,
	su.unit_des,
	p_createdBy
	FROM sg_lesson sl
	JOIN sg_unit su ON su.unit_id = sl.unit_id
	WHERE sl.lesson_id = v_introClassFirstLessonId;
    
	/*insert sg_trainee_unit_completed*/
	INSERT INTO sg_trainee_unit_completed(
		course_trainee_id,
		unit_completed_id,
		created_by
	)
	VALUE(
		v_courseTraineeId,
		v_introClassUnitId,
		p_createdBy
	);
	
	SELECT 1 `id`, 'Student added' `message`;
	
	/**Commit update and insert*/
	COMMIT;

END
//

delimiter ;