(function () {
    angular.module('app').service('courseService', ['$http',
		function ($http, baseService) {
    		
//	    	this.baseUrl = restServer + 'api/course-cms';
    		this.baseUrl = 'api/course-cms';
	
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
    			    
		    this.getListCourse = function(params) {
		    	var url = this.baseUrl + "/get-course-by-user-type";	            
	            return this.postData(url, params);
	            //return $http.post(url + cmd, dtJSON).then(handleSuccess, handleError('Error'));
	        };
	        
	        this.getTrainerByCourseId = function(params) {
	        	var url = this.baseUrl + "/get-trainer-in-course";	            
	            return this.postData(url, params);
	        };
	        
	        this.executeCourse = function(params) {
	        	var url = this.baseUrl + "/execute-course";	            
	            return this.postData(url, params);
	        };
	        
	        this.getUnitInCourse = function(params){
	        	var url = this.baseUrl + "/cms-get-unit-in-course";	            
	            return this.postData(url, params);
	        };
	        
	        this.executeUnitCourse = function(params){
	        	var url = this.baseUrl + "/execute-unit-course";	            
	            return this.postData(url, params);
	        };
		    
		}]);
})();