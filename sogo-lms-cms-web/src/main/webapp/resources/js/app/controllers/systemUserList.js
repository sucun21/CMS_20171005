function systemUserListCtrl($scope, $rootScope, $q, $state, $stateParams, dataService, $timeout, initData, progressService) {
	var vm = this;
	
	vm.listUserType = initData.listUserType;
	vm.listData = initData.listData;
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
	
	$scope.pageLoaded = true;
	vm.isLoadingData = false;
	vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
	progressService.complete();
	
	vm.SearchUser = function(){
		vm.params.p = 1;
		vm.totalRow = 0;
		$state.go($state.current, vm.params, {notify: false});
	};
	
	$timeout(function(){
		$scope.$on('$locationChangeSuccess', function(event, from, to) {			
			$timeout(function(){
				vm.listData = [];
		        vm.isLoadingData = true;
				
		        var promise = dataService.getSystemUser(vm.params);
		        promise.then(function (res) {
		            vm.listData = res.data;
		            progressService.complete();
		            
		            vm.isLoadingData = false;
		            vm.listData = res.data;
		            vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
		        });
			});
		});
	});
};

systemUserListCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', '$stateParams', 'dataService', '$timeout', 'initData', 'progressService'];

app.controller('systemUserListCtrl', systemUserListCtrl);