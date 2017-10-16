var $stateProviderRef = null;
var $urlRouterProviderRef = null;

var app = angular.module('app', ['ui.router', 'ngSanitize', 'angular-cache', 'ngProgress', 'ui.select']);


app.value('genderArray', ['Unknown', 'Male', 'Female']);

/*config*/
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(['CacheFactoryProvider', function (CacheFactoryProvider) {
	
	var options = {
		maxAge: 1440 * 60 * 1000, /*expire after 24h*/
	    deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
	    storagePrefix: 'cms.cache.',
	    storageMode: 'memory' //cache will clear when refresh
	  };
	
//	if(window.sessionStorage){
//		options.storageMode = 'sessionStorage';
//	}
//	else if(window.localStorage){
//		options.storageMode = 'localStorage';
//	}
	
	angular.extend(CacheFactoryProvider.defaults, options);
	//angular.extend(CacheFactoryProvider.defaults, { maxAge: 5000 /*expire after 24h*/ });
}]);

app.config(['$httpProvider', function ($httpProvider) {
    // XSRF token naming
    $httpProvider.defaults.xsrfHeaderName = 'x-dt-csrf-header';
    $httpProvider.defaults.xsrfCookieName = 'X-CSRF-TOKEN';
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    var $http,
        interceptor = ['$q', '$injector', function ($q, $injector) {
            return {
                response: function (res) {
                    return res;
                },
                responseError: function (res) {
                    // res.data = { ID: -1, Message: 'Xảy ra lỗi hệ thống' };
                    return res;
                },
            };
        }];

    $httpProvider.interceptors.push(interceptor);
}]);

