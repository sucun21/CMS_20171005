(function () {
    angular.module('app').controller('ClassSchedule', ['$scope', '$state', '$compile', '$timeout', 'progressService', 'viewModel', 'authData', 'classScheduleService',
        function ($scope, $state, $compile, $timeout, progressService, viewModel, authData, classScheduleService) {
	    	var vm = this;
	    	
	    	vm.isAdmin = authData.userTypeId == 1;
	    	vm.params = $state.params;
	    	vm.nextDayNum = 7;
	    	
	    	vm.listIncomingClass = viewModel.listIncomingClass;
	    	vm.listPendingCheckAttendanceClass = viewModel.listPendingCheckAttendanceClass;
	    	vm.listCourse = viewModel.listCourse;
	    	vm.listCenter = viewModel.listCenter;
	    	vm.listTrainer = viewModel.listTrainer;
	    	
	    	$('#calendar').fullCalendar({
	            header: {
	                left: 'prev,next today',
	                center: 'title',
	                right: 'month,listMonth,agendaWeek,listWeek,agendaDay,listDay'
	            },
	            lang: 'en',
	            editable: false,
	            timeFormat: 'h:mma ',
	            buttonText:{
	            	month: 'Month',
	            	agendaWeek: 'Week',
	            	agendaDay: 'Day',
	            	today: 'Today',
	            	listWeek: 'List Week',
	            	listMonth: 'List Month',
	            	listDay: 'List Day',
	            },
	            noEventsMessage: "No class to display",
	            viewRender: function(view) {
	            	 var h;
	                 if (view.name == "month") {
	                     h = NaN;
	                 }
	                 else if(view.name == "agendaWeek" || view.name == "agendaDay") {
	                     h = 1025;  // high enough to avoid scrollbars
	                     $('#calendar').fullCalendar('option', 'contentHeight', h);
	                 }
	            },
	            eventRender: function(event, element) {
	                $(element).attr("data-original-title", event.title);
	            },
	            eventAfterRender: function(event, element){     
	            	var eventEle = angular.element(element);
	            	
	            	var eventClass = '';
	            	if(event.isIncomingClass){
	            		eventClass = 'fc-event-primary';
	            	}
	            	else if(event.isCheckAttendance){
	            		eventClass = 'fc-event-success';
	            	}
	            	else if(!event.isCheckAttendance){
	            		eventClass = 'fc-event-warning';
	            	}
	            	
	            	var json = JSON.stringify(event);
	            	
	            	var html = "<fc-event event='" + json + "' is-admin='" + vm.isAdmin + "'></fc-event>";
	            	var newEventEle = $compile(html)($scope);
	            	eventEle.replaceWith(newEventEle);
	            },
	            eventClick: function(event){
	            	var params = {
	            		id: event.classId
	            	};
	            	$state.go('root.schedule.classInfo', params, { reload: false });
	            },
	            eventSources:[
	            	{
	            		events: function(start, end, timezone, callback){	            			
	            			var params = {
        	 					isAdmin: vm.isAdmin,
         						courseId: $state.params.courseId,
         						centerId: $state.params.centerId,
         						trainerId: authData.userTypeId == 1 ? $state.params.trainerId : authData.userId,
         						startDate: start,
         						endDate: end
        	 				};
	            			
	            			var listDate = [];
	            			
	            			classScheduleService.getClassSchedule(params).then(function(res){
	            				var events = [];	            				
	            				
	            				angular.forEach(res.data, function(item){
	            					
	            					var isLimit = false;
		            				var date = moment(item.studyDateTime).format($scope.SERVER_DATE_FORMAT);
		            				
		            				
		            				if(listDate.indexOf(date) != -1){
		            					isLimit = true; 
		            				}
		            				else{
		            					listDate.push(date);
		            				}
	            					
	            					events.push(angular.extend(item, {
	            						title: item.unitTitle + ' - ' + item.centerName + ' - ' + item.teacherName,
	            						start: moment(item.studyDateTime).format($scope.FULL_CALENDAR_DATE_TIME_FORMAT),
	            						isLimit: isLimit,
	            						allDay: false
	            					}));
	            				});
	            				
	                            callback(events);
	            			});
	            		}
	            	}
	            ]
	        });
	    	
	    	$scope.$watch("parentLoaded", function(parentLoaded){
	    		if(parentLoaded) {
	    			$q.all([
	    				getAllCourse(),
	    				getPendingCheckAttendanceClass(),
	    				getIncomingClass(),
	    				getAllTrainer(),
	    				getAllCenter()
	    			]).then(function() {
	    				
	    				$timeout(function(){
	    	      			  $('.select2').select2();
	    	      		  });
	    				
	    			});
	    			
	    			
	    		}
	    	});
	    	
	    	vm.FilterSchedule = function(){
	    		$state.go($state.current, vm.params, { reload: true });
	    	};
    	}]);
})();