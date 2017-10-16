(function () {
    angular.module('app').controller('loginCtrl', ['$scope', '$rootScope', 'dataService', '$timeout', '$state',
    	function ($scope, $rootScope, dataService, $timeout, $state) {
    	var vm = this;
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtEmail')).focus();
    	});
    	
    	vm.isSubmitAttempt = false;
        
        vm.isInvalidField = function(field){
        	return field.$invalid && (field.$dirty || vm.isSubmitAttempt);
        };
    	
    	vm.doLogin = function(e){
    		e.preventDefault();
    		vm.isLoginError = false;
    		vm.isSubmitAttempt = true;
    		if (vm.loginForm.$valid) {
                dataService.doLogin(vm.loginInfo).then(function (res) {
                	if(res && res.data){
                		var ref = getParameterByName('ref');
                		console.log(ref);
                		if(ref && ref.trim() != ''){
                			window.location.href = ref;
                		}
                		else{
                			$state.go('root.home');
                		}
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
    	}
    }]);
})();