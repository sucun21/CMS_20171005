<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="CommonUtils" class="com.sogo.lmscms.utils.CommonUtils" scope="session"/>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<!DOCTYPE html>
<html ng-app="app" ng-cloak>
<head>
	<title>Activity Preview - Learning Management System</title>
	<meta charset="utf-8">
	<base href="/"> 
	<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1,initial-scale=1.0,user-scalable=no">
	<link rel="icon" href="/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<c:choose>
	    <c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
	    	<link rel="stylesheet" type="text/css" href="/preview/css/fonts/fonts.css">
	    	<link rel="stylesheet" type="text/css" href="/preview/css/app.css?v=${CommonUtils.version}">
	    </c:when>
	    <c:otherwise>
	    	<link rel="stylesheet" type="text/css" href="/preview/css/reset.css" />
			<link rel="stylesheet" type="text/css" href="/preview/css/fonts/fonts.css">
			<link rel="stylesheet" type="text/css" href="/preview/css/material.min.css">
			<link rel="stylesheet" type="text/css" href="/preview/css/customize.css">
			<link rel="stylesheet" type="text/css" href="/preview/css/common.css">
	    </c:otherwise>
	</c:choose>
</head>
<body ng-controller="catalougePreviewCtrl as vm" ng-init="init(${unitId}, ${lessonId}, ${activityId})">
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header fade in">
          <header class="mdl-layout__header">
          	<div class="mdl-layout__header-row header_logo">
            	<a class="mdl-layout-title">
            		<img src="/preview/images/logo1.png" style="height:48px;" />
            	</a>
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                 	<img class="logo_img visible-hidden" src="/preview/images/no-avatar.jpg" width="50" height="50" />
				</div>
            </div>
          </header>
		
		<main class="mdl-layout__content">
		  <div class="page-content">
		  	<div class="mdl-grid" ng-if="vm.activityDetails" ng-include="vm.getActivityTemplate(vm.activityTypeId)" id="dActivityInfo"></div>
		  </div>
		</main>
 	<dialog class="mdl-dialog show-rate-page size_1024">
		<h4 class="mdl-dialog__title" translate="TITLE_CONGRATULATIONS"></h4>
		<div class="close_dialog close" ng-click="$ctrl.closePopupRating()"></div>
		<div class="mdl-dialog__content">
			<p class="text-left mbn" translate="{{ $ctrl.isDoneUnit ? 'TEXT_COMPLETE_LAST_LESSON' : 'TEXT_COMPLETE_LESSON' }}"></p>
			<div id="dCurrentLessonCanDo" class="mdl-list" ng-show="$ctrl.listCurrentLessonCanDo && $ctrl.listCurrentLessonCanDo.length > 0">
<!-- 				<p class="mbn" ng-repeat="cando in $ctrl.listCurrentLessonCanDo" ng-bind-html="cando.canDoContent"> -->
<!-- 				</p> -->
<!-- 			  <p class="mbn text-left" translate="TEXT_NOW_YOU_CAN_DO"></p> -->
		      <div class="mdl-list__item star-re-align" ng-repeat="cando in $ctrl.listCurrentLessonCanDo">
		        <span class="mdl-list__item-primary-content">
		          <span class="mdl-list__item-secondary-action mr10"><i class="material-icons">star</i></span>
		          <span ng-bind-html="cando.canDoContent"></span>
		        </span>
		      </div>
		    </div>
		    <div id="dNextLessonCanDo" class="mdl-list" ng-show="$ctrl.listNextLessonCanDo && $ctrl.listNextLessonCanDo.length > 0">
			  <p class="text-left mbn" translate="TEXT_IN_NEXT_LESSON_YOU_WILL"></p>
<!-- 			  <p class="mbn" ng-repeat="cando in $ctrl.listNextLessonCanDo" ng-bind-html="cando.canDoContent"> -->
<!-- 				</p> -->
		      <div class="mdl-list__item star-re-align" ng-repeat="cando in $ctrl.listNextLessonCanDo">
		        <span class="mdl-list__item-primary-content">
		          <span class="mdl-list__item-secondary-action mr10 gray"><i class="material-icons">star</i></span>
		          <span ng-bind-html="cando.canDoContent"></span>
		        </span>
		      </div>
		    </div>
		    <p class="text-left mt10" translate="TEXT_READY_FOR_YOUR_UPCOMING_CLASS" ng-if="$ctrl.isDoneUnit"></p>
