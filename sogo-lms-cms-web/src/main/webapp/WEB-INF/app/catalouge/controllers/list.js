(function () {
    angular.module('app').controller('Catalouge.List', ['$scope', '$state', 'viewModel',
    	function ($scope, $state, viewModel) {
    	var vm = this;
    	
    	var oldCourseId = $state.params.courseId;
    	var oldUnitId = $state.params.unitId;
    	vm.params = $state.params;
    	vm.listCourse = viewModel.listCourse ? viewModel.listCourse : [];
    	vm.listUnit = viewModel.listUnit ? viewModel.listUnit : [];
    	vm.listLesson = viewModel.listLesson ? viewModel.listLesson : [];
    	vm.listActivity = viewModel.listActivity;
    	
    	vm.listCourse.unshift({
    		courseId: '0',
    		courseTitle: 'All'
    	});
    	
    	vm.listUnit.unshift({
    		unitId: '0',
    		unitTitle: 'All'
    	});
    	
    	vm.listLesson.unshift({
    		lessonId: '0',
    		lessonTitle: 'All'
    	});
    	
    	vm.filterCatalouge = function(){
    		if(vm.params.courseId != oldCourseId){
    			vm.params.unitId = undefined;
    			vm.params.lessonId = undefined;
    		}
    		else if(vm.params.unitId != oldUnitId){
    			vm.params.lessonId = undefined;
    		}
    		
    		$state.go('.', vm.params, { reload: true });
    	};
    	
    }]);
})();