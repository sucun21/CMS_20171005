(function () {
    angular.module('app').controller('Student.Detail.Class', ['$scope', '$state', 'studentService', 'notificationService', 'viewModelSub', 'authData',
    	function ($scope, $state, studentService, notificationService, viewModelSub, authData) {
    	var vm = this;
    	
    	var studentId = $state.params.id;
    	vm.listStudentClass = viewModelSub.listStudentClass;
    	vm.courseTraineeId = $state.params.courseTraineeId;
    	vm.showPopupRetake = false;
    	
    	vm.retakeClass = function(classInfo){
    		studentService.getOfflineClassForRetake(classInfo.unitId).then(function(res){
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
    			vm.retakeInfo.createdBy = authData.userId;
    			
    			studentService.retakeStudentClass(vm.retakeInfo).then(function(res){
    				if(res.data.id == 1){
    					notificationService.success(res.data.message);    					
    					$state.reload();
    				}
    				else{
    					notificationService.error(res.data.message);
    				}
    			});
    			
    		}
    		else{
    			notificationService.error('Choose a class to book');
    		}
    	};
    	
    }]);
})();