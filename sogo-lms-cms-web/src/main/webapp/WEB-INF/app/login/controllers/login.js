(function () {
    angular.module('app').controller('Login', ['$scope', 'loginService', '$timeout', '$state', '$location', 'progressService',
    	function ($scope, loginService, $timeout, $state, $location, progressService) {
    	var vm = this;
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtEmail')).focus();
    	});
    	
    	vm.isSubmitAttempt = false;
        
        vm.isInvalidField = function(field){
        	return field.$invalid && (field.$dirty || vm.isSubmitAttempt);
        };
    	
    	vm.doLogin = function(){
    		vm.isLoginError = false;
    		vm.isSubmitAttempt = true;
    		if (vm.loginForm.$valid) {
    			progressService.start();
    			loginService.doLogin(vm.loginInfo).then(function (res) {
                	progressService.complete();
                	if(res && res.data){
//                		var ref = getParameterByName('ref');
//                		if(ref && ref.trim() != ''){
//                			$location.url($location.path(decodeURIComponent(ref)));
//                		}
//                		else{
//                			$state.go('root.home');
//                		}
                		
                		$state.go('root.home');
                	}
                	else{
                		vm.isLoginError = true;
                	}
                });
            }
    	};
    	
    	function getParameterByName(name, url) {
    	    if (!url) url = window.location.href;
    	    name = name.replace(/[\[\]]/g, "\\$&");
    	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    	        results = regex.exec(url);
    	    if (!results) return null;
    	    if (!results[2]) return '';
    	    return decodeURIComponent(results[2].replace(/\+/g, " "));
    	};
    }]);
})();