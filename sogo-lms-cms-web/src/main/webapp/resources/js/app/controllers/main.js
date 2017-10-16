function mainCtrl($scope, $rootScope, $http, $timeout, $state, $q, $urlRouter, sessionService, dataService) {
	//declaration
	$scope.sessionInfo;
	$scope.isLogin;
	$scope.parentLoaded = false;
	
//	$scope.isShowLanguage = false;
//	
//	var dialogLogin = document.querySelector('.show-login-popup');
//    
//    var loadProgress = $interval(function(){
//    	var percent = $http.pendingRequests.length == 0 ? 100 : 0;
//    	
//    	if(percent == 100){
//    		$scope.progressbar.complete();
//    		$interval.cancel(loadProgress);
//    	}
//    	
//    }, 500);
    
	 var excludeUrl = [
	        '/api/updateStudentAttendance'
	    ];

//    $scope.IsShowLoading = function () {
//        var countPendingRequest = Enumerable.From($http.pendingRequests)
//                                            .Count(function(x) {return excludeUrl.indexOf(x.url) == -1;});
//        return countPendingRequest !== 0;
//    };
	
    $rootScope.$on('updateSession', function(){
    	$scope.sessionInfo = sessionService.getUserSession();
    	$scope.isLogin = sessionService.isLogin();
    	console.log('update sesson');
    }); 
	
//	function getUserSession(){
//		
//		var deferred = $q.defer();
//		
//		var promise = dataService.getUserSession();
//		
//		promise.then(function(res){
//			if(res.is_success){
//				sessionService.setUserSession(res.data);
//			}
//			else{
//				sessionService.setUserSession();
//			}
//			deferred.resolve();
//		});
//		
//		return deferred.promise;
//	};
//	
//	function getModules(){
////		var deferred = $q.defer();
//		var promise = dataService.getModules($scope.sessionInfo.userTypeId);
//		
//		promise.then(function(res){
//			angular.forEach(res, function(value, key) {
//	          var getExistingState = $state.get(value.name);
//	          if(getExistingState !== null){
//	            return; 
//	          }
//	          
//	          var state = value;
////		          angular.forEach(value.views, function(view) {
////		            state.views[view.name] = {
////		              templateUrl: view.templateUrl,
////		            };
////		          });
//
//	          $stateProviderRef.state(value.name, state);
//	          
//	          console.log($stateProviderRef);
//	        });
//	        // Configures $urlRouter's listener *after* your custom listener
//
//	        $urlRouter.sync();
//	        $urlRouter.listen();
//	        
//	        console.log($stateProviderRef);
//			
////			if(res){
////				//sessionService.setUserSession(res.data);
////			}
////			else{
////				//sessionService.setUserSession();
////			}
////			deferred.resolve();
//		});
//		
////		return deferred.promise;
//	};
    
    $scope.init = function(){
    	$scope.sessionInfo = sessionService.getUserSession();
    	$scope.userMenu = sessionService.getUserMenu();
    	$scope.isLogin = sessionService.isLogin();
    	$scope.parentLoaded = true;
    	
    	//init event state change
//    	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
//    		$scope.pageLoaded = false;
////    		$scope.progressbar.start();
////    		if(!sessionService.isLogin() && toState.name != 'login'){
////    			$state.go('login');
////    			event.preventDefault();
////    		}
////		    else if(sessionService.isLogin() && toState.name == 'login'){
////		    	//$state.go('home');
////		    	window.location.href = "/";
////	    	  event.preventDefault();
////		    }
////    		
////    		$rootScope.pageLoaded = false;
//    	});
//    	
//    	$rootScope.$on('$stateChangeSuccess', function(){
//    		
////    		$q.when(getTraineeCurrentCourse())
////			  .then(function(){
////				  $scope.progressbar.complete();
////			  });
//    		
//    	});
    	
//    	$q.when(getUserSession())
//    	  .then(function(){
//    		  getModules();
//    	  });
//    	$q.when(getUserSession())
//    	  .then(function(){
//    		  $q.all([getTraineeCurrentCourse()])
//    		  	.then(function(){
//	    		  	$scope.parentLoaded = true;
//	    		  	
//	    		  	if(!dialogLogin.showModal){
//	    		  		dialogPolyfill.registerDialog(dialogLogin);
//	    		  	}
//	    		  	
	    	    	//init event state change
//	    	    	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
//	    	    		$scope.progressbar.start();
//	    	    		if(!sessionService.isLogin() && toState.name != 'login'){
//	    	    			$state.go('login');
//	    	    			event.preventDefault();
//	    	    		}
//					    else if(sessionService.isLogin() && toState.name == 'login'){
//					    	//$state.go('home');
//					    	window.location.href = "/";
//				    	  event.preventDefault();
//					    }
//	    	    		
//	    	    		$rootScope.pageLoaded = false;
//	    	    	});
//	    	    	
//	    	    	$rootScope.$on('$stateChangeSuccess', function(){
//	    	    		
//	    	    		$timeout(function(){
//	    		  			Core.init();
//	    		  		}, 1);
//	    	    		
//	    	    	});
//	    	  });
//    	  });
    };
    
//    $scope.doLogout = function($event){
//    	$event.preventDefault();
//    	var promise = dataService.doLogout();
//    	promise.then(function(){
//    		window.location.href = '/login?ref=' + encodeURIComponent(window.location.pathname + window.location.search);
//    	});
//    };
    
};

mainCtrl.$inject = ['$scope', '$rootScope', '$http', '$timeout', '$state', '$q', '$urlRouter', 'sessionService', 'dataService'];

app.controller('mainCtrl', mainCtrl);