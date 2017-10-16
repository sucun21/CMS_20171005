(function () {
    angular.module('app').controller('User.Add', ['$scope', '$state', '$timeout', 'userService', 'notificationService', 'viewModel',
    	function ($scope, $state, $timeout, userService, notificationService, viewModel) {
    	    	
    	var vm = this;
    	vm.listUserType = viewModel.listUserType;
    	vm.UserInfo = {
    		userTypeId: ''
    	};
    	vm.isAttemptSubmit = false;
    	/*remove first item*/
    	vm.listUserType.splice(0, 1);
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtFirstName')).focus();
    	});
    	
    	vm.addNewUser = function() {
    		vm.isAttemptSubmit = true;
    		if (vm.addNewUserForm.$valid) {
    			vm.UserInfo.createdBy = $scope.sessionInfo.userId;
    			progressService.start();
    			 userService.addNewUser(vm.UserInfo).then(function(res) {
    				 if (res.data.id == 1) {
    					 notificationService.success(res.data.message);
    					 $state.go($state.$current.parent, $state.params, { reload: true });
    		        } 
    				else {
    					progressService.complete();
    					notificationService.error(res.data.message);
    		        }
    			});
    		} 
    	};
    	
    }]);
})();