<!-- 		    <div id="dOfflineClassCanDo" class="mdl-list" ng-show="$ctrl.listOfflineClassCanDo && $ctrl.listOfflineClassCanDo.length > 0"> -->
<!-- 			  <p class="mbn text-left" translate="TEXT_WHEN_JOIN_OFFLINE_CLASS_YOU_WILL"></p> -->
<!-- 		      <div class="mdl-list__item pvn pt10 pbn" ng-repeat="cando in $ctrl.listOfflineClassCanDo"> -->
<!-- 		        <span class="mdl-list__item-primary-content"> -->
<!-- 		          <span class="mdl-list__item-secondary-action mr10 gray"><i class="material-icons">star</i></span> -->
<!-- 		          <span ng-bind-html="cando.canDoContent"></span> -->
<!-- 		        </span> -->
<!-- 		      </div> -->
<!-- 		    </div> -->
		    <p class="mt20" translate="TEXT_LESSON_FEEDBACK_PART_2"></p>
			<ul class="rating">
				<li ng-repeat="star in $ctrl.ratingStar" class="rate" ng-class="{'active': $ctrl.ratingValue && star <= $ctrl.ratingValue }" ng-click="$ctrl.ratingValue = star"></li>
			</ul>
			<div class="mdl-grid">
				<div class="mdl-cell mdl-cell--2-col"></div>
				<div class="mdl-cell mdl-cell--8-col">
					<textarea translate translate-attr-placeholder="PLACEHOLDER_COMMENT" style="resize:none;" ng-model="$ctrl.ratingComment"></textarea>
<!-- 					<span>{{250 - $ctrl.ratingComment.length}} left</span> -->
					<div class="popup-error-lesson-feedback" ng-if="$ctrl.lessonFeedbackErrorText">
						<p><i class="material-icons">&#xE000;</i><i translate="{{$ctrl.lessonFeedbackErrorText}}"></i></p>
					</div>  
					<div class="popup-success-lesson-feedback-success" ng-if="$ctrl.lessonFeedbackSuccessText">
						<p>
							<i class="material-icons">done</i> <i
								translate="{{$ctrl.lessonFeedbackSuccessText}}"></i>
						</p>
					</div>
					<a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn-info btn-info_submit"
						ng-click="$ctrl.SubmitLessonFeedback()" 
						translate="BTN_SUBMIT_FEEDBACK"></a>
				</div>
				<div class="mdl-cell mdl-cell--2-col"></div>
			</div>
		</div>
		
	</dialog>
	<!-- InstanceEndEditable -->
    </div>     
</body>
<script type="text/javascript">
	var imageDomain = '${CommonUtils.imageDomain}';
</script>
<c:choose>
    <c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
    	<script type="text/javascript" src="/preview/js/libs.js?v=${CommonUtils.version}"></script>
    	<script type="text/javascript" src="/preview/js/app.js?v=${CommonUtils.version}"></script>
    </c:when>
    <c:otherwise>
    	<script type="text/javascript" src="/preview/js/libs/jquery-3.2.0.min.js"></script>
    	<script type="text/javascript" src="/preview/js/libs/linq.js"></script>
		<script type="text/javascript" src="/preview/js/libs/angular.min.js"></script>
		<script type="text/javascript" src="/preview/js/libs/angular-cache.js"></script>
		<script type="text/javascript" src="/preview/js/libs/angular-sanitize.js"></script>
		<script type="text/javascript" src="/libs/angular-cache.js"></script>
		<script type="text/javascript" src="/preview/js/libs/jquery.mCustomScrollbar.concat.min.js"></script>
		<script type="text/javascript" src="/preview/js/libs/material.min.js"></script>
		<script type="text/javascript" src="/preview/js/libs/dialog-polyfill.js"></script>
		<script type="text/javascript" src="/preview/js/libs/html5shiv.js"></script>
		<script type="text/javascript" src="/preview/js/libs/moment.min.js"></script>
		
		<script type="text/javascript" src="/preview/js/app/app.js"></script>
		<script type="text/javascript" src="/app/app.services.js"></script>
    </c:otherwise>
</c:choose>
</html>
