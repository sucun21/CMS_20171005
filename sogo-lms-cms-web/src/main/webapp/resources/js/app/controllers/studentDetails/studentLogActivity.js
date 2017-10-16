function studentLogActivityCtrl($scope, $rootScope, $state, $q, dataService) {	
	var vm = this;
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	
	var getStudentActivityLog = function(){
		var deferred = $q.defer();
		var params = {
			studentId: studentId,
			courseTraineeId: vm.courseTraineeId
		};
		var promise = dataService.getStudentActivityLog(params);
		promise.then(function(res){
			vm.listActivityLog = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	var getAllCommentType = function(){
		var deferred = $q.defer();
		var promise = dataService.getAllCommentType();
		promise.then(function(res){
			vm.listCommentType = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	$q.all([
		getStudentActivityLog(),
		getAllCommentType()
	]).then(function(){
		
	});
	
	vm.onChangeCommentType = function(){
		if(vm.newActivityLog.commentTypeId){
			
			var promise = dataService.getAllCommentResult(vm.newActivityLog.commentTypeId);
			promise.then(function(res){
				vm.listCommentResult = res.data;
			});
		}
		else{
			vm.listCommentResult = [];
		}
	};
	
	vm.addActivityLog = function(){
		if (vm.addActivityLogForm.$valid) {
			var params = angular.extend(vm.newActivityLog, {
				trainerId: $scope.sessionUserId,
				courseTraineeId: vm.courseTraineeId,
				studentId: studentId
			});
			var promise = dataService.addActivityLog(params);
			
			promise.then(function(res){
				if(res.data.id != -1){
					$scope.notifyService.success(res.data.message);
					
					var paramsReload = {
						studentId: studentId,
						courseTraineeId: vm.courseTraineeId
					};
					
					vm.newActivityLog.commentContent = '';
					
					var promiseReload = dataService.getStudentActivityLog(paramsReload);
					promiseReload.then(function(res){
						vm.listActivityLog = res.data;
					});
				}
				else{
					$scope.notifyService.error(res.data.message);
				}
			});
		}
		else{
			angular.forEach(vm.addActivityLogForm.$error, function(field) {
				angular.forEach(field, function(errorField) {
					errorField.$setDirty();
				})
			});
		}
	};
};

studentLogActivityCtrl.$inject = ['$scope', '$rootScope', '$state', '$q', 'dataService'];

app.controller('studentLogActivityCtrl', studentLogActivityCtrl);