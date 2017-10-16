(function () {
    angular.module('app').service('groupClassService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.getManageGroupClassPageData = function (params) {
		        var url = baseService.baseUrl + '/group-class/getManageGroupClassPageData';
		        return baseService.postData(url, params);
		    };
		    
		    this.getCourseHoliday = function(params){
		    	var url = baseService.baseUrl + '/group-class/getCourseHoliday';
		        return baseService.postData(url, params);
		    };
		    
		    this.getUnitByCourseAndClassType = function(params){
		    	var url = baseService.baseUrl + '/group-class/getUnitByCourseAndClassType';
		        return baseService.postData(url, params);
		    };
		    
		    this.addNewGroupClass = function(params){
		    	var url = baseService.baseUrl + '/group-class/addNewGroupClass';
		        return baseService.postData(url, params);
		    };
		    
		    this.extendGroupClass = function(params){
		    	var url = baseService.baseUrl + '/group-class/extendGroupClass';
		        return baseService.postData(url, params);
		    };
		}]);
})();