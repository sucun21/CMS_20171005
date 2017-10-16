(function () {
    angular.module('app').service('classScheduleService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.getClassSchedulePageData = function (params) {
		        var url = baseService.baseUrl + '/class/getClassSchedulePageData';
		        return baseService.postData(url, params);
		    };
		    
		    this.getClassSchedule = function(params){
		    	var url = baseService.baseUrl + '/class/getClassSchedule';
		        return baseService.postData(url, params);
		    };
		}]);
})();