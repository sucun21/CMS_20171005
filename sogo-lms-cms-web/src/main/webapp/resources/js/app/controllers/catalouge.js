function catalougeCtrl($scope, $rootScope, $q, $state, $stateParams, dataService, $timeout) {
	var vm = this;
	var oldCourseId = $stateParams.courseId;
	var oldUnitId = $stateParams.unitId;
	vm.params = $stateParams;
	
	var getAllCourse = function() {
		var deferred = $q.defer();
		var promise = dataService.getAllCourse();
		promise.then(function(res) {
			vm.listCourse = res.data;
			deferred.resolve();
		});

		return deferred.promise;
	};
	
	var getUnitInCourse = function(){
		var deferred = $q.defer();
		if(vm.params.courseId)
		{		
			var promise = dataService.getUnitInCourse(vm.params.courseId);
			promise.then(function(res){
				vm.listUnit = res.data;
				deferred.resolve();
			});
		}
		else{
			deferred.resolve();
		}
		
		return deferred.promise;
	};
	
	var getLessonInUnit = function(){
		var deferred = $q.defer();
		if(vm.params.unitId)
		{		
			var promise = dataService.getLessonInUnit(vm.params.unitId);
			promise.then(function(res){
				vm.listLesson = res.data;
				deferred.resolve();
			});
		}
		else{
			deferred.resolve();
		}
		
		return deferred.promise;
	};
	
	var getActivityCatalouge = function(){
		var deferred = $q.defer();
		
		var params = {
			unitId: vm.params.unitId,
			lessonId: vm.params.lessonId
		};
		
		var promise = dataService.getActivityCatalouge(params);
		promise.then(function(res){
			vm.listActivityCatalouge = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	
	
	$scope.$watch('parentLoaded', function (parentLoaded) {
        if (parentLoaded) {        	
        	$q.all([
        		getAllCourse(),
        		getUnitInCourse(),
        		getLessonInUnit(),
        		getActivityCatalouge()
        	]).then(function(){
        		  $timeout(function(){
        			  $('.select2').select2();
        		  });
    			  $scope.pageLoaded = true; 
        	  });
        }
    });
	
	vm.filterCatalouge = function(){
		if(vm.params.courseId != oldCourseId){
			vm.params.unitId = undefined;
			vm.params.lessonId = undefined;
		}
		else if(vm.params.unitId != oldUnitId){
			vm.params.lessonId = undefined;
		}
		
		$state.transitionTo($state.current, vm.params, {
            reload: true,
            inherit: false,
            notify: true
        });
	};
	
};

catalougeCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', '$stateParams', 'dataService', '$timeout'];

app.controller('catalougeCtrl', catalougeCtrl);