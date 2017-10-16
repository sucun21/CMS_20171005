function studentListCtrl($scope, $state, dataService, $timeout, initData, progressService, $q) {	
	var vm = this;
	
	vm.listCourse = initData.listCourse;
	vm.listCenter = initData.listCenter;
	vm.params = $state.params;
	vm.listData = initData.listData;
	
	vm.listStudentStatus = [
		{value: '', name: 'All'},
		{value: 'true', name: 'Active'},
		{value: 'false', name: 'Deactive'}
	];
	
	if(vm.listCourse)
		{
	vm.listCourse.unshift({
		courseId: '',
		courseTitle: 'All'
	});
		}
	
	vm.listCenter.unshift({
		centerId: '',
		centerName: 'All'
	});
	
	$scope.pageLoaded = true;
	vm.isLoadingData = false;
	vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
	progressService.complete();
	  
	vm.SearchStudent = function(){
		vm.params.p = 1;
		vm.totalRow = 0;
		$state.go($state.current, vm.params, {notify: false});
	};
	
	$timeout(function(){
		$scope.$on('$locationChangeSuccess', function(event, from, to) {
			$timeout(function(){
		        vm.listData = [];
		        vm.isLoadingData = true;
				
		        var promise = dataService.getStudentList(vm.params);
		        promise.then(function (res) {
		            progressService.complete();
		            
		            vm.isLoadingData = false;
		            vm.listData = res.data;
		            vm.totalRow = vm.listData && vm.listData.length > 0 ? vm.listData[0].totalRow : 0;
		        });
			});
		});
	});
};

studentListCtrl.$inject = ['$scope', '$state', 'dataService', '$timeout', 'initData', 'progressService', '$q'];

app.controller('studentListCtrl', studentListCtrl);