(function () {
    angular.module('app').service('catalougeService', ['$http', 'baseService',
		function ($http, baseService) {
    	
	    	this.getCatalougePageData = function(params){
		    	var url = baseService.baseUrl + '/catalouge/getCatalougePageData';
		        return baseService.postData(url, params);
		    };
		}]);
})();