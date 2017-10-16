(function () {
    angular.module('app').controller('Student.Detail.LogActivity', ['$scope', '$q', '$state', 'studentService', 'notificationService', 'viewModelSub', 'authData',
    	function ($scope, $q, $state, studentService, notificationService, viewModelSub, authData) {
    	var vm = this;
    	
    	var studentId = $state.params.id;
    	vm.courseId = $state.params.course;
    	vm.courseTraineeId = $state.params.courseTraineeId;
    	vm.listActivityLog = viewModelSub.listActivityLog;
    	vm.listCommentType = viewModelSub.listCommentType;
    	vm.isAttemptSubmit = false;
    	
    	vm.onChangeCommentType = function(){
    		if(vm.newActivityLog.commentTypeId){
    			
    			studentService.getAllCommentResult(vm.newActivityLog.commentTypeId).then(function(res){
    				vm.listCommentResult = res.data;
    			});
    		}
    		else{
    			vm.listCommentResult = [];
    		}
    		
    		vm.newActivityLog.commentResultId = null;
    	};
    	
    	vm.resetForm = function(){
    		vm.isAttemptSubmit = false;
    		vm.newActivityLog = {};
    	};
    	
    	vm.addActivityLog = function(){
    		vm.isAttemptSubmit = true;
    		if (vm.addActivityLogForm.$valid) {
    			var params = angular.extend(vm.newActivityLog, {
    				trainerId: authData.userId,
    				courseTraineeId: vm.courseTraineeId,
    				studentId: studentId
    			});
    			
    			studentService.addActivityLog(params).then(function(res){
    				if(res.data.id != -1){
    					notificationService.success(res.data.message);
    					$state.reload();
    				}
    				else{
    					notificationService.error(res.data.message);
    				}
    			});
    		}
    	};
    	
    }]);
})();