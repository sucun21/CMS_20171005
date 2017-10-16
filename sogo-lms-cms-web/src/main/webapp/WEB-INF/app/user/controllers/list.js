(function () {
    angular.module('app').controller('User.List', ['$scope', '$state', '$timeout', 'progressService', 'viewModel',
    	function ($scope, $state, $timeout, progressService, viewModel) {
    	var vm = this;
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtSearchKey')).focus();
    	});
    	
    	vm.listUserType = viewModel.listUserType;
    	vm.listUser = viewModel.listUser;
    	vm.params = $state.params;
    	
    	vm.listUserStatus = [
    		{value: '', name: 'All'},
    		{value: 'true', name: 'Active'},
    		{value: 'false', name: 'Deactive'}
    	];
    	
    	vm.listUserType.unshift({
    		userTypeId: '',
    		userTypeName: 'All'
    	});
    	vm.totalRow = vm.listUser && vm.listUser.length > 0 ? vm.listUser[0].totalRow : 0;
    	
    	vm.SearchUser = function(){
    		vm.params.p = 1;
    		vm.totalRow = 0;
    		$state.go($state.current, vm.params, {notify: false});
    	};
    	
    }]);
})();