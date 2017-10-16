(function () {
    angular.module('app').controller('Student.Detail.Contract', ['$scope', '$q', '$state', 'studentService', 'notificationService', 'viewModelSub', 'authData',
    	function ($scope, $q, $state, studentService, notificationService, viewModelSub, authData) {
    	
    	var vm = this;
    	
    	vm.listStudentCourse = viewModelSub.listStudentCourse;
    	
    	/*update course status*/
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
    				studentService.updateStudentCourseStatus(params).then(function(res){
    					if(res.data.id == 1){
    						notificationService.success(res.data.message);
    					}
    					else{
    						course.isActive = !course.isActive;
    						notificationService.error(res.data.message);
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
    	
    }]);
})();