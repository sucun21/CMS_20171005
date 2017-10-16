function studentClassInfoCtrl($scope, $rootScope, $state, $q, dataService, $timeout) {
	var vm = this;
	
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	vm.showPopupRetake = false;
	
	var getStudentClassInfo = function(){
		var deferred = $q.defer();
		var params = {
			traineeId: studentId,
			courseTraineeId: vm.courseTraineeId
		};
		var promise = dataService.getStudentClasses(params);
		promise.then(function(res){
			vm.listStudentClass = res.data;
			deferred.resolve();
		});
		
		return deferred.promise; 
	};
	
	$q.all([
		getStudentClassInfo()
	]).then(function(){
		
	});
	
	vm.retakeClass = function(classInfo){
		var promise = dataService.getOfflineClassForRetake(classInfo.unitId);
		promise.then(function(res){
			vm.listRetakeClass = res.data;
			vm.retakeUnitTitle = classInfo.unitTitle;
			vm.retakeInfo = {
				classId: 0,
				oldClassId: classInfo.classId,
				unitId: classInfo.unitId
			}
			vm.showPopupRetake = true;
		});
	};
	
	vm.bookRetakeClass = function(){
		
		if(vm.retakeInfo.classId && vm.retakeInfo.classId > 0)
		{
			vm.retakeInfo.courseTraineeId = vm.courseTraineeId;
			vm.retakeInfo.createdBy = $rootScope.sessionUserId;
			
			
			var promise = dataService.retakeStudentClass(vm.retakeInfo);
			promise.then(function(res){
				if(res.data.id == 1){
					$scope.notifyService.success(res.data.message);
					vm.showPopupRetake = false;
					
					var params = {
						traineeId: studentId,
						courseTraineeId: vm.courseTraineeId
					};
					var reloadClass = dataService.getStudentClasses(params);
					reloadClass.then(function(res){
						vm.listStudentClass = res.data;
					});
					
					//Enumerable.From(vm.listStudentClass).First(function(x) { return x.classId == vm.retakeInfo.oldClassId; }).isRetake = true;
				}
				else{
					$scope.notifyService.error(res.data.message);
				}
			});
			
		}
		else{
			$scope.notifyService.error('Choose a class to book');
		}
	};
	
};

studentClassInfoCtrl.$inject = ['$scope', '$rootScope', '$state', '$q', 'dataService', '$timeout'];

app.controller('studentClassInfoCtrl', studentClassInfoCtrl);