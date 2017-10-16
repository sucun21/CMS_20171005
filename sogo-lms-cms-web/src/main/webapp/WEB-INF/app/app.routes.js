app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
	var homeState = 'root.home';
	var loginState = 'login';
	
    $stateProvider
	    .state('login', {
			url: '/login?ref',
			templateUrl: 'app/login/views/login.html',
		    controller: 'Login as $vm',
		    resolve: {
		    	isLogin: ['$rootScope', '$state', 'dataService', function($rootScope, $state, dataService){
//		    		$rootScope.isLoginPage = true;
		    		return dataService.getUserSession().then(function(res){
		    			if(res && res.data != null){
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
		    	authData: ['$rootScope', '$state', 'dataService', '$q', function($rootScope, $state, dataService, $q){		    		
		    		var deferred = $q.defer();
		    		
		    		dataService.getUserSession().then(function(res){
		    			if(res && res.data != null){
		    				$rootScope.sessionInfo = res.data;
		    				deferred.resolve(res.data);
		    			}
		    			else{
		    				deferred.reject({message: 'Unauthenticate', redirectTo: 'login'});
		    			}
		    		});
		    		
		    		return deferred.promise;
		    	}],
		    	userRole: ['$rootScope', 'authData', 'sharedService', function($rootScope, authData, sharedService){
		    		var userTypeId = authData.userTypeId;
		    		return sharedService.getUserRole(userTypeId).then(function(res){
		    			
		    			$rootScope.userRole = res;
		    			
		    			return res;
		    		});
		    		
		    	}]
		    },
	 		views:{
	 			'': {
	            	templateUrl: 'app/shared/views/_layout.html'
	            },
	            'header@root': {
	            	templateUrl: 'app/shared/views/_header.html'
	            },
//	            'footer@root': {
//	            	templateUrl: 'app/shared/views/_footer.html'
//	            },
	            'leftMenu@root': {
	            	templateUrl: 'app/shared/views/_leftMenu.html',
	            	controller: 'Shared.LeftMenu as $vm'
	            }
	 		}
	 	})
	 	.state('root.home', {
	 		url: '/',
	 		templateUrl: 'app/home/views/home.html',
		    controller: 'Home as $vm',
		    data:{
		    	pageTitle: 'Home'
		    }
	 	})
	 	.state('root.schedule', {
	 		url: '/schedule?courseId&trainerId&centerId',
	 		templateUrl: 'app/classSchedule/views/classSchedule.html',
	 		controller: 'ClassSchedule as $vm',
	 		resolve: {
	 			viewModel: ['classScheduleService', '$stateParams', 'authData', function(classScheduleService, $stateParams, authData){
	 				var params = {
	 					isAdmin: authData.userTypeId == 1,
 						nextDayNum: 7,
 						courseId: $stateParams.courseId,
 						centerId: $stateParams.centerId,
 						trainerId: authData.userTypeId == 1 ? $stateParams.trainerId : authData.userId
	 				};
	 				
	 				return classScheduleService.getClassSchedulePageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Class Schedule'
		    }
	 	})
	 	.state('root.schedule.classInfo', {
	 		url: '/class-info/{id:[0-9]{1,16}}/{view:student|report|report-detail}/{quizId:[0-9]{1,16}}',
	 		params: {
				view:{
					value: "student",
					squash: false
				},
				quizId:{
					value: '0',
					squash: true
				}
	 		},
	 		templateUrl: 'app/classSchedule/views/classInfo.html',
	 		controller: 'ClassSchedule.ClassInfo as $vm',
	 		resolve: {
	 			viewModel: ['classInfoService', '$stateParams', 'authData', function(classInfoService, $stateParams, authData){
	 					 					 				
	 				var params = {
	 					classId: $stateParams.id,
	 					viewMode: $stateParams.view,
	 					quizId: $stateParams.quizId
	 				};
	 				
	 				return classInfoService.getClassInfoPageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Class Info',
		    	isFullScreenPanel: true
		    }
	 	})
	 	.state('root.student', {
	 		url: '/student',
	 		abstract: true,
	 		template: '<ui-view></ui-view>'
	 	})
	 	.state('root.student.list', {
	 		url: '/list?searchKey&p&ps&studentStatus&courseId&centerId',
	 		params: {
	 			searchKey:{
					value: '',
					squash: true
				},
				courseId:{
					value: '',
					squash: true
				},
				centerId:{
					value: '',
					squash: true
				},
				studentStatus:{
					value: '',
					squash: true
				},
				p:{
					value: '1',
					squash: true
				},
				ps:{
					value: '10',
					squash: true
				}
	 		},
	 		templateUrl: 'app/student/views/list.html',
	 		controller: 'Student.List as $vm',
	 		resolve: {
	 			viewModel: ['studentService', '$stateParams', 'authData', function(studentService, $stateParams, authData){
	 					 					 				
	 				var params = {
	 					searchKey: $stateParams.searchKey,
	 					centerId: $stateParams.centerId,
	 					courseId: $stateParams.courseId,
	 					studentStatus: $stateParams.studentStatus,
	 					p: $stateParams.p,
	 					ps: $stateParams.ps,
	 				};
	 				
	 				return studentService.getManageStudentPageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Manage Student'
		    }
	 	})
	 	.state('root.student.list.add', {
	 		url: '/add',
	 		templateUrl: 'app/student/views/add.html',
	 		controller: 'Student.Add as $vm',
	 		resolve: {
	 			viewModel: ['studentService', '$stateParams', 'authData', function(studentService, $stateParams, authData){
	 				return studentService.getAddStudentPageData().then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Add New Student',
		    	isFullScreenPanel: true
		    }
	 	})
	 	.state('root.student.list.detail', {
	 		//url: '/details/{id:[0-9]{1,16}}/{course:[0-9]{1,16}}/{courseTraineeId:[0-9]{1,16}}',
	 		url: '/detail/{id:[0-9]{1,16}}/{course:[0-9]{1,16}}/{courseTraineeId:[0-9]{1,16}}/{tab:class|log-activity|lab-activity|contract}/{subtab:property|quiz|other}/:unitId/:lessonId',
	 		params: {
	 			tab:{
					value: 'class'
				},
				subtab:{
					value: 'property',
					squash: true
				},
				unitId:{
					value: '',
					squash: true
				},
				lessonId:{
					value: '',
					squash: true
				}
	 		},
//	 		templateUrl: 'app/student/views/detail.html',
//	 		controller: 'Student.Detail as $vm',
	 		resolve: {
    			viewModel: ['studentService', '$stateParams', function(studentService, $stateParams){
        			return studentService.getStudentDetailPageData($stateParams.id).then(function(res){        				
        				return res;
        			});
        		}],
        		viewModelSub: ['studentService', '$stateParams', '$q', 'viewModel', function(studentService, $stateParams, $q, viewModel){
        			switch($stateParams.tab){
        				case 'class':
        					{
        		    			var params = {
        		        			traineeId: $stateParams.id,
        		        			courseTraineeId: $stateParams.courseTraineeId
        		        		};
	        					return studentService.getStudentClasses(params).then(function(res){
	        						viewModel.listStudentClass = res.data;
	        						
	        						return viewModel;
	        					});
        					}
        				break;
	    				case 'log-activity':
	    					{
	    		    			var params = {
	    		        			traineeId: $stateParams.id,
	    		        			courseTraineeId: $stateParams.courseTraineeId
	    		        		};
	        					return studentService.getStudentDetailLogActivityData(params).then(function(res){
	        						viewModel.listCommentType = res.listCommentType;
	        						viewModel.listActivityLog = res.listActivityLog;
	        						
	        						return viewModel;
	        					});
	    					}
	    				break;
	    				case 'contract':
	    					{
	    						return viewModel;
	    					}
	    				break;
	    				case 'lab-activity':
	    					{
	    						var func;
	    						var params = {
	    								lessonId: $stateParams.lessonId,
	    								courseTraineeId: $stateParams.courseTraineeId,
	    								unitId: $stateParams.unitId
	    						};
	    						
	    						switch($stateParams.subtab){
	    							case 'property':
	    								func = studentService.getStudentProperty(params);
	    							break;
	    							case 'quiz':
	    								func = studentService.getStudentQuiz(params);
	    							break;
	    							case 'other':
	    								func = studentService.getStudentOtherActivity(params);
	    							break;
	    						}
	    					
	    						return $q.all([
	    							studentService.getCourseActivity($stateParams.course),
	    							func
	    						]).then(function(res){
	    							viewModel.listCourseActivity = res[0].data;
	    							viewModel.listData = res[1].data;
	    							
	    							return viewModel;
	    							
	    						});
	    					}
	    				break;
        			}
        		}]
    		},
	 		views:{
	 			'': {
	            	templateUrl: 'app/student/views/detail.html',
            		controller: 'Student.Detail as $vm'
	            },
	            '@root.student.list.detail': {
	    	 		templateProvider: ['$stateParams', '$templateRequest', function ($stateParams, templateRequest) {
	    	            var tplName = 'app/student/views/detail-' + $stateParams.tab + ".html";
	    	            return templateRequest(tplName);
	    	        }],
	    	        controllerProvider:['$stateParams', function ($stateParams)
	    	    	{
	    	        	var tab = $stateParams.tab;
	    	        	var formatedTab = tab.replace(/\b\w/g, l => l.toUpperCase()).replace('-', '');
	    	        	
	    	        	return 'Student.Detail.' +formatedTab + ' as $vm';
	    	    	}]
	            }
	 		},
	 		data:{
		    	pageTitle: 'Student Detail',
		    	isFullScreenPanel: true
		    }
	 	})
//	 	.state('root.student.list.detail.tab', {
//	 		url: '/{tab:class|log-activity|lab-activity|contract}?st',
//	 		params: {
//	 			tab:{
//					value: 'class'
//				}
//	 		},
//	 		templateProvider: ['$stateParams', '$templateRequest', function ($stateParams, templateRequest) {
//	            var tplName = 'app/student/views/detail-' + $stateParams.tab + ".html";
//	            return templateRequest(tplName);
//	        }],
//	        controllerProvider:['$stateParams', function ($stateParams)
//	    	{
//	        	var tab = $stateParams.tab;
//	        	
//	        	return 'Student.Detail.' + tab.charAt(0).toUpperCase() + tab.slice(1) + ' as $vm';
//	    	}],
//	 		//templateUrl: 'app/student/views/detail.html',
//	 		//controller: 'Student.Detail as $vm',
//	 		data:{
//		    	pageTitle: 'Student Detail',
//		    	isFullScreenPanel: true
//		    }
//	 	})
	 	.state('root.user', {
	 		url: '/user',
	 		abstract: true,
	 		template: '<ui-view></ui-view>'
	 	})
	 	.state('root.user.list', {
	 		url: '/list?searchKey&p&ps&userStatus&userTypeId',
	 		params: {
	 			searchKey:{
					value: '',
					squash: true
				},
				userTypeId:{
					value: '',
					squash: true
				},
				userStatus:{
					value: '',
					squash: true
				},
				p:{
					value: '1',
					squash: true
				},
				ps:{
					value: '10',
					squash: true
				}
	 		},
	 		templateUrl: 'app/user/views/list.html',
	 		controller: 'User.List as $vm',
	 		resolve: {
	 			viewModel: ['userService', '$stateParams', 'authData', function(userService, $stateParams, authData){
	 					 					 				
	 				var params = {
	 					searchKey: $stateParams.searchKey,
	 					userTypeId: $stateParams.userTypeId,
	 					userStatus: $stateParams.userStatus,
	 					p: $stateParams.p,
	 					ps: $stateParams.ps,
	 				};
	 				
	 				return userService.getManageUserPageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Manage User'
		    }
	 	})
	 	.state('root.user.list.add', {
	 		url: '/add',
	 		templateUrl: 'app/user/views/add.html',
	 		controller: 'User.Add as $vm',
	 		data:{
		    	pageTitle: 'Add New User',
		    	isFullScreenPanel: true
		    }
	 	})
	 	.state('root.groupClass', {
	 		url: '/group-class',
	 		template: '<ui-view></ui-view>',
	 		"abstract":true
	 	})
	 	.state('root.groupClass.list', {
	 		url: '/list?searchKey&classTypeId&p&ps&statusId&courseId&centerId&trainerId&weekView',
	 		params:{
				searchKey:{
					value: '',
					squash: true
				},
				p: {
					value: '1',
					squash: true
				},
				ps: {
					value: '10',
					squash: true
				},
				classTypeId:{
					value: '',
					squash: true
				},
				statusId:{
					value: '',
					squash: true
				},
				courseId:{
					value: '',
					squash: true
				},
				centerId:{
					value: '',
					squash: true
				},
				trainerId:{
					value: '',
					squash: true
				},
				weekView:{
					value: '4',
					squash: true
				}
			},
	 		templateUrl: 'app/groupClass/views/list.html',
	 		controller: 'GroupClass.List as $vm',
	 		resolve: {
	 			viewModel: ['groupClassService', '$stateParams', 'authData', function(groupClassService, $stateParams, authData){
		 				
	 				var params = {
 						searchKey: $stateParams.searchKey,
						trainerId: $stateParams.trainerId,
						courseId: $stateParams.courseId,
						centerId: $stateParams.centerId,
						p: $stateParams.p,
						ps: $stateParams.ps,
						classTypeId: $stateParams.classTypeId,
						statusId: $stateParams.statusId,
						weekView: $stateParams.weekView
	 				};
	 				
	 				return groupClassService.getManageGroupClassPageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Manage Group Class'
		    }
	 	})
	 	.state('root.groupClass.list.add', {
	 		url: '/add',
	 		templateUrl: 'app/groupClass/views/add.html',
	 		controller: 'GroupClass.Add as $vm',
	 		resolve: {
	 			viewModel: ['groupClassService', 'viewModel', function(groupClassService, viewModel){
	 				return groupClassService.getCourseHoliday().then(function(res){
	 					
	 					viewModel.listHoliday = res;
	 					
	 					return viewModel;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Add New Group Class',
		    	isFullScreenPanel: true
		    }
	 	})
	 	.state('root.catalouge', {
	 		url: '/catalouge?courseId&unitId&lessonId',
	 		params:{
	 			courseId:{
					value: '0',
					squash: true
				},
				unitId: {
					value: '0',
					squash: true
				},
				lessonId: {
					value: '0',
					squash: true
				}
			},
	 		templateUrl: 'app/catalouge/views/list.html',
	 		controller: 'Catalouge.List as $vm',
	 		resolve: {
	 			viewModel: ['catalougeService', '$stateParams', function(catalougeService, $stateParams){
	 				
	 				var params = {
	 					courseId: $stateParams.courseId,
	 					unitId: $stateParams.unitId,
	 					lessonId: $stateParams.lessonId
	 				};
	 				
	 				return catalougeService.getCatalougePageData(params).then(function(res){
	 					return res;
	 				});
	 			}]
	 		},
	 		data:{
		    	pageTitle: 'Catalouge'
		    }
	 	});
    
    /*error state*/
    $stateProvider.state('root.error', {
        url: '/error/{code:401|404|500}',
        templateProvider: ['$stateParams', '$templateRequest', function ($stateParams, templateRequest) {
            var tplName = 'app/error/views/' + $stateParams.code + ".html";
            return templateRequest(tplName);
        }],
        data:{
	    	pageTitle: 'Error'
	    }
    });
    
    /*course cms state*/
    $stateProvider.state('root.course', {
        url: '/course',
        abstract: true,
        template: '<ui-view></ui-view>'
    });
    
    $stateProvider.state('root.course.manage', {
        url: '/{view:list|card}',
        params: {
        	view:{
        		value: 'card'
        	}
        },
        controller: 'Course.Manage as $vm',
        templateProvider: ['$stateParams', '$templateRequest', function ($stateParams, templateRequest) {
            var tplName = 'app/course/views/' + $stateParams.view + ".html";
            return templateRequest(tplName);
        }],
        resolve:{
        	viewModel: ['courseService', 'trainerService', 'authData', '$q', function(courseService, trainerService, authData, $q){
        		
        		var deferred = $q.defer();
	    		
        		var params = {
 					userId: authData.userId,
 					userTypeId: authData.userTypeId
 				};
        		
        		$q.all([
        			courseService.getListCourse(params),
        			trainerService.getAllTrainer()
        		]).then(function(res){
        			deferred.resolve({
        				listCourse: res[0].data,
        				listTrainer: res[1].data
        			});
        		});
        			    		
	    		return deferred.promise;
        	}]
        },
        data:{
	    	pageTitle: 'Manage Course'
	    }
    });
    
//    "name": "root.schedule",
//	"url": "/schedule/?courseId&trainerId&centerId",
//	"views":[
//		{
//			"name": "@root",
//			"templateUrl": "views/home/dashboard.html",
//			"controller": "dashboardCtrl",
//			"controllerAs": "$ctrl"
//		}
//	],
//	"data": {
//        "pageTitle": "Class schedule"
//    },
    	
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
//    $urlRouterProvider.otherwise('/');
//    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/error/404');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
       
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