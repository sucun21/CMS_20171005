(function () {
    'use strict';
    angular.module('app').controller('Course.Manage', 
		['$scope', '$state', '$timeout', 'viewModel', 'courseService', 'notificationService', 'progressService', 'fileUploader', 'trainerService',
    	function($scope, $state, $timeout, viewModel, courseService, notificationService, progressService, fileUploader, trainerService){
    	
    	var vm = this;
    	    	
    	vm.listCourse = viewModel.listCourse;
    	vm.listTrainer = viewModel.listTrainer;
    	
    	angular.forEach(vm.listCourse, function(item){
    		
    		var params = {
    			courseId: item.courseId	
    		};
    		
    		courseService.getUnitFilterCourse(params).then(function(res){
    			item.listUnit = res.data;
    		});
    		
    		
    		
    		item.listTrainer = Enumerable.From(item.listTrainer).Select('$.fullName').ToArray();
    	});
	  
	  vm.addNewCourse = function () {
		  var params = {
            courseId:0,
            courseTitle: "",
            courseDes: "",
            courseShortDes: "",
            executeType: "I"
        };
		  courseService.executeCourse(params).then(function (res) {
			  console.log(res);
			  if(res && res.data && res.data.id == 1){
				  notificationService.success('Course Added');
				  $state.reload();  
			  }
			  else{
				  notificationService.error(res.message);
			  }
			  
          });
      };
      
      vm.saveCourseInfo = function(item, type){
    	  item.executeType = 'U';
    	  item.updateField = type;
    	  progressService.start();
		  courseService.executeCourse(item).then(function (res) {			  
			  if(res && res.data && res.data.id == 1){
				  notificationService.success('Course Updated');
				  
				  switch(type){
				  	case 'title':
				  		item.isEditingTitle = false;
				  		break;
				  	case 'image':
				  		item.isEditingCourseImage = false;
				  		break;
				  	case 'shortDes':
				  		item.isEditingShortDescription = false;
				  		break;
				  	case 'des':
				  		item.isEditingDescription = false;
				  		break;
				  }				  
			  }
			  else{
				  notificationService.error(res.message);
			  }
			  
			  progressService.complete();
          });
      };
      
      vm.enableTitleEdit = function(course){
    	  course.isEditingTitle = true;
    	  course.oldTitle = course.courseTitle;
    	  
    	  
    	  $timeout(function(){
    		  angular.element(document.querySelector('#txtCourseTitle_' + course.courseId)).focus(); 
    	  });
      };
      
      vm.discardTitleEdit = function(course){
    	  course.isEditingTitle = false;
    	  course.courseTitle = course.oldTitle;
      };
      
      vm.saveTitle = function(course, e){    	  
    	  if(!e || (e && (e.charCode == 13 || e.keyCode == 13 || e.which == 13))){
    		  //save
    		  vm.saveCourseInfo(course, 'title');
    	  }
    	  else if(e && (e.charCode == 27 || e.keyCode == 27 || e.which == 27)){
    		  vm.discardTitleEdit(course);
    	  }
      };
      
      vm.enableImageEdit = function(course){
    	  course.isEditingCourseImage = true;
    	  course.oldImage = course.courseImage;
      };
      
      vm.discardImageEdit = function(course){
    	  course.isEditingCourseImage = false;
    	  course.courseImage = course.oldImage;
      };
      
      vm.saveImage = function(course){  
    	  
    	  if(course.fileModel)
    	  {
	    	  fileUploader.uploadFileToUrl(course.fileModel, '/Upload').then(function(result){
	    		  if(result && result.data && result.data.id == 1){
	    			  
	    			  course.courseImage = result.data.location;
	    			  course.fileModel = null;
	    			  vm.saveCourseInfo(course, 'image');
	    		  }
	    		  else{
	    			  notificationService.error('Error occur when upload image');
	    		  }
	    	  });
    	  }
    	  else{
    		  course.isEditingCourseImage = false;
    	  }
      };
      
      vm.enableShortDescriptionEdit = function(course){
    	  course.isEditingShortDescription = true;
    	  course.oldShortDescription = course.courseShortDes;
      };
      
      vm.discardShortDescriptionEdit = function(course){
    	  course.isEditingShortDescription = false;
    	  course.courseShortDes = course.oldShortDescription;
      };
      
      vm.saveShortDescription = function(course){
    	  vm.saveCourseInfo(course, 'shortDes');
      };
      
      vm.enableDescriptionEdit = function(course){
    	  course.isEditingDescription = true;
    	  course.oldDescription = course.courseDes;
      };
      
      vm.discardDescriptionEdit = function(course){
    	  course.isEditingDescription = false;
    	  course.courseDes = course.oldDescription;
      };
      
      vm.saveDescription = function(course){
    	  vm.saveCourseInfo(course, 'des');
      };
      
      
      $scope.$on('editorSave', function($event, ele){
	    ele = $(ele);
	    var courseId = ele.data('course-id');
	    var type = ele.data('type');
	    var course = Enumerable.From(vm.listCourse).FirstOrDefault(null, '$.courseId == '  + courseId);
	    if(course){
	    	switch(type){
	    		case 'shortDes':
	    			vm.saveShortDescription(course);
	    			break;
	    		case 'des':
	    			vm.saveDescription(course);
	    			break;
	    	}
	    }
	});
      
      vm.onSelectCourseTrainer = function(trainer, course){
    	  updateCourseTrainer(course, trainer, 'I');
      };
      
      vm.onRemoveCourseTrainer = function(trainer, course){
    	  updateCourseTrainer(course, trainer, 'D');
      };
      
      var updateCourseTrainer = function(course, trainer, executeType){
    	  progressService.start();
    	  var params = {
    		courseId: course.courseId,
    		trainerId: trainer.userId,
    		executeType: executeType
    	  };
    	  trainerService.executeTrainerCourse(params).then(function(res){
    		  
    		  if(res && res.data.id == 1){
    			  notificationService.success('Trainer added');  
    		  }
    		  else{
    			  notificationService.error(res.data.message);
    		  }
    		  progressService.complete();
    	  });
      };
      
            
//      $scope.onSelectCourseImage = function(ele, course){
//    	console.log(ele);
//    	console.log(course);
//      };
//        $scope.listcourse = [];
//        $scope.view_type = true;
//        $scope.init = function () {
//            console.log("init courses controller");
//            var path = $location.path();
//            if (path === '/courses/view_card') {
//                $scope.view_type = true;
//            } else {
//                $scope.view_type = false;
//            }
//            CoursesService.getListCourse().then(function (res) {
//                if (res.is_success === true) {
//                    $scope.listcourse = res.data;
//                    var trainer_id;
//                    var data_trainer_res = [];
//                    for (var i in $scope.listcourse) {
//                        trainer_id = $scope.listcourse[i].courseId;
//                        TrainerService.getTrainerByCourseId(trainer_id).then(function (res_trainer) {
//                            if (res_trainer.is_success === true) {
//                                data_trainer_res = res_trainer.data;
//                                $scope.listcourse[i].data_trainer_res = data_trainer_res;
//
//                            } else {
//                                $scope.listcourse[i].data_trainer_res = [];
//                            }
////                            console.log("course " + i + ": " + JSON.stringify($scope.listcourse[i]));
//                        });
//                    }
//                }
//            });
//        };
//        $scope.init();
//
//        $scope.viewcard = function () {
//            console.log("view card");
//            $scope.view_type = true;
//            $location.path('/courses/view_card');
//        };
//
//        $scope.viewlist = function () {
//            console.log("view list");
//            $scope.view_type = false;
//            $location.path('/courses/view_list');
//        };
//
//        $scope.getAllTrainer = function () {
//            console.log("get all trainer");
//
//        };
//
//        $scope.addnewcourse = function () {
//            console.log("add new course");
//            CoursesService.insertCourse().then(function (res) {
//                $scope.init();
//            });
//        };
//        
//        $scope.updateShortDesc = function(item) {
//            $scope.item = item;
//            var short_desc = $scope.item.courseShortDes;
//            console.log("short_desc: " + short_desc);
//            console.log("item update short Desc: " + JSON.stringify(item));
//            CoursesService.updateShortDesc(item.courseId, item.courseTitle, item.courseDes, short_desc).then(function(res){
//                $scope.init();
//            });
//        };
//        $scope.updateDescription = function(item) {
//            $scope.item = item;
//            var desc = $scope.item.courseDes;
//            console.log("desc: " + desc);
//            console.log("item update desc: " + JSON.stringify(item));
//            CoursesService.updateDesc(item.courseId, item.courseTitle, desc, item.courseShortDes).then(function(res){
//                $scope.init();
//            });
//        };
    	
    }]);
})();