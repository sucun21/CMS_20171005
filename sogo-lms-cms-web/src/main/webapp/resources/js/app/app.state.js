app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
	var homeState = 'root.home';
	var loginState = 'login';
	var currentUserType = '';
	
    $stateProvider
	    .state('login', {
			url: '/login?ref',
			templateUrl: 'views/login/login.html',
		    controller: 'loginCtrl as $vm',
		    resolve: {
		    	lazyloadScript: ['$ocLazyLoad', function($ocLazyLoad) {
		    		return $ocLazyLoad.load('login');
		    	}],
		    	isLogin: ['$rootScope', '$state', 'dataService', 'sessionService', 'lazyloadScript' , function($rootScope, $state, dataService, sessionService, lazyloadScript){
		    		$rootScope.isLoginPage = true;
		    		return dataService.getUserSession().then(function(res){
		    			if(res && res.data != null){
		    				sessionService.setUserSession(res.data);
		    				if($state.current.name != homeState){
	   	        				 $state.go(homeState);
	   	        			 }
	   	        			 else{
	   	        				 return $q.reject();
	   	        			 }
		    			}
		    		});
		    	}]
		    },
		    data:{
		    	pageTitle: 'Login'
		    }
		})
	    .state('root', {
	 		url: '',
	 		abstract:true,
	 		resolve: {
		    	authData: ['$state', 'dataService', 'sessionService' , function($state, dataService, sessionService){
		    		return dataService.getUserSession().then(function(res){
		    			if(res && res.data != null){
		    				
		    				sessionService.setUserSession(res.data);
		    				
		    				currentUserType = res.data.userTypeId;
		    				
		    				return res.data;
		    			}
		    			else{
		    				$state.go(loginState);
		    			}
		    		});
		    	}],
//		    	loadRoleState: function(){
//		    		lazyLoad.futureStateProvider.futureState({
//		    		    "stateName": "first",
//		    		    "urlPrefix": "/first",
//		    			"type": "lazyLoad",
//		    		    "src": "app.state.ad.js"
//		    		  });
//		    		return true;
//		    	}
		    	loadRoleState: ['$ocLazyLoad', 'authData', function($ocLazyLoad, authData) {
	 				var scriptName = 'module.';
	 				switch(authData.userTypeId){
	 					case 1:
	 						scriptName += 'admin';
	 					break;
	 				}
	 				
		    		return $ocLazyLoad.load(scriptName);
		    	}]
		    },
	 		views:{
	 			'': {
	            	templateUrl: 'views/shared/_layout.html'
	            },
	            'header@root': {
	            	templateUrl: 'views/shared/_header.html'
	            },
	            'footer@root': {
	            	templateUrl: 'views/shared/_footer.html'
	            },
	            'leftMenu@root': {
	            	templateUrl: 'views/shared/_leftMenu.html'
	            }
	 		}
	 	})
	 	.state('root.home', {
	 		url: '/',
//	 		templateUrl: 'views/login/login.html',
		    controller: 'homeCtrl as $vm',
	 		resolve: {
	 			lazyloadScript: ['$ocLazyLoad', 'authData', function($ocLazyLoad, authData) {
	 				var scriptName = 'home.';
	 				switch(authData.userTypeId){
	 					case 1:
	 						scriptName += 'admin';
	 					break;
	 				}
	 				
		    		return $ocLazyLoad.load(scriptName);
		    	}]
		    }
	 	});
//	 	.state('root.student.**',{
//	 		url: '/student',
//	 		lazyLoad: function($transition) {
//	 			$transition.injector().get('$ocLazyLoad').load('/app/module.admin.js');
//	 		}
//	 	})
//	 	.state('root.schedule.**', { 
//		    url: '/schedule', 
//		    lazyLoad: function($transition) {
//	 			$transition.injector().get('$ocLazyLoad').load('/app/module.admin.js');
//	 		}
//		  });
//	    .state('root', {
//	    	url: '',
//	    	abstract:true,
//	    	resolve:{
//	    		"initData": ['sessionService', function(sessionService){
//	    			return {
//	    				userMenu: sessionService.getUserMenu()
//	    			};
//	    		}]
//	    	},
//	        views: {
//	        	'': {
//	            	templateUrl: 'views/shared/_layout.html',
//	            },
//	        	'header@root': {
//	        		templateUrl: 'views/shared/_header.html'
//	        	},
//	            'footer@root': {
//	            	templateUrl: 'views/shared/_footer.html'
//	            },
//	            'leftMenu@root': {
//	            	templateUrl: 'views/shared/_leftMenu.html',
//	            	controller: 'leftMenuCtrl',
//	            	controllerAs: 'vm'
//	            }
//	        }
//	    })
//	    .state('root.home', {
//	    	url: "/",
//	    	views:{
//	    		'@root':{
//	    			templateUrl: "views/home/index.html",
//	    			controller: ['progressService', function(progressService){
//	    				progressService.complete();
//	    			}]
//	    		}
//	    	},
//	    });
    
    //$urlRouterProvider.deferIntercept();
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
       
    $stateProviderRef = $stateProvider;
    
//    lazyLoad = {stateProvider: $stateProvider, futureStateProvider: $futureStateProvider};
//    
//    $futureStateProvider.stateFactory('lazyLoad', function(futureState) {
//    	console.log(futureState);
//        return {
//            name: futureStatePlaceholder.name,
//            url: futureStatePlaceholder.url
//        }
//    });
    
//    $urlRouterProviderRef = $urlRouterProvider;
}]);