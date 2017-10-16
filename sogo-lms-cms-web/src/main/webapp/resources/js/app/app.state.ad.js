//lazyLoad.stateProvider.state('root.schedule',{
//	url: "/schedule/?courseId&trainerId&centerId",
//	templateUrl: "views/home/dashboard.html",
//	controller: "dashboardCtrl as $vm",
//	data: {
//        pageTitle: "Class schedule"
//    }
//});

//app.run(['$urlRouter',
//	function($urlRouter){
//	
//		$stateProviderRef
//			.state('root.schedule',{
//				url: "/schedule?courseId&trainerId&centerId",
//				templateUrl: "views/home/dashboard.html",
//				controller: "dashboardCtrl as $vm",
//				data: {
//		            pageTitle: "Class schedule"
//		        },
//			});
//		
//		$urlRouter.sync();
//        $urlRouter.listen();
//        
//        console.log($stateProviderRef.get());
//	
//}]);

//app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
//	$stateProviderRef
//		.state('root.schedule',{
//			url: "/schedule/?courseId&trainerId&centerId",
//			templateUrl: "views/home/dashboard.html",
//			controller: "dashboardCtrl as $vm",
//			data: {
//	            pageTitle: "Class schedule"
//	        },
//		});
//	
//	$urlRouterRef.listen();
//	$urlRouterRef.sync();
////	console.log($urlRouterRef);
////	
////	
////	$urlRouterProvider.sync();
////	$urlRouterProvider.listen();
//	
//}]);