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

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
    	url: '',
    	abstract:true,
    	resolve:{
    		"initData": ['sessionService', function(sessionService){
    			return {
    				userMenu: sessionService.getUserMenu()
    			};
    		}]
    	},
        views: {
        	'': {
            	templateUrl: 'views/shared/_layout.html',
            },
        	'header@root': {
        		templateUrl: 'views/shared/_header.html'
        	},
            'footer@root': {
            	templateUrl: 'views/shared/_footer.html'
            },
            'leftMenu@root': {
            	templateUrl: 'views/shared/_leftMenu.html',
            	controller: 'leftMenuCtrl',
            	controllerAs: 'vm'
            }
        }
    })
    .state('root.home', {
    	url: "/",
    	views:{
    		'@root':{
    			templateUrl: "views/home/index.html",
    			controller: ['progressService', function(progressService){
    				progressService.complete();
    			}]
    		}
    	},
    });
    
    $urlRouterProvider.deferIntercept();
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
       
    $stateProviderRef = $stateProvider;
    $urlRouterProviderRef = $urlRouterProvider;
}]);