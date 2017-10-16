(function () {
    angular.module('app').service('classInfoService', ['$http', 'baseService',
		function ($http, baseService) {
    	
	    	this.getClassInfoPageData = function(params){
		    	var url = baseService.baseUrl + '/getClassInfoPageData';
		        return baseService.postData(url, params);
		    };
    	
		    this.updateStudentAttendance = function (params) {
		        var url = baseService.baseUrl + '/updateStudentAttendance';
		        return baseService.postData(url, params);
		    };
		    
		    this.updateClassAttendanceCheck = function(params){
		    	var url = baseService.baseUrl + '/updateClassAttendanceCheck';
		        return baseService.postData(url, params);
		    };
		}]);
})();