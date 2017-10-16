function studentContractInfoCtrl($scope, $rootScope, $state, $q, dataService) {
	var vm = this;
	
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	
	var getStudentAllCourse = function(){
		var deferred = $q.defer();
		var promise = dataService.getStudentAllCourse(studentId);
		promise.then(function(res){
			vm.listStudentCourse = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	$q.all([
		getStudentAllCourse()
	]).then(function(){
		
	});
	
	/*cap nhat trang thai cua khoa hoc*/
	vm.updateStudentCourseStatus = function(course){
		var confirmText = course.isActive ? 'Are you sure want to active student course?' : 'Are you sure want to deactive student course?';
		bootbox.confirm(confirmText, function(res){
			if(res){
				var params = {
						
				};
				
				var params = {
					courseTraineeId: course.courseTraineeId,
					currentStatus: !course.isActive,
					newStatus: course.isActive
				};
				var promise = dataService.updateStudentCourseStatus(params);
				promise.then(function(res){
					if(res.data.id == 1){
						$scope.notifyService.success(res.data.message);
					}
					else{
						course.isActive = !course.isActive;
						$scope.notifyService.error(res.data.message);
					}
				});
				
				
			}
			else{
				$scope.$apply(function(){
					course.isActive = !course.isActive;
				});
			}
		});
	};
	
};

studentContractInfoCtrl.$inject = ['$scope', '$rootScope', '$state', '$q', 'dataService'];

app.controller('studentContractInfoCtrl', studentContractInfoCtrl);