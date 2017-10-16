(function () {
    angular.module('app').service('studentService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.getManageStudentPageData = function (params) {
		        var url = baseService.baseUrl + '/student/getManageStudentPageData';
		        return baseService.postData(url, params);
		    };
		    
		    this.getAddStudentPageData = function(){
		    	var url = baseService.baseUrl + '/student/getAddStudentPageData';
		        return baseService.postData(url);
		    };
		    
		    this.getIntroClassByCenterAndCourse = function(params){
		    	var url = baseService.baseUrl + '/student/getIntroClassByCenterAndCourse';
		        return baseService.postData(url, params);
		    	
		    };
		    
		    this.getIncomingFirstClass = function(params){
		    	var url = baseService.baseUrl + '/student/getIncomingFirstClass';
		        return baseService.postData(url, params);
		    };
		    
		    this.getIncomingIntroClass = function(params){
		    	var url = baseService.baseUrl + '/student/getIncomingIntroClass';
		        return baseService.postData(url, params);
		    };
		    
		    this.getIncomingNormalClass = function(params){
		    	var url = baseService.baseUrl + '/student/getIncomingNormalClass';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentDetailPageData = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentDetailPageData';
		        return baseService.postData(url, params);
		    };
		    
		    this.resetStudentPassword = function(params){
		    	var url = baseService.baseUrl + '/student/resetStudentPassword';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentClasses = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentClasses';
		        return baseService.postData(url, params);
		    };
		    
		    this.retakeStudentClass = function(params){
		    	var url = baseService.baseUrl + '/student/retakeStudentClass';
		        return baseService.postData(url, params);
		    };
		    
		    this.getOfflineClassForRetake = function(params){
		    	var url = baseService.baseUrl + '/student/getOfflineClassForRetake';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentDetailLogActivityData = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentDetailLogActivityData';
		        return baseService.postData(url, params);
		    };
		    
		    this.getAllCommentResult = function(params){
		    	var url = baseService.baseUrl + '/student/getAllCommentResult';
		        return baseService.postData(url, params);
		    };
		    
		    this.addActivityLog = function(params){
		    	var url = baseService.baseUrl + '/student/addActivityLog';
		        return baseService.postData(url, params);
		    };
		    
		    this.updateStudentCourseStatus = function(params){
		    	var url = baseService.baseUrl + '/student/updateStudentCourseStatus';
		        return baseService.postData(url, params);
		    };
		    
		    this.getCourseActivity = function(params){
		    	var url = baseService.baseUrl + '/student/getCourseActivity';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentProperty = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentProperty';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentQuiz = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentQuiz';
		        return baseService.postData(url, params);
		    };
		    
		    this.getStudentOtherActivity = function(params){
		    	var url = baseService.baseUrl + '/student/getStudentOtherActivity';
		        return baseService.postData(url, params);
		    };
		    
		    this.addNewStudent = function(params){
		    	var url = baseService.baseUrl + '/addNewStudent';
		        return baseService.postData(url, params);
		    };
		    
		}]);
})();