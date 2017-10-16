function addStudentCtrl($scope, $rootScope, $state, $q, $timeout, dataService, progressService) {
	var vm = this;
	vm.StudentInfo = {};
	$scope.$watch('parentLoaded', function(parentLoaded) {
		if (parentLoaded) {
			progressService.complete();
			$q.all([
				getAllCenter(), 
				getAllCourse()
			]).then(function() {
				vm.minEndDate = $scope.currentDate;
				$scope.pageLoaded = true;
				
	            $timeout(function() {
	            	
      			  $('.select2').select2();
    			  $('.select2-nosearch').select2({ minimumResultsForSearch: -1 });
	            	
//                    $('.datepicker').datetimepicker({
//                        useCurrent: false,
//                        format: 'DD/MM/YYYY',
//                        pickTime: false
//                    });
//                    
//                    $('#dtDOB').data("DateTimePicker").setMaxDate(new Date());
//
//                    $(".datepicker").on("dp.change", function(e) {
//                        if (e.target.id == 'dtDOB') {
//                            vm.StudentInfo.dateOfBirth = e.date ? moment(e.date).valueOf() : '';
//                        }
//                        else if(e.target.id == 'dtStartDate'){
//                        	vm.StudentInfo.startDate = e.date ? moment(e.date).valueOf() : '';
//                        	$('#dtEndDate').data("DateTimePicker").setMinDate(e.date);
//                        }
//                        else {
//                        	vm.StudentInfo.endDate = e.date ? moment(e.date).valueOf() : '';
//                        	$('#dtStartDate').data("DateTimePicker").setMaxDate(e.date);
//                        }
//                    });

                }, 1);
	        });
		}
	});

	var getAllCenter = function() {
		var deferred = $q.defer();
		var promise = dataService.getAllCenter();
		promise.then(function(res) {
			vm.listCenter = res.data;
			deferred.resolve();
		});

		return deferred.promise;
	};

	var getAllCourse = function() {
		var deferred = $q.defer();
		var promise = dataService.getAllCourse();
		promise.then(function(res) {
			vm.listCourse = res.data;
			deferred.resolve();
		});

		return deferred.promise;
	};

	vm.addNewStudent = function() {
		
		console.log(vm.addNewStudentForm.$error);
		
		if (vm.addNewStudentForm.$valid) {
			vm.StudentInfo.createdBy = $scope.sessionUserId;
			vm.StudentInfo.avatarUrl = vm.selectImageDisplay;
			 var promise = dataService.addNewStudent(vm.StudentInfo);
			 promise.then(function(res) {
				 if (res.data.id == 1) {
		            $scope.notifyService.success(res.data.message);
		            $timeout(function() {
		                $state.transitionTo($state.$current.parent, $state.params, {
		                    reload: true,
		                    inherit: false,
		                    notify: true
		                });
		            }, 1500);
		        } 
				else {
					$scope.notifyService.error(res.data.message);
		        }
			});
		} else {
			angular.forEach(vm.addNewStudentForm.$error, function(field) {
				angular.forEach(field, function(errorField) {
					errorField.$setDirty();
				})
			});
		}
	};

	vm.OnChangeCenterOrCourse = function() {
		if (vm.StudentInfo.courseId && vm.StudentInfo.centerId) {
			var params = {
				centerId : vm.StudentInfo.centerId,
				courseId : vm.StudentInfo.courseId
			};
			var promise = dataService.getIntroClassByCenterAndCourse(params);
			promise.then(function(res) {
				vm.listIntroClass = res.data;
			});
			
			var loadIncomingFirstClass = dataService.getIncomingFirstClass(params);
			loadIncomingFirstClass.then(function(res) {
				vm.listIncomingFirstClass = res.data;
			});
			
		} else {
			vm.listIntroClass = [];
			vm.listIncomingFirstClass = [];
		}
	};
	
	$scope.$watch('selectImage', function(selectImage){
		if(selectImage){
			var reader = new FileReader();

            reader.onload = function (e) {
            	$scope.$apply(function(){
            		vm.selectImageDisplay = e.target.result;
                });
            };

            reader.readAsDataURL(selectImage);
		}
	});
	
    $rootScope.getBase64FromFile = function(file) {
 	   var reader = new FileReader();
 	   reader.readAsDataURL(file);
 	   reader.onload = function () {
 	     console.log(reader.result);
 	   };
 	   reader.onerror = function (error) {
 	     console.log('Error: ', error);
 	   };
 	};
	
	vm.generateIntroClassName = function(introClass){
		return $rootScope.convertToShortDatetimeVN(introClass.studyDateTime) + ' - ' + introClass.centerName  + ' - ' +  introClass.trainerName + ' (' + introClass.limitUser + ')';
	};
	
	vm.generateIncomingFirstClassName = function(incomingClass){
		return incomingClass.groupClassName + ' - ' + incomingClass.centerName  + ' - ' +  incomingClass.trainerName + ' - ' + $rootScope.convertToShortDatetimeVN(incomingClass.studyDateTime);
	};
	
	vm.onSelectStartDate = function(date){
		vm.minEndDate = moment(date).format('DD/MM/YYYY');
	};
	
	vm.onSelectEndDate = function(date){
		vm.maxStartDate = moment(date).format('DD/MM/YYYY');
	};
};

addStudentCtrl.$inject = [ '$scope', '$rootScope', '$state', '$q', '$timeout', 'dataService', 'progressService'];

app.controller('addStudentCtrl', addStudentCtrl);