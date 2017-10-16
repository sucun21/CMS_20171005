(function () {
    angular.module('app').controller('Student.Detail', ['$scope', '$q', '$state', 'studentService', 'notificationService', 'viewModel', 'authData',
    	function ($scope, $q, $state, studentService, notificationService, viewModel, authData) {
    	var vm = this;
	
		var studentId = $state.params.id;
		vm.params = $state.params;
		vm.courseId = $state.params.course;
		vm.courseTraineeId = $state.params.courseTraineeId;
		vm.studentInfo = viewModel.studentInfo;
		vm.listStudentCourse = viewModel.listStudentCourse;
		
		vm.resetPassword = function(){
			bootbox.confirm("Are you sure want to reset student password? <br/> Student password will reset to <strong class='text-danger'>" + $scope.defaultPassword + "</strong>.", function(result){
				if(result){
					var params = {
						actionUser: authData.userId,
						studentId: studentId,
						newPassword: $scope.defaultPassword
					};
					
					studentService.resetStudentPassword(params).then(function(res){
						if (res.data.id == 1) {
							notificationService.success(res.data.message);
				        } 
						else {
							notificationService.error(res.data.message);
				        }
					});
				}
			});
		};
		
		vm.changeToCourse = function(item){			
			vm.params.course = item.courseId;
			vm.params.courseTraineeId = item.courseTraineeId;
			
			$state.go('.', vm.params, { reload: true });
		};
    	
    }]);
})();