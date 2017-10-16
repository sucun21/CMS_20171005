function studentDetailsCtrl($scope, $rootScope, $q, $state, dataService) {
	var vm = this;
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	vm.currentTab = 1;
	vm.listCommentType = [];
	vm.listCommentResult = [];
	vm.labActivityFilter = {
		unitId: null,
		lessonId: null
	};
	vm.currentActivityLabTab = 1;
	
	var getStudentInfo = function(){
		var deferred = $q.defer();
		var promise = dataService.getStudentInfo(studentId);
		promise.then(function(res){
			vm.studentInfo = res.data;
			deferred.resolve();
		});
		
		return deferred.promise; 
	};
	
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
	
//	var getAllCourseByStudent = function() {
//		var deferred = $q.defer();
//		var promise = dataService.getAllCourse();
//		promise.then(function(res) {
//			vm.listCourse = res.data;
//			deferred.resolve();
//		});
//
//		return deferred.promise;
//	};
	
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
		if(vm.listCommentType.length == 0){
			var deferred = $q.defer();
			var promise = dataService.getAllCommentType();
			promise.then(function(res){
				vm.listCommentType = res.data;
				deferred.resolve();
			});
			
			return deferred.promise;
		}
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
	
	var getStudentProperty = function(){
		
		vm.listStudentProperty = null;
		
		var deferred = $q.defer();
		var params = {
			lessonId: vm.labActivityFilter.lessonId,
			courseTraineeId: vm.courseTraineeId
		};
		var promise = dataService.getStudentProperty(params);
		promise.then(function(res){
			vm.listStudentProperty = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	var getStudentQuiz = function(){
		vm.listStudentOtherActivity = null;
		var deferred = $q.defer();
		var params = {
			lessonId: vm.labActivityFilter.lessonId,
			courseTraineeId: vm.courseTraineeId
		};
		var promise = dataService.getStudentQuiz(params);
		promise.then(function(res){
			vm.listStudentQuiz = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	var getStudentOtherActivity = function(){
		vm.listStudentOtherActivity = null;
		var deferred = $q.defer();
		var params = {
			lessonId: vm.labActivityFilter.lessonId,
			courseTraineeId: vm.courseTraineeId
		};
		var promise = dataService.getStudentOtherActivity(params);
		promise.then(function(res){
			vm.listStudentOtherActivity = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
//	var getAllCommentResult = function(){
//		if(vm.listCommentResult.length == 0){
//			var deferred = $q.defer();
//			var promise = dataService.getAllCommentResult();
//			promise.then(function(res){
//				vm.listCommentResult = res.data;
//				deferred.resolve();
//			});
//			
//			return deferred.promise;
//		}
//	};
	
	$scope.$watch("parentLoaded", function(parentLoaded){
		if(parentLoaded){
			$q.all([
				getStudentInfo(),
				getStudentClassInfo(),
//				getAllCourseByStudent()
			])//
			  .then(function(){
				  $scope.pageLoaded = true;
			  });
		}
	});
	
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
	
	vm.changeTab = function(tabId){
		vm.currentTab = tabId;
		switch(tabId){
			case 1:
				break;
			case 2:
				$q.all([
					getAllCommentType(),
					getStudentActivityLog()
				])
				  .then(function(){
					  
				  });
				break;
			case 3:
				
				$q.when(getStudentAllCourse())
				  .then(function(){
					  
				  });
				
				break;
			case 4:
				vm.currentActivityLabTab = 1;
				$q.when(getStudentProperty(),
						$scope.getCourseActivity(vm.courseId))
				  .then(function(){
					  
				  });
				break;
		}
	};
	
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
	
	vm.changeLabActivityTab = function(tabId){
		vm.currentActivityLabTab = tabId;
		switch(tabId){
			case 1:
				$q.when(getStudentProperty())
				  .then(function(){
					  
				  });
				break;
			case 2:
				$q.when(getStudentQuiz())
				  .then(function(){
					  
				  });
				break;
			case 3:
				$q.when(getStudentOtherActivity())
				  .then(function(){
					  
				  });
				break;
		};
	};
	
	var listCourseUnit = [];
	var listlessonByUnit = [];
	var currentUnitId = null;
	
	vm.getUnitInCourse = function(){
		if($scope.listCourseActivity[vm.courseId] && listCourseUnit.length == 0){
			
			listCourseUnit = Enumerable.From($scope.listCourseActivity[vm.courseId])
			 .Distinct('$.unitId')
			 .Select('{unitId: $.unitId, unitTitle: $.unitTitle}')
			 .ToArray();
		}
		return listCourseUnit;
	};
	
	vm.getLessonByUnit = function(unitId){
		if($scope.listCourseActivity[vm.courseId] && unitId != currentUnitId){
			
			currentUnitId = unitId;
			
			listlessonByUnit = Enumerable.From($scope.listCourseActivity[vm.courseId])
			 .Distinct('$.lessonId')
			 .Where(function(x){ return x.unitId == unitId; })
			 .Select('{lessonId: $.lessonId, lessonTitle: $.lessonTitle}')
			 .ToArray();
		}
		return listlessonByUnit;
	};
	
	vm.reloadLabActivity = function(){
		var funcArr = [];
		switch(vm.currentActivityLabTab){
			case 1:
				funcArr.push(getStudentProperty());
				break;
			case 2:
				funcArr.push(getStudentQuiz());
				break;
			case 3:
				funcArr.push(getStudentOtherActivity());
				break;
		};
		
		$q.all(funcArr)
		  .then(function(){
			  
		  });
	};
	
	vm.getTotalWrongAnswer = function(listQuizDetail){
		return Enumerable.From(listQuizDetail).Count(function(x) { return !x.isTraineeAnswerRight; });
	};
	
	vm.getTotalRightAnswer = function(listQuizDetail){
		return Enumerable.From(listQuizDetail).Count(function(x) { return x.isTraineeAnswerRight; });
	};
	
	vm.getTotalQuestion = function(listQuizDetail){
		return listQuizDetail.length;
	};
	
	vm.showQuizDetail = function(quiz){
		quiz.isShowDetail = quiz.isShowDetail == undefined ? false : quiz.isShowDetail;
		 quiz.isShowDetail = !quiz.isShowDetail;
	}
	
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

studentDetailsCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', 'dataService'];

app.controller('studentDetailsCtrl', studentDetailsCtrl);