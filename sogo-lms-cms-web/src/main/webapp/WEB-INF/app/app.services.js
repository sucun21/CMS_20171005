(function () {
    angular.module('app').service('baseService', ['$http',
		function ($http) {

		    this.baseUrl = '/api';

		    this.getData = function (url, params) {
		        return $http.get(url, { params: params }).then(function (result) {
		            return result.data;
		        });
		    };

		    this.postData = function (url, params) {
		        return $http.post(url, params).then(function (result) {
		            return result.data;
		        });
		    };
		}]);
})();

(function () {
    angular.module('app').service('sharedService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.doLogout = function () {
		    	var url = baseService.baseUrl + '/doLogout';
		        return baseService.postData(url);
		    };
		    
		    this.getUserRole = function(userTypeId){
		    	var url = baseService.baseUrl + '/getUserRole';
		        return baseService.getData(url, {userTypeId : userTypeId});
		    	
		    };
		    
		}]);
})();

(function () {
    angular.module('app').service('notificationService', ['Notification',
		function (Notification) {

		    var defaultDelay = 3000;

		    this.error = function (msg, delay) {
		        Notification.error({
		            message: msg,
		            delay: delay ? delay : defaultDelay
		        });
		    };

		    this.success = function (msg, delay) {
		        Notification.success({
		            message: msg,
		            delay: delay ? delay : defaultDelay
		        });
		    };

		    this.info = function (msg, delay) {
		        Notification.info({
		            message: msg,
		            delay: delay ? delay : defaultDelay
		        });
		    };

		    this.warning = function (msg, delay) {
		        Notification.warning({
		            message: msg,
		            delay: delay ? delay : defaultDelay
		        });
		    };
		}]);
})();

