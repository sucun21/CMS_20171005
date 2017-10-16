(function () {
    angular.module('app').service('userService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.getManageUserPageData = function (params) {
		        var url = baseService.baseUrl + '/user/getManageUserPageData';
		        return baseService.postData(url, params);
		    };
		    
		    this.addNewUser = function(params){
		    	var url = baseService.baseUrl + '/user/addNewUser';
		        return baseService.postData(url, params);
		    };

		}]);
})();