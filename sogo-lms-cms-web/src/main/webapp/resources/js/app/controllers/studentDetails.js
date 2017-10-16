function studentDetailsCtrl($scope, $rootScope, $q, $state, dataService) {
	var vm = this;
	
	vm.tab = $state.params.tab;
	
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	
	var getStudentInfo = function(){
		var deferred = $q.defer();
		var promise = dataService.getStudentInfo(studentId);
		promise.then(function(res){
			vm.studentInfo = res.data;
			deferred.resolve();
		});
		
		return deferred.promise; 
	};
	
	var getStudentAllCourse = function(){
		var deferred = $q.defer();
		var promise = dataService.getStudentAllCourse(studentId);
		promise.then(function(res){
			vm.listStudentCourse = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
//	var getAllCourseByStudent = function() {
//		
//		var deferred = $q.defer();
//		var promise = dataService.getStudentAllCourse(studentId);
//		promise.then(function(res){
//			vm.listCourse = res.data;
//			deferred.resolve();
//		});
//		
//		return deferred.promise;
//	};
	
	$scope.$watch("parentLoaded", function(parentLoaded){
		if(parentLoaded){
			$q.all([
				getStudentInfo(),
				getStudentAllCourse()
			])//
			  .then(function(){
				  $scope.pageLoaded = true;
			  });
		}
	});
	
	
	
	vm.getTemplate = function(){
		var result = '';
		switch($state.params.tab){
			case 'class':
				result = '/views/student/details/_listClass.html';
				break;
			case 'logActivity':
				result = '/views/student/details/_logActivity.html';
				break;
			case 'labActivity':
				result = '/views/student/details/_labActivity.html';
				break;
			case 'contract':
				result = '/views/student/details/_contract.html';
				break;
		}
		
		return result;
	};
	
	vm.changeTab = function(tabName){
		$state.params.tab = tabName;
		vm.tab = tabName; 
		
		if(tabName == 'labActivity'){
			$state.params.st = $state.params.st ? $state.params.st : 'property';
		}
		
		$state.transitionTo($state.current, $state.params, {
            reload: false,
            inherit: false,
            notify: true
        });
	};
	
	vm.resetPassword = function(){
		bootbox.confirm("Are you sure want to reset student password? Student password will reset to " + $scope.defaultPassword, function(result){
			if(result){
				var params = {
					actionUser: $scope.sessionUserId,
					studentId: studentId,
					newPassword: $scope.defaultPassword
				};
				
				var promise = dataService.resetStudentPassword(params);
				promise.then(function(res){
					if (res.data.id == 1) {
			            $scope.notifyService.success(res.data.message);
			        } 
					else {
						$scope.notifyService.error(res.data.message);
			        }
				});
			}
		});
	};
	
//	
//	var getStudentAllCourse = function(){
//		var deferred = $q.defer();
//		var promise = dataService.getStudentAllCourse(studentId);
//		promise.then(function(res){
//			vm.listStudentCourse = res.data;
//			deferred.resolve();
//		});
//		
//		return deferred.promise;
//	};
//	

//	

//	
////	var getAllCommentResult = function(){
////		if(vm.listCommentResult.length == 0){
////			var deferred = $q.defer();
////			var promise = dataService.getAllCommentResult();
////			promise.then(function(res){
////				vm.listCommentResult = res.data;
////				deferred.resolve();
////			});
////			
////			return deferred.promise;
////		}
////	};
//	
//	$scope.$watch("parentLoaded", function(parentLoaded){
//		if(parentLoaded){
//			$q.all([
//				getStudentInfo(),
//				getStudentClassInfo(),
////				getAllCourseByStudent()
//			])//
//			  .then(function(){
//				  $scope.pageLoaded = true;
//			  });
//		}
//	});
//	
//	vm.resetPassword = function(){
//		bootbox.confirm("Are you sure want to reset student password? Student password will reset to " + $scope.defaultPassword, function(result){
//			if(result){
//				var params = {
//					actionUser: $scope.sessionUserId,
//					studentId: studentId,
//					newPassword: $scope.defaultPassword
//				};
//				
//				var promise = dataService.resetStudentPassword(params);
//				promise.then(function(res){
//					if (res.data.id == 1) {
//			            $scope.notifyService.success(res.data.message);
//			        } 
//					else {
//						$scope.notifyService.error(res.data.message);
//			        }
//				});
//			}
//		});
//	};
//	
//	
////	vm.changeTab = function(tabId){
////		vm.currentTab = tabId;
////		switch(tabId){
////			case 1:
////				break;
////			case 2:
////				$q.all([
////					getAllCommentType(),
////					getStudentActivityLog()
////				])
////				  .then(function(){
////					  
////				  });
////				break;
////			case 3:
////				
////				$q.when(getStudentAllCourse())
////				  .then(function(){
////					  
////				  });
////				
////				break;
////			case 4:
////				vm.currentActivityLabTab = 1;
////				$q.when(getStudentProperty(),
////						$scope.getCourseActivity(vm.courseId))
////				  .then(function(){
////					  
////				  });
////				break;
////		}
////	};
//	

//	

//	
//	vm.reloadLabActivity = function(){
//		var funcArr = [];
//		switch(vm.currentActivityLabTab){
//			case 1:
//				funcArr.push(getStudentProperty());
//				break;
//			case 2:
//				funcArr.push(getStudentQuiz());
//				break;
//			case 3:
//				funcArr.push(getStudentOtherActivity());
//				break;
//		};
//		
//		$q.all(funcArr)
//		  .then(function(){
//			  
//		  });
//	};
//	

//	
};

studentDetailsCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', 'dataService'];

app.controller('studentDetailsCtrl', studentDetailsCtrl);