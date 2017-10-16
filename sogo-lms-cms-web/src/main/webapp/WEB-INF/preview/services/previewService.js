(function () {
    angular.module('app.preview').service('baseService', ['$http',
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
    angular.module('app.preview').service('previewService', ['$http', 'baseService',
		function ($http, baseService) {

		    this.getActivityDetails = function (params) {
		        var url = baseService.baseUrl + '/catalouge/getActivityDetails';
		        return baseService.postData(url, params);
		    };
		    
		    this.getQuizQuestion = function (params) {
		        var url = baseService.baseUrl + '/catalouge/getQuizQuestion';
		        return baseService.postData(url, params);
		    };
		    
		    this.getActivityCatalouge = function (params) {
		        var url = baseService.baseUrl + '/catalouge/getActivityCatalouge';
		        return baseService.postData(url, params);
		    };
		    
		}]);
})();