app.factory('dataService',['$http', 'CacheFactory', '$timeout', function($http, CacheFactory, $timeout){
	var apiUrl = {
			getModules: '/api/getModules',
	        doLogin: '/api/doLogin',
	        doLogout: '/api/doLogout',
	        getUserSession: '/api/getUserSession',
	        getStudentList: '/api/getStudentList',
	        getAllCenter: '/api/getAllCenter',
	        getAllCourse: '/api/getAllCourse',
	        getIntroClassByCenterAndCourse: '/api/getIntroClassByCenterAndCourse',
	        getIncomingFirstClass: '/api/getIncomingFirstClass',
	        addNewStudent: '/api/addNewStudent',
	        getPendingCheckAttendanceClass: '/api/getPendingCheckAttendanceClass',
	        getIncomingClass: '/api/getIncomingClass',
	        getClassSchedule: '/api/getClassSchedule',
	        getClassInfoById: '/api/getClassInfoById',
	        getStudentByClass: '/api/getStudentByClass',
	        changeClassTrainer: '/api/changeClassTrainer',
	        changeClassTime: '/api/changeClassTime',
	        updateStudentAttendance: '/api/updateStudentAttendance',
	        updateClassAttendanceCheck: '/api/updateClassAttendanceCheck',
	        getAllTrainer: '/api/getAllTrainer',
	        getStudentInfo: '/api/getStudentInfo',
	        getStudentClasses: '/api/getStudentClasses',
	        getStudentActivityLog: '/api/getStudentActivityLog',
	        getAllCommentType: '/api/getAllCommentType',
	        getAllCommentResult: '/api/getAllCommentResult',
	        resetStudentPassword: '/api/resetStudentPassword',
	        addActivityLog: '/api/addActivityLog',
	        getQuizReport: '/api/getQuizReport',
	        getQuizReportDetail: '/api/getQuizReportDetail',
	        getSystemUser: '/api/getSystemUser',
	        getUserType: '/api/getUserType',
	        addNewUser: '/api/addNewUser',
	        //getStudentBookmarkDetail: '/api/getStudentBookmarkDetail',
	        getStudentProperty: '/api/getStudentProperty',
	        getStudentQuiz: '/api/getStudentQuiz',
	        getStudentOtherActivity: '/api/getStudentOtherActivity',
	        getCourseActivity: '/api/getCourseActivity',
	        getStudentAllCourse: '/api/getStudentAllCourse',
	        updateStudentCourseStatus: '/api/updateStudentCourseStatus',
	        getOfflineClassForRetake: '/api/getOfflineClassForRetake',
	        retakeStudentClass: '/api/retakeStudentClass',
	        getUnitInCourse: '/api/getUnitInCourse',
	        getCourseHoliday: '/api/getCourseHoliday',
	        addNewGroupClass: '/api/addNewGroupClass',
	        getLessonInUnit: '/api/getLessonInUnit',
	        getActivityCatalouge: '/api/getActivityCatalouge',
	        getActivityDetails: '/api/getActivityDetails',
	        getQuizQuestion: '/api/getQuizQuestion',
	        getAllGroupClass: '/api/getAllGroupClass',
	        getAllClassType: '/api/getAllClassType',
	        getUnitByCourseAndClassType: '/api/getUnitByCourseAndClassType',
	        extendGroupClass: '/api/extendGroupClass'
	    };

	    var getDataNoParam = function (url) {
	        return $http.get(url).then(function (result) {
	            return result.data;
	        });
	    };

	    var postDataNoParam = function (url) {
	        return $http.post(url).then(function (result) {
	            return result.data;
	        });
	    };

	    var postData = function (url, params) {
	        return $http.post(url, params).then(function (result) {
	            return result.data;
	        });
	    };
	    
	    if (!CacheFactory.get('masterDataCache')) {
	        // or CacheFactory('bookCache', { ... });
	        CacheFactory.createCache('masterDataCache', {
	          deleteOnExpire: 'aggressive',
	          recycleFreq: 60000
	        });
	      }
	    
	    var masterDataCache = CacheFactory.get('masterDataCache');

	    return {
	    	getModules: function(userTypeId){	    		
	    		var url = apiUrl.getModules;
	            return postData(url, userTypeId);
	    	},
	    	//login
	        doLogin: function (params) {
	            var url = apiUrl.doLogin;
	            return postData(url, params);
	        },
	        doLogout: function () {
	            var url = apiUrl.doLogout;
	            return postDataNoParam(url);
	        },
	        getUserSession: function () {
	            var url = apiUrl.getUserSession;
	            return postDataNoParam(url);
	        },
	        getStudentList: function (params) {
	            var url = apiUrl.getStudentList;
	            return postData(url, params);
	        },
	        getAllCenter: function(){	        	
//	        	if(masterDataCache.get(apiUrl.getAllCenter)){
//	        		return $timeout(function(){
//	        			return masterDataCache.get(apiUrl.getAllCenter);
//        			});	        		
//	        	}
//	        	else{
//	        		return $http.get(apiUrl.getAllCenter).then(function(result){
//	        			masterDataCache.put(apiUrl.getAllCenter, result.data);
//	        			return result.data;
//	        		});
//	        	}
	        	
	        	return $http.get(apiUrl.getAllCenter).then(function(result){
        			//masterDataCache.put(apiUrl.getAllCenter, result.data);
        			return result.data;
        		});
	        	
//	        	var url = apiUrl.getAllCenter;
//	        	return postDataNoParam(url);
	        },
	        getAllCourse: function(){
//	        	if(masterDataCache.get(apiUrl.getAllCourse)){
//	        		return $timeout(function(){
//	        			return masterDataCache.get(apiUrl.getAllCourse);
//        			});	        		
//	        	}
//	        	else{
//	        		return $http.get(apiUrl.getAllCourse).then(function(result){
//	        			masterDataCache.put(apiUrl.getAllCourse, result.data);
//	        			return result.data;
//	        		});
//	        	}
	        	
	        	return $http.get(apiUrl.getAllCourse).then(function(result){
        			//masterDataCache.put(apiUrl.getAllCourse, result.data);
        			return result.data;
        		});
	        	
//	        	var url = apiUrl.getAllCourse;
//	        	return postDataNoParam(url);
	        },
	        getIntroClassByCenterAndCourse: function(params){
	        	var url = apiUrl.getIntroClassByCenterAndCourse;
	        	return postData(url, params);
	        },
	        getIncomingFirstClass: function(params){
	        	var url = apiUrl.getIncomingFirstClass;
	        	return postData(url, params);
	        },
	        addNewStudent: function(params){
	        	var url = apiUrl.addNewStudent;
	        	return postData(url, params);
	        },
	        getPendingCheckAttendanceClass: function(params){
	           	var url = apiUrl.getPendingCheckAttendanceClass;
	        	return postData(url, params);
	        },
	        getIncomingClass: function(params){
	        	var url = apiUrl.getIncomingClass;
	        	return postData(url, params);
	        },
	        getClassSchedule: function(params){
	        	var url = apiUrl.getClassSchedule;
	        	return postData(url, params);
	        },
	        getClassInfoById: function(params){
	        	var url = apiUrl.getClassInfoById;
	        	return postData(url, params);
	        },
	        getStudentByClass: function(params){
	        	var url = apiUrl.getStudentByClass;
	        	return postData(url, params);
	        },
	        changeClassTrainer: function(params){
	        	var url = apiUrl.changeClassTrainer;
	        	return postData(url, params);
	        },
	        changeClassTime : function(params){
	        	var url = apiUrl.changeClassTime;
	        	return postData(url, params);
	        },
	        updateStudentAttendance: function(params){
	        	var url = apiUrl.updateStudentAttendance;
	        	return postData(url, params);
	        },
	        updateClassAttendanceCheck: function(params){
	        	var url = apiUrl.updateClassAttendanceCheck;
	        	return postData(url, params);
	        },
	        getAllTrainer: function(){
//	        	if(masterDataCache.get(apiUrl.getAllTrainer)){
//	        		return $timeout(function(){
//	        			return masterDataCache.get(apiUrl.getAllTrainer);
//        			});	        		
//	        	}
//	        	else{
//	        		return $http.get(apiUrl.getAllTrainer).then(function(result){
//	        			masterDataCache.put(apiUrl.getAllTrainer, result.data);
//	        			return result.data;
//	        		});
//	        	}
	        	
	        	return $http.get(apiUrl.getAllTrainer).then(function(result){
        			return result.data;
        		});
	        	
//	        	var url = apiUrl.getAllTrainer;
//	        	return postDataNoParam(url);
	        },
	        getStudentInfo: function(params){
	        	var url = apiUrl.getStudentInfo;
	        	return postData(url, params);
	        },
	        getStudentClasses: function(params){
	           	var url = apiUrl.getStudentClasses;
	        	return postData(url, params);
	        },
	        getStudentActivityLog: function(params){
	        	var url = apiUrl.getStudentActivityLog;
	        	return postData(url, params);
	        },
	        getAllCommentType: function(){
	        	var url = apiUrl.getAllCommentType;
	        	return postDataNoParam(url);
	        },
	        getAllCommentResult: function(params){
	        	var url = apiUrl.getAllCommentResult;
	        	return postData(url, params);
	        },
	        resetStudentPassword: function(params){
	        	var url = apiUrl.resetStudentPassword;
	        	return postData(url, params);
	        },
	        addActivityLog: function(params){
	        	var url = apiUrl.addActivityLog;
	        	return postData(url, params);
	        },
	        getQuizReport: function(params){
	        	var url = apiUrl.getQuizReport;
	        	return postData(url, params);
	        },
	        getQuizReportDetail: function(params){
	        	var url = apiUrl.getQuizReportDetail;
	        	return postData(url, params);
	        },
	        getSystemUser: function(params){
	        	var url = apiUrl.getSystemUser;
	        	return postData(url, params);
	        },
	        getUserType: function(){
	        	
//	        	if(masterDataCache.get(apiUrl.getUserType)){
//	        		return $timeout(function(){
//	        			return masterDataCache.get(apiUrl.getUserType);
//        			});	        		
//	        	}
//	        	else{
//	        		return $http.get(apiUrl.getUserType).then(function(result){
//	        			masterDataCache.put(apiUrl.getUserType, result.data);
//	        			return result.data;
//	        		});
//	        	}
	        	
	        	return $http.get(apiUrl.getUserType).then(function(result){
        			return result.data;
        		});
	        	
//	        	var url = apiUrl.getUserType;
//	        	return postDataNoParam(url);
	        },
	        addNewUser: function(params){
	        	var url = apiUrl.addNewUser;
	        	return postData(url, params);
	        },
//	        getStudentBookmarkDetail: function(params){
//	        	var url = apiUrl.getStudentBookmarkDetail;
//	        	return postData(url, params);
//	        },
	        getStudentProperty: function(params){
	        	var url = apiUrl.getStudentProperty;
	        	return postData(url, params);
	        },
	        getStudentQuiz: function(params){
	        	var url = apiUrl.getStudentQuiz;
	        	return postData(url, params);
	        },
	        getStudentOtherActivity: function(params){
	        	var url = apiUrl.getStudentOtherActivity;
	        	return postData(url, params);
	        },
	        getCourseActivity: function(params){
	        	var url = apiUrl.getCourseActivity;
	        	return postData(url, params);
	        },
	        getStudentAllCourse: function(params){
	        	var url = apiUrl.getStudentAllCourse;
	        	return postData(url, params);
	        },
	        updateStudentCourseStatus: function(params){
	        	var url = apiUrl.updateStudentCourseStatus;
	        	return postData(url, params);
	        },
	        getOfflineClassForRetake: function(params){
	        	var url = apiUrl.getOfflineClassForRetake;
	        	return postData(url, params);
	        },
	        retakeStudentClass: function(params){
	        	var url = apiUrl.retakeStudentClass;
	        	return postData(url, params);
	        },
	        getUnitInCourse: function(params){
	        	var url = apiUrl.getUnitInCourse;
	        	return postData(url, params);
	        },
	        getCourseHoliday: function(params){
	        	var url = apiUrl.getCourseHoliday;
	        	return postData(url, params);
	        },
	        addNewGroupClass: function(params){
	        	var url = apiUrl.addNewGroupClass;
	        	return postData(url, params);
	        },
	        getLessonInUnit: function(params){
	        	var url = apiUrl.getLessonInUnit;
	        	return postData(url, params);
	        },
	        getActivityCatalouge: function(params){
	        	var url = apiUrl.getActivityCatalouge;
	        	return postData(url, params);
	        },
	        getActivityDetails: function(params){
	        	var url = apiUrl.getActivityDetails;
	        	return postData(url, params);
	        },
	        getQuizQuestion: function(params){
	        	var url = apiUrl.getQuizQuestion;
	        	return postData(url, params);
	        },
	        getAllGroupClass: function(params){
	        	var url = apiUrl.getAllGroupClass;
	        	return postData(url, params);
	        },
	        getAllClassType: function(){
	        	
	        	var key = apiUrl.getAllClassType;
//	        	
//	        	if(masterDataCache.get(key)){
//	        		return $timeout(function(){
//	        			return masterDataCache.get(key);
//        			});	        		
//	        	}
//	        	else{
//		        	return $http.get(key).then(function(result){
//		        		masterDataCache.put(key, result.data);
//	        			return result.data;
//	        		});
//	        	}
	        	
	        	return $http.get(key).then(function(result){
        			return result.data;
        		});
	        	
	        },
	        getUnitByCourseAndClassType: function(params){
	        	var url = apiUrl.getUnitByCourseAndClassType;
	        	return postData(url, params);
	        },
	        extendGroupClass: function(params){
	        	var url = apiUrl.extendGroupClass;
	        	return postData(url, params);
	        }
	    };
}]);

app.service('notifyService', function () {
    this.error = function (content, timeout) {
        showNotify(content, 'error', timeout);
    };

    this.success = function (content, timeout) {
        showNotify(content, 'success', timeout);
    };

    var showNotify = function (content, type, timeout) {
        timeout = timeout == undefined ? 1400 : timeout;
        new PNotify({
            //title: 'Thông báo',
            text: content,
            delay: timeout,
            icon: false,
            styling: 'bootstrap3',
            //addclass: "stack_top_right",
            type: type,
            //stack: Stacks["stack_top_right"],
            width: "290px",
            animate: {
                animate: false
                //in_class: 'bounceIn',
                //out_class: 'bounceOut'
            },
            buttons: {
                sticker: false,
                closer: false
            }

        });
    };
});

app.service('progressService', ['ngProgressFactory', function (ngProgressFactory) {
	
	var progressbar = ngProgressFactory.createInstance();
	progressbar.setColor('#70ca63');
	
    this.start = function () {
    	progressbar.start();
    };
    
    this.complete = function(){
    	progressbar.complete();
    };
    
    this.status = function(){
    	return progressbar.status();
    };
    
    this.reset = function(){
    	progressbar.reset();
    };
}]);


app.service('fileUploader', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);        
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    };
}]);