app.run(['$rootScope', '$q', '$state', '$urlRouter', '$timeout', 'sessionService', 'dataService', 'notifyService', 'CacheFactory', 'progressService', '$transitions',
	function($rootScope, $q, $state, $urlRouter, $timeout, sessionService, dataService, notifyService, CacheFactory, progressService, $transitions){
	
	$script.path('/app/')
//	$script.ready(['app.configs.js'], function(){
//		console.log('ready');
//	}, function(notFound){
//		console.log(notFound);
//	});
	
	$script('app.configs.ad.js', function(){
		
	});
	
	//broadcast event click on document
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
		
	//init event state change
	$transitions.onStart({ }, function(trans) {
		progressService.start();
	  });
	
	$transitions.onSuccess({ }, function(trans) {
		
		if(!$('body').hasClass('onload-check'))
		{
	    	$timeout(function(){
	  			common.init();
	  		}, 1);
		}
//		progressService.complete();
	});
	
//	$transitions.onError({ }, function(trans) {
//		console.log('error');
//	});
	
//	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
//		progressService.start();
//	});
//	
//	$rootScope.$on('$stateChangeSuccess', function(){
//		$timeout(function(){
//  			//Core.init();
//  			common.init();
//  		}, 1);
//		progressService.complete();
//	});
	
	//check show loading background
	$rootScope.IsShowLoading = function () {
        return progressService.status() > 0 && progressService.status() < 100;
    };
	
	$rootScope.pageLoaded = false;
	$rootScope.appName = 'LMS';
	$rootScope.SERVER_DATE_FORMAT = "YYYY-MM-DD";
	$rootScope.FULL_CALENDAR_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss";
	$rootScope.currentYear = new Date().getFullYear();
	$rootScope.currentDate = moment(new Date()).format('DD/MM/YYYY');
	$rootScope.defaultPageSize = 10;
	$rootScope.notifyService = notifyService;
	$rootScope.sessionUserId = 0;
	$rootScope.isAdmin = sessionService.isAdmin(); 
	$rootScope.defaultPassword = '1234567';
	$rootScope.noAvatarImgUrl = '/images/no-avatar.jpg';
	$rootScope.isAdmin = sessionService.isAdmin();
	$rootScope.minSearchItem = 5;
	
	$rootScope.listCourseActivity = {};
	
	$rootScope.getCourseActivity = function(courseId){
		if(!$rootScope.listCourseActivity[courseId]){
			var promise = dataService.getCourseActivity(courseId);
			promise.then(function(res){
				$rootScope.listCourseActivity[courseId] = res.data;
			});
		};
	};
	
	
	$rootScope.convertToShortDatetimeVN = function(input){
    	if (input === '' || !input) {
            return input;
        } else {
            var convertedDate = new Date(input.toString().match(/\d+/)[0] * 1);

            return moment(convertedDate).format('DD/MM/YYYY HH:mm');
        }
    };
	
	$rootScope.convertToDatetimeVN = function(input){
    	if (input === '' || !input) {
            return input;
        } else {
            var convertedDate = new Date(input.toString().match(/\d+/)[0] * 1);

            return moment(convertedDate).format('DD/MM/YYYY HH:mm:ss');
        }
    };
    
    $rootScope.generateAvatarUrl = function(imageName){
    	
    	if(imageName && imageName.indexOf("http://") == -1 && imageName.indexOf("https://") == -1)
    	{
    		return imageDomain + 'avatar/' + imageName;
    	}
    	else{
    		return imageName;
    	}
    };
    
    $rootScope.closePopup = function () {
        $state.transitionTo($state.$current.parent , $state.params, {
            reload: false,
            inherit: false,
            notify: true
        });
    };
    
    $rootScope.clearCache = function(){
    	CacheFactory.clearAll();
    	notifyService.success('Cache cleared');
    };
	
	function getUserSession(){
		
		var deferred = $q.defer();
		
		var promise = dataService.getUserSession();
		
		promise.then(function(res){
			if(res.is_success){
				$rootScope.sessionUserId = res.data.userId;
				sessionService.setUserSession(res.data);
			}
			else{
				sessionService.setUserSession();
			}
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	$rootScope.getStudentListData = ['dataService', '$stateParams', function(dataService, $stateParams){	
		var getCourse = dataService.getAllCourse();
		var getCenter = dataService.getAllCenter();
		var getStudentList = dataService.getStudentList($stateParams);
		    	
		return $q.all([getCourse, getCenter, getStudentList]).then(function(results){	
            return {
                listCourse: results[0] ? results[0].data : [],
				listCenter: results[1] ? results[1].data : [],
				listData: results[2] ? results[2].data : []
            };
        });

	}];
	
	$rootScope.getUserListData = ['dataService', '$stateParams', function(dataService, $stateParams){
		var getUserType = dataService.getUserType();
		var getSystemUser = dataService.getSystemUser($stateParams);
		    	
		return $q.all([getUserType, getSystemUser]).then(function(results){			
            return {
                listUserType: results[0] ? results[0].data : [],
				listData: results[1] ? results[1].data : [],
            };
        });

	}];
	
	$rootScope.initClassGroupListData = ['dataService', '$stateParams', function(dataService, $stateParams){
		var getCourse = dataService.getAllCourse();
		var getCenter = dataService.getAllCenter();
		var getTrainer = dataService.getAllTrainer();
		var getClassType = dataService.getAllClassType();
		var getAllGroupClass = dataService.getAllGroupClass($stateParams);
		    	
		return $q.all([getCourse, getCenter, getTrainer, getClassType, getAllGroupClass]).then(function(results){			
            return {
				listCourse: results[0] ? results[0].data : [],
				listCenter: results[1] ? results[1].data : [],
                listTrainer: results[2] ? results[2].data : [],
				listClassType: results[3] ? results[3].data : [],
                listData: results[4] ? results[4].data : []
            };
        });
	}];
	
	$rootScope.initAddClassGroupData = ['dataService', function(dataService){
		var getCourse = dataService.getAllCourse();
		var getCenter = dataService.getAllCenter();
		var getTrainer = dataService.getAllTrainer();
		var getClassType = dataService.getAllClassType();
		var getCourseHoliday = dataService.getCourseHoliday();
		
		return $q.all([getCourse, getCenter, getTrainer, getClassType, getCourseHoliday]).then(function(results){		
            return {
				listCourse: results[0] ? results[0].data : [],
				listCenter: results[1] ? results[1].data : [],
                listTrainer: results[2] ? results[2].data : [],
				listClassType: results[3] ? results[3].data : [],
                listHoliday: results[4] ? results[4].data : []
            };
        });
	}];
	
	function getModules(){
		var deferred = $q.defer();
		var promise = dataService.getModules(sessionService.getUserSession().userTypeId);
		
		promise.then(function(res){
			angular.forEach(res, function(groupState) {
				
				var userMenu = {
					name: groupState.group,
					icon: groupState.icon,
					parentState: groupState.parentState,
					subMenu: []
				};
				
				angular.forEach(groupState.states, function(value){
					//push to menu
					if(value.isShowMenu){
						userMenu.subMenu.push({
							name: value.menuName,
							uiSref: value.name
						});
					}
					
					
					//push to state
					var getExistingState = $state.get(value.name);
			          if(getExistingState !== null){
			            return; 
			          }
			          
			          var state = {
		                  "url": value.url,
		                  //"parent": value.parent,
		                  "abstract": value.abstract,
		                  "template": value.template,
		                  "templateUrl": value.templateUrl,
		                  "data": value.data,
		                  "controller": value.controller,
		                  "controllerAs": value.controllerAs,
		                  "views": {},
		                  "reloadOnSearch": value.reloadOnSearch,
		                  "params": value.params
		                };
			          
			          if(!angular.isUndefined(value.resolve) && value.resolve != '' && !value.parent) {
				          state.resolve = {
			        		  "initData": $rootScope.$eval(value.resolve) 
				          };
		        	  }
			          else if(!angular.isUndefined(value.resolve) && value.resolve != '' && value.parent){
			        	  state.resolve = {
			        		  "initDataChild": $rootScope.$eval(value.resolve) 
				          };
			          }
			          else{
			        	  state.resolve = {
		        			  "fakeData": function(){ return null; }
				          };
			          }

		                angular.forEach(value.views, function(view) {
		                  state.views[view.name] = {
		                    templateUrl: view.templateUrl,
		                    template: view.template,
		                    data: view.data,
		                    controller: view.controller,
			                controllerAs: view.controllerAs
		                  };
		                  
		                });
		                
			          $stateProviderRef.state(value.name, state);
				});	     
				
				//push menu to session
				sessionService.pushUserMenu(userMenu);
				
	        });
	        // Configures $urlRouter's listener *after* your custom listener
	        $urlRouter.sync();
	        $urlRouter.listen();
			
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	$rootScope.hasPermission = function(routeName){
		return Enumerable.From($rootScope.listState).Count(function(x) { return x.name == routeName; }) > 0;
	};
	
	$q.when(getUserSession())
	  .then(function(){
		  $q.when(getModules())
		  	.then(function(){
		  		$rootScope.listState = $state.get();
		  	});
	  });
	
	
}]);