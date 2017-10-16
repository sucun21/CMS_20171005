(function () {
    angular.module('app').controller('GroupClass.Add', ['$scope', '$state', '$timeout', 'progressService', 'groupClassService', 'notificationService', 'viewModel',
    	function ($scope, $state, $timeout, progressService, groupClassService, notificationService, viewModel) {
    	var vm = this;
    	
    	$timeout(function(){
    		angular.element(document.querySelector('#txtEmail')).focus();
    	});
    	
    	vm.isSubmitAttempt = false;
        
    	vm.params = $state.params;
    	
    	vm.listCourse = viewModel.listCourse;
    	vm.listCenter = viewModel.listCenter;	
    	vm.listTrainer = viewModel.listTrainer;
    	vm.listClassType = viewModel.listClassType;
    	vm.listHoliday = viewModel.listHoliday;
    	
    	/*remove first item*/
    	vm.listCourse.splice(0, 1);
    	vm.listCenter.splice(0, 1);
    	vm.listTrainer.splice(0, 1);
    	vm.listClassType.splice(0, 1);
    	
    	vm.listWeekDay = [
    		{ value: '0', name: 'Sunday' },
    		{ value: '1', name: 'Monday' },
    		{ value: '2', name: 'Tuesday' },
    		{ value: '3', name: 'Webnesday' },
    		{ value: '4', name: 'Thursday' },
    		{ value: '5', name: 'Friday' },
    		{ value: '6', name: 'Saturday' }
    	];
    	
//    	vm.listCourse.unshift({
//    		courseId: '',
//    		courseTitle: 'Choose course'
//    	});
//    	
//    	vm.listCenter.unshift({
//    		centerId: '',
//    		centerName: 'Choose center'
//    	});
//    	
//    	vm.listTrainer.unshift({
//    		userId: '',
//    		fullName: 'By teacher'
//    	});
//    	
//    	vm.listClassType.unshift({
//    		classTypeId: '',
//    		classTypeName: 'Choose class type'
//    	});
    	
    	vm.newGroupClassInfo = {
    		startDayInWeek: '',
    		centerId: '',
    		courseId: '',
    		trainerId: '',
    		classTypeId: '',
    		unitStartId: ''
    	};
    	
//    	vm.listCourseUnit = [
//    		{
//    			unitId: '',
//    			unitTitle: 'Choose start unit'
//    		}
//    	];
    	
    	vm.listCourseUnit = [];
    	vm.daysOfWeekDisabled = [];
    	vm.listClassDate = [];
    	
//    	$scope.pageLoaded = true;
//    	progressService.complete();
    		
    	vm.addNewGroupClass = function(){    		
    		vm.isSubmitAttempt = true;
    		
    		if (vm.addNewGroupClassForm.$valid) {
    			
    			vm.newGroupClassInfo.createdBy = $scope.sessionUserId;
    			
    			groupClassService.addNewGroupClass(vm.newGroupClassInfo).then(function(res){
    				if (res.data.id == 1) {
    					notificationService.success(res.data.message);
    					$state.transitionTo($state.$current.parent, $state.params, { reload: true });
    		        } 
    				else {
    					notificationService.error(res.data.message);
    		        }
    			});
    			
    		} else {
    			angular.forEach(vm.addNewGroupClassForm.$error, function(field) {
    				angular.forEach(field, function(errorField) {
    					errorField.$setDirty();
    				})
    			});
    		}
    	};
    	
    	vm.onSelectCourseOrClassType = function(){
    		vm.newGroupClassInfo.unitStartId = '';
    		vm.listCourseUnit = [];
    		if(vm.newGroupClassInfo.courseId && vm.newGroupClassInfo.classTypeId)
    		{
    			var params = {
    				courseId: vm.newGroupClassInfo.courseId,
    				classTypeId: vm.newGroupClassInfo.classTypeId
    			};
    			
    			progressService.start();
    			groupClassService.getUnitByCourseAndClassType(params).then(function(res){
    				if(res.data && res.data.length > 0){
    					vm.listCourseUnit = vm.listCourseUnit.concat(res.data);
    					vm.getListClassDate();
    				}
    				progressService.complete();
    			});
    		}
    	};
    	
    	vm.onSelectClassDay = function(){
    		if(vm.newGroupClassInfo.startDayInWeek != '' && !isNaN(vm.newGroupClassInfo.startDayInWeek))
    		{
    			var selectedDay = Number(vm.newGroupClassInfo.startDayInWeek);
    			
    			vm.daysOfWeekDisabled = [0, 1, 2, 3, 4, 5, 6];
    			
    			var index = vm.daysOfWeekDisabled.indexOf(selectedDay);
    			if (index > -1) {
    				vm.daysOfWeekDisabled.splice(index, 1);
    			}
    			
    			var selectedDateWeekDay = moment(new Date(vm.newGroupClassInfo.startDate)).weekday();

    			if(selectedDateWeekDay != selectedDay){
    				vm.newGroupClassInfo.startDate = undefined;
    			}
    		}
    		else{
    			vm.daysOfWeekDisabled = [];
    		}
    	};
    	
    	vm.onSelectStartDate = function(weekDay){
    		$timeout(function(){
    			vm.newGroupClassInfo.startDayInWeek = weekDay.toString();
    			vm.getListClassDate();
    		});
    	};
    	
    	vm.getListClassDate = function(){
    		
    		var result = [];
    				
    		var listUnit = Enumerable.From(vm.listCourseUnit)
    								 .Where(function(x){ return x.unitId != '';}).ToArray();
    		
    		if(vm.newGroupClassInfo.startDate
    			&& listUnit && listUnit.length > 0 && vm.newGroupClassInfo.unitStartId){
    			
    			var index = 0;
    			
    			var sortedList = [];
    			var revertList = [];
    			
    			var selectedUnit = Enumerable.From(listUnit).First(function(x) { return x.unitId == vm.newGroupClassInfo.unitStartId; }); 
    			
    			var selectedIndex = listUnit.indexOf(selectedUnit);
    						
    			
    			
    			angular.forEach(listUnit, function(item){
    				var itemIndex = listUnit.indexOf(item);
    				
    				if(itemIndex >= selectedIndex){
    					sortedList.push(item);
    				}
    				else{
    					revertList.push(item);
    				}
    			});
    			
    			sortedList = sortedList.concat(revertList);
    									
    			angular.forEach(sortedList, function(value){
    				
    				var classDate = moment(vm.newGroupClassInfo.startDate).add(index * 7, 'days').format('DD-MM-YYYY');
    				
    				var isHoliday = Enumerable.From(vm.listHoliday)
    										  .Count(function(x){ return moment(x.holidayDate).format('DD-MM-YYYY') == classDate; }) > 0;
    				
    				while(isHoliday){
    					index++;
    					
    					result.push({
    						unitTitle: '',
    						date: classDate,
    						isHoliday: true
    					});
    					
    					classDate = moment(vm.newGroupClassInfo.startDate).add(index * 7, 'days').format('DD-MM-YYYY');
    					isHoliday = Enumerable.From(vm.listHoliday)
    					  					  .Count(function(x){ return moment(x.holidayDate).format('DD-MM-YYYY') == classDate; }) > 0;
    				}
    				
    				result.push({
    					unitTitle: value.unitTitle,
    					date: classDate,
    					isHoliday: false
    				});
    				
    				index++;
    			});
    		}
    		
    		vm.listClassDate = result;
    	};
    	
    	vm.getStudyDate = function(index){
    		if(vm.newGroupClassInfo.startDate){
    			return moment(vm.newGroupClassInfo.startDate).add(index * 7, 'days').format('DD-MM-YYYY');
    		}
    		else{
    			return 'N/A';
    		}
    	};
    	
    	vm.getStudyTime = function(){
    		if(vm.newGroupClassInfo.startTime){
    			return moment(vm.newGroupClassInfo.startTime).format('HH:mm');
    		}
    		
    		return '';
    	};
        
    }]);
})();