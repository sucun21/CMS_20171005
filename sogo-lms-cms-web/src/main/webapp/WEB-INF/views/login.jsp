<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="CommonUtils" class="com.sogo.lmscms.utils.CommonUtils" scope="session" />
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html ng-app="app" ng-cloak>
<head>
<title>Login - Learning Management System</title>
<meta charset="utf-8">
<base href="/">
<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1,initial-scale=1.0,user-scalable=no">
<link rel="icon" href="/images/favicon.ico">
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<c:choose>
	<c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
		<link rel="stylesheet" type="text/css"
			href="/pro/css/app_login.css?v=${CommonUtils.version}">
	</c:when>
	<c:otherwise>
		<link rel="stylesheet" type="text/css" href="/css/theme.css" />
		<link rel="stylesheet" type="text/css" href="/css/admin-forms.css" />
		<link rel="stylesheet" type="text/css" href="/css/customize.css" />
		<link rel="stylesheet" type="text/css" href="/css/login_customize.css" />
	</c:otherwise>
</c:choose>
	<!--[if lt IE 9]>
   <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
   <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
   <![endif]-->
</head>
<body class="external-page sb-l-c sb-r-c">
	<div id="main" class="animated fadeIn">
		<section id="content_wrapper">
			<section id="content">

				<div class="admin-form theme-info" id="login1">
					<div class="panel panel-info mt10 br-n">
						<div class="panel-heading heading-border bg-white">
							<h3 class="text-center text-uppercase mn color-black">Learning Management System</h3>
						</div>
						<form ng-submit="$ctrl.doLogin($event)" name="$ctrl.loginForm" novalidate accessible-form>
							<div class="panel-body bg-light p30">
								<div class="row">
									<div class="col-sm-12 pr30">
										<div class="section mb5">
<!-- 											<label for="UserName" class="field-label text-muted fs18 mb10">Username</label>  -->
											<label for="email" class="field prepend-icon"> 
												<input type="text" name="email" class="gui-input" placeholder="Enter email"
												ng-model="$ctrl.loginInfo.email" required 
												ng-class="{ 'input-validation-error' : $ctrl.loginForm.email.$invalid && $ctrl.loginForm.email.$dirty }"> 
												<label for="email" class="field-icon">
													<i class="fa fa-envelope"></i> 
												</label>
											</label>
											<span class="field-validation-error" ng-if="$ctrl.loginForm.email.$error.required && $ctrl.loginForm.email.$dirty">
					                            <span for="email">Email can't be blank</span>
					                        </span>
										</div>
										<div class="section mbn">
<!-- 											<label for="Password" class="field-label text-muted fs18 mb10">Password</label>  -->
											<label for="Password" class="field prepend-icon"> 
												<input type="password" name="Password" class="gui-input" placeholder="Enter password"
												ng-model="$ctrl.loginInfo.password" required 
												ng-class="{ 'input-validation-error' : $ctrl.loginForm.Password.$invalid && $ctrl.loginForm.Password.$dirty }"> 
												<label for="Password" class="field-icon">
													<i class="fa fa-lock"></i> 
												</label>
											</label>
											<span class="field-validation-error" ng-if="$ctrl.loginForm.Password.$error.required && $ctrl.loginForm.Password.$dirty">
					                            <span for="Password">Password can't be blank</span>
					                        </span>
					                        <span class="field-validation-error" ng-if="$ctrl.isLoginError">
					                            <span for="email">Email or password incorrect</span>
					                        </span>
										</div>
									</div>
								</div>
							</div>
							<div class="panel-footer clearfix p10 ph15">
								<button type="submit" class="button btn-primary mr10 pull-right">Login</button>
<!-- 								<div class="checkbox-custom mb5"> -->
<!--                                                         <input type="checkbox" checked="" id="checkboxDefault3"> -->
<!--                                                         <label for="checkboxDefault3">Default</label> -->
<!--                                                     </div> -->
<!-- 								<label -->
<!-- 									class="switch block switch-primary pull-left input-align mt10"> -->
<!-- 									<input type="checkbox" name="remember" id="remember" checked> -->
<!-- 									<label for="remember" data-on="YES" data-off="NO"></label> <span>Rememberme</span> -->
<!-- 								</label> -->
							</div>
						</form>
					</div>
				</div>
			</section>
		</section>
	</div>
    <div class="fullscreen-loader" ng-style="IsShowLoading() ? {display: 'block'} : {display: 'none'}">
        <div class="loader-backdrop"></div>
        <div class="loader-logo-container">
            <p>LMS</p>
        </div>
        <div class="spinner-alone"></div>
    </div>
</body>
<c:choose>
    <c:when test="${CommonUtils.runningEnvironment ne 'dev'}">
    	<script type="text/javascript" src="/pro/js/login_libs.js?v=${CommonUtils.version}"></script>
    	<script type="text/javascript" src="/pro/js/app_login.js?v=${CommonUtils.version}"></script>
    </c:when>
    <c:otherwise>
    	<script type="text/javascript" src="/libs/jquery-3.2.0.min.js"></script>
    	<script type="text/javascript" src="/libs/moment.min.js"></script>
    	<script type="text/javascript" src="/libs/bootstrap.min.js"></script>
    	<script type="text/javascript" src="/libs/utility.js"></script>
		<script type="text/javascript" src="/libs/linq.js"></script>
		<script type="text/javascript" src="/libs/angular.min.js"></script>
		<script type="text/javascript" src="/libs/angular-sanitize.js"></script>
		<script type="text/javascript" src="/libs/angular-cache.js"></script>
		<script type="text/javascript" src="/libs/angular-ui-router.min.js"></script>
		<script type="text/javascript" src="/libs/angular-ngprogress.min.js"></script>
		<script type="text/javascript" src="/libs/angular-ui-select.js"></script>
    
        <script type="text/javascript" src="/app/app.js"></script>
		<script type="text/javascript" src="/app/app.configs.js"></script>
		<script type="text/javascript" src="/app/app.services.js"></script>
		<script type="text/javascript" src="/app/app.filters.js"></script>
		<script type="text/javascript" src="/app/app.directives.js"></script>
		<script type="text/javascript" src="/app/controllers/main.js"></script>
		<script type="text/javascript" src="/app/controllers/login.js"></script>
    </c:otherwise>
</c:choose>
</html>