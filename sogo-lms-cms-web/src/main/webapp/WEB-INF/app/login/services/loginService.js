(function () {
    angular.module('app').service('loginService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.doLogin = function (params) {
		        var url = baseService.baseUrl + '/doLogin';
		        return baseService.postData(url, params);
		    };

		}]);
})();