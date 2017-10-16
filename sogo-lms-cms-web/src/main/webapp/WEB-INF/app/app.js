var app = angular.module('app', ['ui.router', 'ngSanitize', 'angular-cache', 'ngProgress', 'ui.select', 'ui-notification', 'ui.tinymce']);


app.value('genderArray', ['Unknown', 'Male', 'Female']);

app.run(['$rootScope', '$q', '$state', '$urlRouter', '$timeout', 'notifyService', 'CacheFactory', 'progressService', '$transitions', 'sharedService', '$trace',
	function($rootScope, $q, $state, $urlRouter, $timeout, notifyService, CacheFactory, progressService, $transitions, sharedService, $trace){
	
	$rootScope.pageLoaded = false;
	$rootScope.appName = 'LMS';
	$rootScope.SERVER_DATE_FORMAT = "YYYY-MM-DD";
	$rootScope.FULL_CALENDAR_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss";
	$rootScope.currentYear = new Date().getFullYear();
	$rootScope.currentDate = moment(new Date()).format('DD/MM/YYYY');
	$rootScope.defaultPageSize = 10;
	$rootScope.notifyService = notifyService;
	$rootScope.sessionUserId = 0;
	//$rootScope.isAdmin = sessionService.isAdmin(); 
	$rootScope.defaultPassword = '1234567';
	$rootScope.noAvatarImgUrl = '/images/no-avatar.jpg';
	//$rootScope.isAdmin = sessionService.isAdmin();
	$rootScope.minSearchItem = 5;
	$rootScope.isLoginPage = false;
	$rootScope.isPanelFullScreenPage = false;
	$rootScope.sessionInfo = [];
	
	$trace.enable('TRANSITION');
	
	$rootScope.tinymceOptions = {
	    plugins: 'link image code autoresize table',
	    menubar:'edit insert format table',
	    statusbar: false,
	    baseURL: '/libs/tinymce',
	    skin: 'lightgray',
	    theme : 'modern',
	    inline: false,
	    autoresize_min_height: 200,
	    autoresize_max_height: 500,
	    autoresize_bottom_margin: 10,
	    toolbar: 'fontselect | fontsizeselect | undo redo | bold italic underline | alignleft aligncenter alignright | image | table | code',
	    font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace,Times New Roman=times new roman,times,serif;Proxima Nova=ProximaNova',
	    fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 36px',
	    // enable title field in the Image dialog
	    image_title: true, 
	    // enable automatic uploads of images represented by blob or data URIs
	    automatic_uploads: true,
	    images_upload_url: 'Upload',
	    images_upload_base_path: window.imageDomain,
	    file_picker_types: 'image', 
	    // custom image picker
	    file_picker_callback: function(cb, value, meta) {
	      var input = document.createElement('input');
	      input.setAttribute('type', 'file');
	      input.setAttribute('accept', 'image/*');
	      
	      // Note: In modern browsers input[type="file"] is functional without 
	      // even adding it to the DOM, but that might not be the case in some older
	      // or quirky browsers like IE, so you might want to add it to the DOM
	      // just in case, and visually hide it. And do not forget do remove it
	      // once you do not need it anymore.

	      input.onchange = function() {
	        var file = this.files[0];
	        
	        var reader = new FileReader();
	        reader.onload = function () {
	          // Note: Now we need to register the blob in TinyMCEs image blob
	          // registry. In the next release this part hopefully won't be
	          // necessary, as we are looking to handle it internally.
	          var id = 'blobid' + (new Date()).getTime();
	          var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
	          var base64 = reader.result.split(',')[1];
	          var blobInfo = blobCache.create(id, file, base64);
	          blobCache.add(blobInfo);

	          // call the callback and populate the Title field with the file name
	          cb(blobInfo.blobUri(), { title: file.name });
	        };
	        reader.readAsDataURL(file);
	      };
	      
	      input.click();
	    },
	    setup: function (editor) {
	    	editor.shortcuts.add('meta+s', 'save' , function() { 
	    		$rootScope.$broadcast("editorSave", editor.getElement());
	    	});
	    	
//	    	editor.shortcuts.add('esc', 'cancel' , function() {
//	    		console.log('cancel');
//	    		//$rootScope.$broadcast("editorSave", editor.getElement());
//	    	});
	    	
//            editor.on('change', function () {
//                editor.save();
//
//                $('#' + editor.id).valid();
//            });

//            editor.on('init', function () {
//                this.getDoc().body.style.fontSize = '14px';
//                this.getDoc().body.style.fontFamily = 'Open Sans, "Helvetica Neue",Helvetica,Arial,sans-serif';
//            });
	    }
	  };
//	$rootScope.editorFile;
//	$rootScope.uploadEditorImage = function(ele){		
//		filerUploader.uploadFileToUrl(ele.files[0], '/UploadServlet');
//	};
//	
//	$urlRouterRef = $urlRouter;
	
	//check show loading background
	$rootScope.IsShowLoading = function () {
        return progressService.status() > 0 && progressService.status() < 100;
    };
//	
//    $script.urlArgs('v=' + appVersion);
//	$script.path('/app/');
//	$script.ready(['app.configs.js'], function(){
//		console.log('ready');
//	}, function(notFound){
//		console.log(notFound);
//	});
	
//	$script('app.configs.ad.js', function(){
//		
//	});
	
	/*global event*/
	$rootScope.doLogout = function(){
    	sharedService.doLogout().then(function(){
    		var refUrl = encodeURIComponent(window.location.pathname + window.location.search);
    		$state.go('login', { ref: refUrl });
    	});
    };
	
	//broadcast event click on document
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
	
	angular.element(document).on("keydown", function(e) {
		
		if((e.charCode == 27 || e.which == 27 || e.keyCode == 27) && $rootScope.isPanelFullScreenPage){
			//if press esc on fullscreen popup
			$state.go($state.$current.parent , $state.params, { reload: false });
		}
		
	});
	
    $rootScope.$on('updateSession', function(){
    	
    }); 
		
	//init event state change
    
    $transitions.onSuccess({ to : 'login' }, function(trans) {
    	$rootScope.isLoginPage = true;
	  });
    
    $transitions.onSuccess({ to : 'root.error' }, function(trans) {
		$rootScope.isErrorPage = true;
	  });
    
    $transitions.onSuccess({ to : 'root.**' }, function(trans) {
    	$rootScope.isLoginPage = false;
    	
    	var toState = trans.$to();
    	
    	if(toState.data.isFullScreenPanel){
    		$rootScope.isPanelFullScreenPage = true;
    	}
    	else{
    		$rootScope.isPanelFullScreenPage = false;
    	}
    	
    	
	  });
    
	$transitions.onStart({ }, function(trans) {
		progressService.start();
	  });
	
	$transitions.onSuccess({ }, function(trans) {
		
		progressService.complete();
		if(!$('body').hasClass('onload-check'))
		{
	    	$timeout(function(){
	  			common.init();
	  		}, 1);
		}
//		progressService.complete();
	});
	
	$transitions.onError({ }, function(trans) {

		var redirectTo = trans.error().detail ? trans.error().detail.redirectTo : null;
		var rejectionType = trans.error().type ? trans.error().type : 0;
		
		if(redirectTo && redirectTo == 'login'){/*if redirect to login*/
			var toState = trans.$to();
			var toStateName = toState.name;
			var toStateParams = trans.params('from');
			var toHref = trans.router.stateService.href(toStateName, toStateParams);
			$state.go(redirectTo, { ref: toHref });
		}
		else if(redirectTo){
			$state.go(redirectTo);
		}
		else if (rejectionType == 6){ /*error*/
			$state.go('root.error', { code: 500 });
		}
	});
		
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
		return Enumerable.From($rootScope.userRole)
						 .Count(function(i) {
				            var foundState = Enumerable.From(i.states).Any(
				                function(j) { 
				                    return j.name == routeName; 
				            });
				            return foundState; 
				        }) > 0;
	};
	
//	$q.when(getUserSession())
//	  .then(function(){
//		  $q.when(getModules())
//		  	.then(function(){
//		  		$rootScope.listState = $state.get();
//		  	});
//	  });
	
	
}]);