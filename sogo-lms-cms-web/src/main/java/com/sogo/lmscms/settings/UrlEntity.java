package com.sogo.lmscms.settings;

public class UrlEntity {
	/*----------------------------------- URL $Shared ---------------------------------------------*/
	public static final String E_SHARED = "api/shared";
	public static final String A_PING = E_SHARED + "/ping";
	public static final String A_GET_ALL_CLASS_TYPE = E_SHARED + "/get-all-class-type";
	public static final String A_GET_UNIT_BY_COURSE_AND_CLASS_TYPE = E_SHARED + "/get-unit-by-course-and-class-type";
	/*----------------------------------- URL $User ---------------------------------------------*/
	public static final String E_USER = "api/user";
	public static final String A_CHECK_LOGIN = E_USER + "/check-login";
	public static final String A_CLEAR_SESSION_KEY = E_USER + "/clear-session-key";
	public static final String A_GET_USER_INFO_BY_SESSION = E_USER + "/get-user-info-by-session";
	public static final String A_GET_ALL_STUDENT = E_USER + "/get-all-student";
	public static final String A_GET_ALL_CENTER = E_USER + "/get-all-center";
	public static final String A_ADD_NEW_STUDENT = E_USER + "/add-new-student";
	public static final String A_GET_ALL_TRAINER = E_USER + "/get-all-trainer";
	public static final String A_GET_STUDENT_INFO = E_USER + "/get-student-info";
	public static final String A_GET_STUDENT_ACTIVITY_LOG = E_USER + "/get-student-activity-log";
    public static final String A_GET_ALL_COMMENT_TYPE = E_USER + "/get-all-comment-type";
    public static final String A_GET_ALL_COMMENT_RESULT = E_USER + "/get-all-comment-result";
    public static final String A_RESET_STUDENT_PASSWORD = E_USER + "/reset-student-password";
    public static final String A_ADD_ACTIVITY_LOG = E_USER + "/add-activity-log";
    public static final String A_GET_SYSTEM_USER = E_USER + "/get-system-user";
    public static final String A_GET_ALL_USER_TYPE = E_USER + "/get-all-user-type";
    public static final String A_ADD_NEW_USER = E_USER + "/add-new-user";
    public static final String A_GET_STUDENT_BOOKMARK_DETAIL = E_USER + "/get-student-bookmark-detail";
    public static final String A_GET_STUDENT_PROPERTY = E_USER + "/get-student-property";
    public static final String A_GET_STUDENT_QUIZ = E_USER + "/get-student-quiz";
    public static final String A_GET_STUDENT_OTHER_ACTIVITY = E_USER + "/get-student-other-activity";
    public static final String A_UPDATE_STUDENT_COURSE_STATUS = E_USER + "/update-student-course-status";
    public static final String A_GET_STUDENT_ALL_COURSE = E_USER + "/get-student-all-course";
    public static final String A_GET_STUDENT_CLASS_BY_COURSE = E_USER + "/get-student-class-by-course";
    public static final String A_RETAKE_STUDENT_CLASS = E_USER + "/retake-student-class";
	/*----------------------------------- URL $Course ---------------------------------------------*/
	public static final String E_COURSE = "api/course";
	public static final String A_GET_ALL_COURSE = E_COURSE + "/get-all-course";
	public static final String A_GET_INTRO_CLASS_BY_CENTER_COURSE = E_COURSE + "/get-intro-class-by-center-course";
	public static final String A_GET_COURSE_ACTIVITY = E_COURSE + "/get-course-activity";
	public static final String A_GET_UNIT_IN_COURSE = E_COURSE + "/get-unit-in-course";
	public static final String A_GET_COURSE_HOLIDAY = E_COURSE + "/get-course-holiday";
	public static final String A_GET_LESSON_IN_UNIT = E_COURSE + "/get-lesson-in-unit";
	public static final String A_GET_ACTIVITY_CATALOUGE = E_COURSE + "/get-activity-catalouge";
	public static final String A_GET_ACTIVITY_BY_ID = E_COURSE + "/get-activity-details";
	public static final String A_GET_QUIZ_QUESTION = E_COURSE + "/get-quiz-question";
	/*----------------------------------- URL $Offline Class ---------------------------------------------*/
	public static final String E_OFFLINE_CLASS = "api/offline-class";
	public static final String A_GET_PENDING_CHECK_ATTENDANCE_CLASS = E_OFFLINE_CLASS + "/get-pending-check-attendance-class";
	public static final String A_GET_INCOMING_CLASS = E_OFFLINE_CLASS + "/get-incoming-class";
	public static final String A_GET_CLASS_SCHEDULE = E_OFFLINE_CLASS + "/get-class-schedule";
	public static final String A_GET_STUDENT_BY_CLASS = E_OFFLINE_CLASS + "/get-student-by-class";
	public static final String A_UPDATE_STUDENT_ATTENDANCE = E_OFFLINE_CLASS + "/update-student-attendance";
	public static final String A_UPDATE_CLASS_ATTENDANCE_CHECK = E_OFFLINE_CLASS + "/update-class-attendance-check";
	public static final String A_GET_CLASS_INFO_BY_ID = E_OFFLINE_CLASS + "/get-class-info-by-id";
	public static final String A_CHANGE_CLASS_TRAINER = E_OFFLINE_CLASS + "/change-class-trainer";
	public static final String A_CHANGE_CLASS_TIME = E_OFFLINE_CLASS + "/change-class-time";
	public static final String A_GET_INCOMING_FIRST_CLASS = E_OFFLINE_CLASS + "/get-incoming-first-class";
	public static final String A_GET_QUIZ_REPORT = E_OFFLINE_CLASS + "/get-quiz-report";
	public static final String A_GET_QUIZ_REPORT_DETAIL = E_OFFLINE_CLASS + "/get-quiz-report-detail";
	public static final String A_GET_OFFLINE_CLASS_FOR_RETAKE = E_OFFLINE_CLASS + "/get-offline-class-for-retake";
	public static final String A_ADD_NEW_GROUP_CLASS = E_OFFLINE_CLASS + "/add-new-group-class";
	public static final String A_GET_ALL_GROUP_CLASS = E_OFFLINE_CLASS + "/get-all-group-class";
	public static final String A_EXTEND_GROUP_CLASS = E_OFFLINE_CLASS + "/extend-group-class";
	public static final String A_GET_INCOMING_INTRO_CLASS = E_OFFLINE_CLASS + "/get-incoming-intro-class";
    public static final String A_GET_INCOMING_NORMAL_CLASS = E_OFFLINE_CLASS + "/get-incoming-normal-class";
}
