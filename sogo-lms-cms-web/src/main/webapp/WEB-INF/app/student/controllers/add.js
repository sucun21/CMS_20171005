(function () {
    angular.module('app').controller('Student.Add', ['$scope', '$rootScope', '$state', '$q', '$timeout', 'progressService', 'notificationService', 'studentService', 'viewModel',
    	function ($scope, $rootScope, $state, $q, $timeout, progressService, notificationService, studentService, viewModel) {
    	var vm = this;
    	
    	vm.isAttemptSubmit = false;
    	vm.listCenter = viewModel.listCenter;
    	vm.listCourse = viewModel.listCourse;
    	
    	vm.StudentInfo = {};
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtFirstName')).focus();
    	});
    	
    	vm.onChangeCenterOrCourse = function() {
    		if (vm.StudentInfo.courseId && vm.StudentInfo.centerId) {
    			var params = {
    				centerId : vm.StudentInfo.centerId,
    				courseId : vm.StudentInfo.courseId
    			};
    			progressService.start();
    			studentService.getIncomingIntroClass(params).then(function(res) {    				
    				vm.listIntroClass = res.data;
    				progressService.complete();
    			});
    			
//    			studentService.getIncomingFirstClass(params).then(function(res) {
//    				vm.listIncomingFirstClass = res.data;
//    			});
    			
    		} else {
    			vm.listIntroClass = [];
    			vm.listIncomingFirstClass = [];
    		}
    	};
    	
    	vm.onChangeIntroductionClass = function(){
    		
    		if(vm.StudentInfo.introClassId)
    		{
	    		var chooseIntroClass = Enumerable.From(vm.listIntroClass).First("$.classId == " + vm.StudentInfo.introClassId);	    		
	    		var params = {
					centerId : vm.StudentInfo.centerId,
					courseId : vm.StudentInfo.courseId,
					introClassTime: chooseIntroClass.studyDateTime
	    		};
	    		progressService.start();
	    		studentService.getIncomingNormalClass(params).then(function(res) {
					progressService.complete();
					vm.listNormalClass = res.data;
				});
    		}
    		else{
    			vm.listNormalClass = [];
    		}
    	};
    	
    	vm.generateIntroClassName = function(introClass){
    		return $rootScope.convertToShortDatetimeVN(introClass.studyDateTime) + ' - ' + introClass.centerName  + ' - ' +  introClass.trainerName + ' (' + introClass.limitUser + ')';
    	};
    	
    	vm.generateNormalClassName = function(introClass){
    		return $rootScope.convertToShortDatetimeVN(introClass.studyDateTime) + ' - ' + introClass.centerName  + ' - ' +  introClass.trainerName + ' (' + introClass.limitUser + ')';
    	};
    	
    	vm.addNewStudent = function() {
    		
    		console.log(vm.StudentInfo);
    		
    		vm.isAttemptSubmit = true;
    		if (vm.addNewStudentForm.$valid) {
    			vm.StudentInfo.createdBy = $scope.sessionInfo.userId;
    			vm.StudentInfo.avatarUrl = vm.selectImageDisplay;
    			progressService.start();
    			 studentService.addNewStudent(vm.StudentInfo).then(function(res) {
    				 if (res.data.id == 1) {
    		            notificationService.success(res.data.message);
    		            $state.go($state.$current.parent, $state.params, { reload: true });
    		            
    		        } 
    				else {
    					progressService.complete();
    					notificationService.error(res.data.message);
//    					$scope.notifyService.error(res.data.message);
    		        }
    			});
    		} 
    	};
    	
    }]);
})();