(function () {
    angular.module('app').controller('GroupClass.List', ['$scope', '$state', '$timeout', 'progressService', 'notificationService', 'groupClassService', 'viewModel',
    	function ($scope, $state, $timeout, progressService, notificationService, groupClassService, viewModel) {
    	var vm = this;
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtSearchKey')).focus();
    	});
    	
    	vm.listCourse = viewModel.listCourse;
    	vm.listCenter = viewModel.listCenter;
    	vm.listTrainer = viewModel.listTrainer;
    	vm.listClassType = viewModel.listClassType;
    	vm.params = $state.params;
    	vm.listGroupClass = viewModel.listGroupClass;
    	
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
    	vm.totalRow = vm.listGroupClass && vm.listGroupClass.length > 0 ? vm.listGroupClass[0].totalRow : 0;
    	
    	vm.SearchGroupClass = function(){
    		vm.params.p = 1;
    		vm.totalRow = 0;
    		$state.go($state.current, vm.params, {notify: false});
    	};
    	
    	$scope.$watch(function(){
    		return vm.listGroupClass;
    	}, function(val){
    		if(val && val.length > 0){
    			vm.listWeek = vm.listGroupClass[0].listSchedule;
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
    				
    				groupClassService.extendGroupClass(params).then(function (res) {
    		            progressService.complete();
    		            if(res.data.id == 1){
    		            	notificationService.success(res.data.message);
    		            	$state.go('.', $state.params, { reload: true });
    		            }
    		            else{
    		            	notificationService.error(res.data.message);
    		            }
    		        });
    			}
    		});
    	};
    	
    }]);
})();