(function () {
    angular.module('app').service('trainerService', ['$http',
		function ($http, baseService) {
    		
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
	        
	        this.getAllTrainer = function(params) {
	        	var url = this.baseUrl + "/get-all-trainer";	            
	            return this.postData(url);
	        };
		    
	        this.executeTrainerCourse = function(params){
	        	var url = this.baseUrl + "/execute-trainer-course";	            
	            return this.postData(url, params);
	        };
	        
		}]);
})();