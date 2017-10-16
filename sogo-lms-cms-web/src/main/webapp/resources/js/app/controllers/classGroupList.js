function classGroupListCtrl($scope, $rootScope, $q, $state, dataService, $timeout, progressService, notifyService, initData) {
	var vm = this;
	
	vm.listCourse = initData.listCourse;
	vm.listCenter = initData.listCenter;
	vm.listTrainer = initData.listTrainer;
	vm.listClassType = initData.listClassType;
	vm.params = $state.params;
	vm.listData = initData.listData;
	
	vm.listStatus = [
		{value: '', name: 'All'},
		{value: 'true', name: 'Active'},
		{value: 'false', name: 'Deactive'}
	];
	
	vm.listViewWeek = [
		{ value: '4', name: '4 Weeks' },
		{ value: '8', name: '8 Weeks' },
		{ value: '12', name: '12 Weeks' },
		{ value: '16', name: '16 Weeks' },
		{ value: '20', name: '20 Weeks' },
		{ value: '24', name: '24 Weeks' }
	];
	
	vm.listCourse.unshift({
		courseId: '',
		courseTitle: 'All'
	});
	
	vm.listCenter.unshift({
		centerId: '',
		centerName: 'All'
	});
	
	vm.listTrainer.unshift({
		userId: '',
		fullName: 'All'
	});
	
	vm.listClassType.unshift({
		classTypeId: '',
		classTypeName: 'All'
	});
	
	$scope.pageLoaded = true;
	vm.isLoadingData = false;
	vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
	progressService.complete();
	
	vm.SearchGroupClass = function(){
		vm.params.p = 1;
		vm.totalRow = 0;
		$state.go($state.current, vm.params, {notify: false});
	};
	
	$timeout(function(){
		$scope.$on('$locationChangeSuccess', function(event, from, to) {
			$timeout(function(){
		        vm.listData = [];
		        vm.isLoadingData = true;
				
		        var promise = dataService.getAllGroupClass(vm.params);
		        promise.then(function (res) {
		            progressService.complete();
		            
		            vm.isLoadingData = false;
		            vm.listData = res.data;
		            vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
		        });
			});
		});
	});
	
	$scope.$watch(function(){
		return vm.listData;
	}, function(val){
		if(val && val.length > 0){
			vm.listWeek = vm.listData[0].listSchedule;
		}
		else{
			vm.listWeek = [];
		}
	});
	
	vm.extendGroupClass = function(groupClass){
		
		bootbox.confirm("Extend group <strong>" + groupClass.groupClassName + "</strong> ?", function(res){
			if(res){
				progressService.start();
				var params ={
						groupClassId: groupClass.groupClassId,
						modifiedBy: $scope.sessionUserId	
				};
				
				var promise = dataService.extendGroupClass(params);
				promise.then(function (res) {
		            progressService.complete();
		            if(res.data.id == 1){
		            	notifyService.success(res.data.message);
		            	$state.reload();
		            }
		            else{
		            	notifyService.error(res.data.message);
		            }
		        });
			}
		});
	};
};

classGroupListCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', 'dataService', '$timeout', 'progressService', 'notifyService', 'initData'];

app.controller('classGroupListCtrl', classGroupListCtrl);