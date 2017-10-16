(function () {
    angular.module('app').controller('ClassSchedule.ClassInfo', ['$scope', '$state', 'progressService', 'viewModel', 'authData', 'classInfoService', 'notificationService',
        function ($scope, $state, progressService, viewModel, authData, classInfoService, notificationService) {
	    	var vm = this;
	    	
	    	var classId = $state.params.id;
	    	vm.listStudent = viewModel.listStudent;
	    	vm.classInfo = viewModel.classInfo;
	    	vm.viewMode = $state.params.view;
	    	vm.listQuizReport = viewModel.listQuizReport;
	    	vm.listQuizReportDetail = viewModel.listQuizReportDetail;
	    	vm.QuizReportDetailView = 1;
	    	vm.isMyClass = vm.classInfo.teacherId == authData.userId;
	    	
	    	vm.getViewTemplate = function(){
	    		var res = '';
	    		switch(vm.viewMode){
		    		case 'student':
		    			res = '/app/classSchedule/views/_listAttendant.html';
		    		break;
		    		case 'report':
		    			res = '/app/classSchedule/views/_quizReport.html';
		    		break;
		    		case 'report-detail':
		    			res = '/app/classSchedule/views/_quizReportDetail.html'
		    		break;
	    		}
	    		
	    		return res;
	    	};
	    	
	    	vm.checkAttendanceStudent = function(student){
	    		
	    		var params = {
    				classId: classId,
    				trainerId: authData.userId,
    				studentId: student.userId,
    				status: student.isAttended
	    		};
	    		
	    		classInfoService.updateStudentAttendance(params).then(function(res){
	    			if(res.data.id != 1){
	    				notificationService.error(res.data.message);
	    				student.isAttended = !student.isAttended;
	    			}
	    		});
	    	};
	    	
	    	vm.isAllStudentAttendanceCheck = function(){
	    		return vm.listStudent && Enumerable.From(vm.listStudent).Count(function(x) { return x.isAttended == null; }) == 0;
	    	};
	    	
	    	vm.updateClassAttendanceCheck = function(){
	    		
	    		var params = {
    				classId: classId,
    				trainerId: authData.userId
	    		};
	    		
	    		classInfoService.updateClassAttendanceCheck(params).then(function(res){
	    			if(res.data.id == 1){
	    				notificationService.success(res.data.message);
	    			}
	    			else{
	    				notificationService.error(res.data.message);
	    			}
	    		});
	    	};
	    	
	    	vm.initChangeTrainer = function(){
	    		vm.isUpdateTrainer = true;
	    		if(vm.listTrainer.length == 0){
	    			//get list trainer
	    			var promise = dataService.getAllTrainer();
	    			promise.then(function(res){
	    				vm.listTrainer = res.data;
	    			});
	    		}
	    	};
	    	
	    	vm.changeClassTrainer = function(){
	    		
	    		if(currentTrainerId != vm.classInfo.teacherId)
	    		{
	    			//có thay đổi mới cập nhật
	    			var params = {
	    					isAdmin: $scope.isAdmin,
	    					classId: classId,
	    					trainerId: $scope.sessionUserId,
	    					newTrainerId: vm.classInfo.teacherId
	    			};
	    			var promise = dataService.changeClassTrainer(params);
	    			promise.then(function(res){
	    				if(res.data.id == 1){
	    					$scope.notifyService.success(res.data.message);
	    					currentTrainerId = vm.classInfo.teacherId;
	    					vm.classInfo.teacherName = Enumerable.From(vm.listTrainer).First(function(x) { return x.userId == currentTrainerId;}).fullName;
	    					vm.isUpdateTrainer = false;
	    				}
	    				else{
	    					$scope.notifyService.error(res.data.message);
	    				}
	    			});
	    		}
	    		else{
	    			vm.isUpdateTrainer = false;
	    		}
	    	};
	    	
	    	vm.cancelChangeTrainer = function(){
	    		vm.isUpdateTrainer = false;
	    	};
	    	
	    	vm.initChangeClassTime = function(){
	    		vm.isUpdateClassTime = true;
	    		$timeout(function(){
	    			$('#dtClassTime').datetimepicker({
	    	            useCurrent: false,
	    	            format: 'DD/MM/YYYY HH:mm',
	    	            minuteStepping: 15
	    	        });
	    			
	    			$('#dtClassTime').on("dp.change", function(e) {
	    				vm.classInfo.studyDateTime = e.date ? moment(e.date).valueOf() : '';
	                });
	    			
	    		}, 1);
	    	};
	    	
	    	vm.changeClassTime = function(){
	    		if(vm.classInfo.studyDateTime == '')
	    		{
	    			$scope.notifyService.error('Class time can not be blank');
	    		}
	    		else if(currentClassTime != vm.classInfo.studyDateTime){
	    			//có thay đổi mới cập nhật
	    			var params = {
	    					isAdmin: $scope.isAdmin,
	    					classId: classId,
	    					trainerId: $scope.sessionUserId,
	    					newClassTime: vm.classInfo.studyDateTime
	    			};
	    			var promise = dataService.changeClassTime(params);
	    			promise.then(function(res){
	    				if(res.data.id == 1){
	    					$scope.notifyService.success(res.data.message);
	    					currentTrainerId = vm.classInfo.studyDateTime;
	    					vm.isUpdateClassTime = false;
	    				}
	    				else{
	    					$scope.notifyService.error(res.data.message);
	    				}
	    			});
	    		}
	    		else{
	    			vm.isUpdateClassTime = false;
	    		}
	    	};
	    	
	    	vm.cancelChangeClassTime = function(){
	    		vm.isUpdateClassTime = false;
	    	};
	    	
	    	var getQuizReport = function(){
	    		var deferred = $q.defer();
	    		var promise = dataService.getQuizReport(classId);
	    		promise.then(function(res){
	    			vm.listQuizReport = res.data;
	    			deferred.resolve();
	    		});
	    		
	    		return deferred.promise;
	    	};
	    	
	    	vm.changeTab = function(tabId){
	    		vm.currentTab = tabId;
	    		switch(tabId){
	    		case 2:
	    			{
	    				if(!vm.listQuizReport){
	    					$q.when(getQuizReport())
	    					  .then(function(){
	    						  
	    					  });
	    				}
	    			}
	    			break;
	    		}
	    	};
	    	
	    	var getQuizReportDetail = function(){
	    		var deferred = $q.defer();
	    		var params = {
	    			classId: classId,
	    			activityId: vm.currentReportDetailId
	    		};
	    		var promise = dataService.getQuizReportDetail(params);
	    		promise.then(function(res){
	    			vm.listQuizReportDetail = res.data;
	    			deferred.resolve();
	    		});
	    		
	    		return deferred.promise;
	    	};
	    	
	    	vm.viewReportDetail = function(activityId){
	    		vm.currentTab = 3;
	    		if(vm.currentReportDetailId != activityId) {
	    			vm.currentReportDetailId = activityId;
	    			$q.when(getQuizReportDetail())
	    			  .then(function(){
	    				  vm.QuizReportDetailView = vm.QuizReportDetailView ? vm.QuizReportDetailView : 1;
	    			  });
	    		}
	    	};
	    	
	    	vm.getQuizReportStudentDetail = function(studentId){
	    		return Enumerable.From(vm.listQuizReportDetail.listStudentDetail).Where(function(x) {return x.userId == studentId; }).ToArray();
	    	};
	    	
	    	vm.calculateQuestionPercent = function(questionId){
	    		var countRightAnswer = Enumerable.From(vm.listQuizReportDetail.listStudentDetail).Count(function(x) {return x.questionId == questionId && x.isTraineeAnswerRight; });
	    		var totalStudent = vm.listQuizReportDetail.listStudent.length;
	    		
	    		var result = Number((countRightAnswer / totalStudent) * 100);
	    		
	    		return Math.round(result) !== result ? result.toFixed(2) : result;
	    	};
	    	
	    	vm.calculateStudentRightPercent = function(totalAnswerRight){
	    		    		
	    		var result = ((totalAnswerRight / vm.listQuizReportDetail.reportSummary.numberOfQuestion) * 100);
	    		
	    		return Math.round(result) !== result ?  result.toFixed(2) : result;
	    	};
	    	
	    	vm.getTraineeAnswerRightByAnswer = function(studentId, questionId){
	    		return Enumerable.From(vm.listQuizReportDetail.listStudentDetail)
	    						 .First(function(x){ return x.userId == studentId && x.questionId == questionId; }).isTraineeAnswerRight ? '1' : '0';
	    	};
	    	
    	}]);
})();