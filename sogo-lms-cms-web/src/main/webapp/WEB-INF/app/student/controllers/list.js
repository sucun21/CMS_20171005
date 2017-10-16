(function () {
    angular.module('app').controller('Student.List', ['$scope', '$state', '$timeout', 'progressService', 'viewModel',
    	function ($scope, $state, $timeout, progressService, viewModel) {
    	var vm = this;
    	
    	vm.params = $state.params;
    	vm.listCourse = viewModel.listCourse;
    	vm.listCenter = viewModel.listCenter;
    	vm.params = $state.params;
    	vm.listStudent = viewModel.listStudent;
    	vm.totalRow = vm.listStudent && vm.listStudent.length > 0 ? vm.listStudent[0].totalRow : 0;
    	
    	vm.listCourse.unshift({
    		courseId: '',
    		courseTitle: 'All'
    	});
    	
    	vm.listCenter.unshift({
    		centerId: '',
    		centerName: 'All'
    	});
    	
    	vm.listStudentStatus = [
    		{value: '', name: 'All'},
    		{value: 'true', name: 'Active'},
    		{value: 'false', name: 'Deactive'}
    	];
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtSearchKey')).focus();
    	});
    	
    	vm.SearchStudent = function(){
    		vm.params.p = 1;
    		vm.totalRow = 0;
    		$state.go($state.current, vm.params);
    	};
    	
    }]);
})();