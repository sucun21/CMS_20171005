(function () {
    angular.module('app').controller('homeCtrl', ['$scope', '$rootScope', 'authData',
    	function ($scope, $rootScope, authData) {
    	var vm = this;
    	
    	console.log(authData);
    	
    }]);
})();