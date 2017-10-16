function dashboardCtrl($scope, $rootScope, $q, $state, $compile, sessionService, dataService, $timeout, $window, progressService) {
	var vm = this;
	vm.params = $state.params;
	vm.isAdminUser = sessionService.isAdmin();
	vm.nextDayNum = 7;
	
	vm.isLoadingPendingCheckAttendaceClass = true;
	vm.isLoadingIncomingClass = true;
	progressService.complete();
	
	var getPendingCheckAttendanceClass = function(){
		var deferred = $q.defer();
		var params = {
			isAdmin: vm.isAdminUser,
			courseId: vm.params.courseId,
			centerId: vm.params.centerId,
			trainerId: vm.params.trainerId
		};
		var promise = dataService.getPendingCheckAttendanceClass(params);
		promise.then(function(res){
			vm.listPendingCheckAttendanceClass = res.data;
			vm.isLoadingPendingCheckAttendaceClass = false;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	var getIncomingClass = function(){
		var deferred = $q.defer();
		var params = {
			isAdmin: vm.isAdminUser,
			courseId: vm.params.courseId,
			centerId: vm.params.centerId,
			trainerId: vm.params.trainerId,
			nextDayNum: vm.nextDayNum
			
		};
		var promise = dataService.getIncomingClass(params);
		promise.then(function(res){
			vm.listIncomingClass = res.data;
			vm.isLoadingIncomingClass = false;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	var getClassSchedule = function(start, end){
		var params = {
			isAdmin: vm.isAdminUser,
			courseId: vm.params.courseId,
			centerId: vm.params.centerId,
			trainerId: vm.params.trainerId,
			startDate: start,
			endDate: end
		};
		return dataService.getClassSchedule(params);
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
	
	var getAllCenter = function() {
		var deferred = $q.defer();
		var promise = dataService.getAllCenter();
		promise.then(function(res) {
			vm.listCenter = res.data;
			deferred.resolve();
		});

		return deferred.promise;
	};
	
	var getAllTrainer = function(){
		var deferred = $q.defer();
		var promise = dataService.getAllTrainer();
		promise.then(function(res){
			vm.listTrainer = res.data;
			deferred.resolve();
		});
		return deferred.promise;
	};
	
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
			
			$('#calendar').fullCalendar({
	            header: {
	                left: 'prev,next today',
	                center: 'title',
	                right: 'month,listMonth,agendaWeek,listWeek,agendaDay,listDay'
	            },
	            lang: 'en',
	            editable: false,
	            timeFormat: 'h:mma ',
//	            eventLimit: true,
	            buttonText:{
	            	month: 'Month',
	            	agendaWeek: 'Week',
	            	agendaDay: 'Day',
	            	today: 'Today',
	            	listWeek: 'List Week',
	            	listMonth: 'List Month',
	            	listDay: 'List Day',
	            },
//	            views: {
//	            	month: {
//	                    eventLimit: 1 
//	                },
//	                week:{
//	                	eventLimit: 2
//	                }
//	            },
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
	            	
	            	var html = "<fc-event event='" + json + "' is-admin='" + vm.isAdminUser + "'></fc-event>";
	            	
//	            	var html = '<a class="fc-event '+ eventClass + '" ui-sref="root.home.classInfo({classId: ' + event.classId + '})" style="' + element[0].style.cssText + '">' +
//									'<div class="fc-event-desc pn">' +
//										'<b class="fc-event-desc-detail" title="' + event.unitTitle + '">' +
//											'<i class="fa fa-file-text-o fa-fw"></i>' + event.unitTitle + '<br/>' +
//											'<i class="fa fa-user fa-fw"></i>' + event.teacherName
//											(vm.isAdminUser ? 'Center: ' + event.centerName + '<br/>') : '')
//											event.teacherName +'<br/>' +
//										'</b>' +
//									'</div>' +
//								'</a>';
	            	var newEventEle = $compile(html)($scope);
	            	eventEle.replaceWith(newEventEle);
	            },
	            eventClick: function(event){
	            	var params = {
	            		classId: event.classId
	            	};
	            	$state.transitionTo('root.home.classInfo', params, {
	                    reload: false,
	                    inherit: false,
	                    notify: true
	                });
	            },
	            eventSources:[
	            	{
	            		events: function(start, end, timezone, callback){
	            			var promise = getClassSchedule(start, end);
	            			
	            			var listDate = [];
	            			
	            			promise.then(function(res){
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
		}
	});
	
	vm.onClickScheduleEvent = function(){
		
	};
	
	vm.FilterSchedule = function(){
		$state.transitionTo($state.current, vm.params, {
            reload: true,
            inherit: false,
            notify: true
        });
	};
};

dashboardCtrl.$inject = ['$scope', '$rootScope', '$q', '$state', '$compile', 'sessionService', 'dataService', '$timeout', '$window', 'progressService'];

app.controller('dashboardCtrl', dashboardCtrl);