(function () {
    angular.module('app').controller('Student.Detail.LabActivity', ['$scope', '$q', '$state', 'studentService', 'notificationService', 'viewModelSub', 'authData',
    	function ($scope, $q, $state, studentService, notificationService, viewModelSub, authData) {
    	
    	var vm = this;
    	vm.listCourseActivity = viewModelSub.listCourseActivity;
    	vm.listData = viewModelSub.listData;
    	vm.params = $state.params;
    	
    	var listCourseUnit = [];
    	var listlessonByUnit = [];
    	vm.labActivityFilter = {
			unitId: '',
			lessonId: ''
		};
    	var currentUnitId = null;
    	
    	vm.getUnitInCourse = function(){
    		if(vm.listCourseActivity && listCourseUnit.length == 0){
    			
    			listCourseUnit = Enumerable.From(vm.listCourseActivity)
    			 .Distinct('$.unitId')
    			 .Select('{unitId: $.unitId, unitTitle: $.unitTitle}')
    			 .ToArray();
    			
    			listCourseUnit.unshift({
    				unitId: '',
    				unitTitle: 'All unit'
    			});
    		}
    		return listCourseUnit;
    	};
    	
    	vm.getLessonByUnit = function(unitId){
    		if(vm.listCourseActivity && unitId != currentUnitId){
    			
    			currentUnitId = unitId;
    			
    			listlessonByUnit = Enumerable.From(vm.listCourseActivity)
    			 .Distinct('$.lessonId')
    			 .Where(function(x){ return x.unitId == unitId; })
    			 .Select('{lessonId: $.lessonId, lessonTitle: $.lessonTitle}')
    			 .ToArray();
    			
    			listlessonByUnit.unshift({
    				lessonId: '',
    				lessonTitle: 'All lesson'
    			});
    		}
    		return listlessonByUnit;
    	};
    	
    	vm.getTemplate = function(){    		
    		return '/app/student/views/lab-activity/' + $state.params.subtab + '.html';;
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
    	};
    	
    	vm.reloadData = function(isUnit){
    		vm.params.lessonId = isUnit ? '' : vm.params.lessonId;
    		$state.go('.', vm.params, { reload: true });
    	};
    	
    }])
})();

function studentLabActivityCtrl($scope, $rootScope, $state, $q, dataService, $timeout) {	
	var vm = this;
	var studentId = $state.params.id;
	vm.courseId = $state.params.course;
	vm.courseTraineeId = $state.params.courseTraineeId;
	vm.currentLabTab = $state.params.st ? $state.params.st : 'property';
	vm.labActivityFilter = {
		unitId: undefined,
		lessonId: undefined
	};
	
	var getStudentProperty = function(){
		
		vm.listStudentProperty = null;
		
		var deferred = $q.defer();
		var params = {
			lessonId: vm.labActivityFilter.lessonId,
			courseTraineeId: vm.courseTraineeId,
			unitId: vm.labActivityFilter.unitId
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
			courseTraineeId: vm.courseTraineeId,
			unitId: vm.labActivityFilter.unitId
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
			courseTraineeId: vm.courseTraineeId,
			unitId: vm.labActivityFilter.unitId
		};
		var promise = dataService.getStudentOtherActivity(params);
		promise.then(function(res){
			vm.listStudentOtherActivity = res.data;
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	vm.changeLabActivityTab = function(tabName){
		
		tabName = tabName ? tabName : $state.params.st; 
		
		$state.params.st = tabName;
		vm.currentLabTab = tabName;
		
		var funcArr = [];
		switch(vm.currentLabTab){
			case 'property':
				funcArr.push(getStudentProperty());
				break;
			case 'quiz':
				funcArr.push(getStudentQuiz());
				break;
			case 'other':
				funcArr.push(getStudentOtherActivity());
				break;
		};
		
		$q.all(funcArr)
		  .then(function(){
			  $timeout(function(){
				  $('.select2').select2();
				  $('.select2-nosearch').select2({ minimumResultsForSearch: -1 }); 
			  });
			  
			  $state.transitionTo($state.current, $state.params, {
		            reload: false,
		            inherit: false,
		            notify: true
		        });
		  });
		
		
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
	};
	
	var loadDataFunc = [];
	loadDataFunc.push($scope.getCourseActivity(vm.courseId));
	switch(vm.currentLabTab){
		case 'property':
			loadDataFunc.push(getStudentProperty());
			break;
		case 'quiz':
			loadDataFunc.push(getStudentQuiz());
			break;
		case 'other':
			loadDataFunc.push(getStudentOtherActivity());
			break;
	}
	
	$q.all(loadDataFunc).then(function(){
		
	});
	
	vm.onChangeUnit = function(){
		vm.labActivityFilter.lessonId = undefined;
		vm.changeLabActivityTab();
	};
};

studentLabActivityCtrl.$inject = ['$scope', '$rootScope', '$state', '$q', 'dataService', '$timeout'];

app.controller('studentLabActivityCtrl', studentLabActivityCtrl);