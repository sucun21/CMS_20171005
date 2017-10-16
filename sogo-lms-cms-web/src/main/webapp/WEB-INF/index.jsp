<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="CommonUtils" class="com.sogo.lmscms.utils.CommonUtils" scope="session"/>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<!DOCTYPE html>
<html ng-app="app" ng-cloak>
<head>
	<title ng-bind="title"></title>
	<meta charset="utf-8">
	<base href="/"> 
	<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1,initial-scale=1.0,user-scalable=no">
	<link rel="icon" href="/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
	<c:choose>
	    <c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
			<link rel="stylesheet" type="text/css" href="/build/app.min.css?v=${CommonUtils.version}">
	    </c:when>
	    <c:otherwise>
	    	<link rel="stylesheet" type="text/css" href="/css/fullcalendar.css">
	        <link rel="stylesheet" type="text/css" href="/css/theme.css" />
			<link rel="stylesheet" type="text/css" href="/css/adminpanels.css">
			<link rel="stylesheet" type="text/css" href="/css/admin-forms.css">
			<link rel="stylesheet" type="text/css" href="/css/bootstrap-datetimepicker.min.css">
			<link rel="stylesheet" type="text/css" href="/css/customize.css">
			<link rel="stylesheet" type="text/css" href="/css/select2.css">
			<link rel="stylesheet" type="text/css" href="/css/custom-dropdown.css">
			<link rel="stylesheet" type="text/css" href="/css/ngProgress.css">
			<link rel="stylesheet" type="text/css" href="/css/ui-select.css">
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/select2/3.4.5/select2.css">
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.default.css">
			<link rel="stylesheet" type="text/css" href="/css/login_customize.css" />
			<link rel="stylesheet" type="text/css" href="/css/angular-ui-notification.min.css" />
			<link rel="stylesheet" type="text/css" href="/preview/css/fonts.css">
	    </c:otherwise>
	</c:choose>
	<script>
	  function resizeIframe(obj) {
	    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	    console.log(obj.contentWindow.document.body.scrollHeight);
	  }
	</script>
</head>
<body class="sb-l-o sb-r-c" ng-class="{'external-page': isLoginPage, 'panel-fullscreen-active': isPanelFullScreenPage, 'error-page': isErrorPage}">
	<ui-view></ui-view>
    <div class="fullscreen-loader" ng-if="IsShowLoading()" style="display:block;">
        <div class="loader-backdrop"></div>
    </div>
</body>
<script type="text/javascript">
	var imageDomain = '${CommonUtils.imageDomain}';
	var appVersion = '${CommonUtils.version}';
	var restServer = '${CommonUtils.restServer}';
</script>
<c:choose>
    <c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
    	<script type="text/javascript" src="/build/libs.min.js?v=${CommonUtils.version}"></script>
    	<script type="text/javascript" src="/build/app.min.js?v=${CommonUtils.version}"></script>
    	<script type="text/javascript" src="/libs/tinymce/tinymce.min.js"></script>
    	<script type="text/javascript" src="/libs/tinymce/libs/angular-ui-tinymce/tinymce.min.js"></script>
    </c:when>
    <c:otherwise>
    	<script type="text/javascript" src="/build/libs.min.js?v=${CommonUtils.version}"></script>
    	<script type="text/javascript" src="/libs/tinymce/tinymce.js"></script>
    	<script type="text/javascript" src="/libs/tinymce/libs/angular-ui-tinymce/tinymce.min.js"></script>
<!--  	    <script type="text/javascript" src="/libs/jquery-3.2.0.min.js"></script> -->
<!--  	    <script type="text/javascript" src="/libs/moment.min.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/bootstrap.min.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/bootstrap-datetimepicker.min.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/fullcalendar.min.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/fullcalendar-locale-all.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/select2.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/utility.js"></script> -->
<!--     	<script type="text/javascript" src="/libs/main.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/linq.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/common.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular.min.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular-sanitize.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular-cache.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular-ui-router.min.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular-ngprogress.min.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/angular-ui-select.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/ocLazyLoad.require.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/ocLazyLoad.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/ui-router-extras.core.js"></script> -->
<!-- 		<script type="text/javascript" src="/libs/ui-router-extras.future.js"></script> -->
    
        <script type="text/javascript" src="/app/app.js"></script>
        <script type="text/javascript" src="/app/app.configs.js"></script>
		<script type="text/javascript" src="/app/app.routes.js"></script>
		<script type="text/javascript" src="/app/app.services.js"></script>
		<script type="text/javascript" src="/app/app.filters.js"></script>
		<script type="text/javascript" src="/app/app.directives.js"></script>
<!-- 		<script type="text/javascript" src="/app/controllers/main.js"></script> -->


		<script type="text/javascript" src="/app/shared/controllers/leftMenu.js"></script>
		<script type="text/javascript" src="/app/home/controllers/home.js"></script>
		<script type="text/javascript" src="/app/login/controllers/login.js"></script>
		<script type="text/javascript" src="/app/classSchedule/controllers/classSchedule.js"></script>
		<script type="text/javascript" src="/app/classSchedule/controllers/classInfo.js"></script>
		<script type="text/javascript" src="/app/student/controllers/list.js"></script>
		<script type="text/javascript" src="/app/student/controllers/add.js"></script>
		<script type="text/javascript" src="/app/student/controllers/detail.js"></script>
		<script type="text/javascript" src="/app/student/controllers/detail-class.js"></script>
		<script type="text/javascript" src="/app/student/controllers/detail-log-activity.js"></script>
		<script type="text/javascript" src="/app/student/controllers/detail-contract.js"></script>
		<script type="text/javascript" src="/app/student/controllers/detail-lab-activity.js"></script>
		<script type="text/javascript" src="/app/user/controllers/list.js"></script>
		<script type="text/javascript" src="/app/user/controllers/add.js"></script>
		<script type="text/javascript" src="/app/groupClass/controllers/list.js"></script>
		<script type="text/javascript" src="/app/groupClass/controllers/add.js"></script>
		<script type="text/javascript" src="/app/catalouge/controllers/list.js"></script>
		<script type="text/javascript" src="/app/course/controllers/manage.js"></script>
		
		<script type="text/javascript" src="/app/login/services/loginService.js"></script>
		<script type="text/javascript" src="/app/classSchedule/services/classScheduleService.js"></script>
		<script type="text/javascript" src="/app/classSchedule/services/classInfoService.js"></script>
		<script type="text/javascript" src="/app/student/services/studentService.js"></script>
		<script type="text/javascript" src="/app/user/services/userService.js"></script>
		<script type="text/javascript" src="/app/groupClass/services/groupClassService.js"></script>
		<script type="text/javascript" src="/app/catalouge/services/catalougeService.js"></script>
		<script type="text/javascript" src="/app/course/services/courseService.js"></script>
		<script type="text/javascript" src="/app/course/services/trainerService.js"></script>
		
<!-- 		<script type="text/javascript" src="/app/controllers/leftMenu.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/paging.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/dashboard.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/dashboardTeacher.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/classInfoTeacher.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentList.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/addStudent.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentDetails.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/systemUserList.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/addUser.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentDetails/studentClassInfo.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentDetails/studentLogActivity.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentDetails/studentLabActivity.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/studentDetails/studentContractInfo.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/classGroupList.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/addClassGroup.js"></script> -->
<!-- 		<script type="text/javascript" src="/app/controllers/catalouge.js"></script> -->
    </c:otherwise>
</c:choose>
</html>
