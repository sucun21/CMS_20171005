(function () {
    angular.module('app.preview').controller('Catalouge.Preview', ['$scope', '$rootScope', '$q', '$timeout', '$sce', 'previewService',
    	function ($scope, $rootScope, $q, $timeout, $sce, previewService) {
    	var vm = this;
    	
    	vm.activityTypeId = 0;
    	vm.isDoneQuiz = false;
    	
    	vm.getActivityTemplate = function(activityTypeId){
        	var res = '';
        	switch(activityTypeId){
    		case 1:
    			res = '/views/preview/activity_QA.html';
    			break;
    		case 2:
    			res = '/views/preview/activity_text.html';
    			break;
    		case 3:
    			res = '/views/preview/activity_video.html';
    			break;
    		case 4:
    			res = '/views/preview/activity_quiz.html';
    			break;
    		}
        	
        	return res;
        };
        
        vm.getQuizAnswerTemplate = function(questionTypeId, questionId){
        	var res = '';
        	switch(questionTypeId){
    		case 1:
    		case 4:
    			res = '/views/preview/quiz_multi.html?v=' + questionId;
    			break;
    		case 3:
    			res = '/views/preview/quiz_single.html?v=' + questionId;
    			break;
    		case 5:
    			res = '/views/preview/quiz_text.html?v=' + questionId;
    			break;
    		}
        	
        	return res;
        };
        
        vm.finishLoadingQuizAnswer = function(){
        	$timeout(function(){
    			componentHandler.upgradeElements(document.querySelector('#dActivityInfo'));
    		}, 1);
        };
        
        vm.computeActivityTimeClass = function($index, $first, $last, activity){
        	var result = '';
        	
        	var currentActivityIndex = 0;
        	
        	angular.forEach(vm.listActivity, function(item, index){
        		if(item.activityId == vm.activityId){
        			currentActivityIndex = index;
        		}
        	});
        	
        	if($first){
        		result = 'bg_first';
        	}
        	else if($last){
        		result = 'bg_last';
        	}
        	else{
        		result = 'bg_middle';
        	}
        	
        	if(activity.activityId == vm.activityId){
        		result += ' active';
        	}
        	else if(activity.activityId == vm.lastDoneActivityId){
        		result += ' last-active';
        	}
        	else if ($index < currentActivityIndex){
        		result += ' past';
        	}
        	
        	return result;
        };
        
        var getActivityDetails = function(activityId){
        	var deferred = $q.defer();
    		previewService.getActivityDetails(activityId).then(function(res) {
    			vm.activityDetails = res.data;
    			deferred.resolve();
    		});

    		return deferred.promise;
        };
        
        var getLessonActivity = function(unitId, lessonId){
    		var deferred = $q.defer();
    		
    		var params = {
    			unitId: unitId,
    			lessonId: lessonId
    		};
    		
    		previewService.getActivityCatalouge(params).then(function(res){
    			vm.listActivity = res.data;
    			deferred.resolve();
    		});
    		
    		return deferred.promise;
    	};
        
        $scope.init = function(unitId, lessonId, activityId){
        	$q.all([
        		getActivityDetails(activityId),
        		getLessonActivity(unitId, lessonId)
        	]).then(function(){
        		vm.activityTypeId = vm.activityDetails.activityTypeId;
        		vm.activityId = activityId;
        		
        		if(vm.activityTypeId == 4){ //quiz
        			previewService.getQuizQuestion(vm.activityId).then(function(res){
        				vm.listQuestion = res.data;
        				
        				if(vm.listQuestion && vm.listQuestion.length > 0){
        					vm.currentQuizQuestion = vm.listQuestion[0];
        					vm.currentQuizIndex = 0;
        				}
        				
        			});
        		}
        		
        	});
        };
        
        vm.computeQuestionPagingClass = function($index, question){
        	var result = '';
        	if(question.questionId == vm.currentQuizQuestion.questionId){
        		result = 'active';
        	}
        	else if(question.isTraineeAnswerRight){
        		result = 'past ok';
        	}
        	else if(question.isTraineeAnswerRight != undefined && !question.isTraineeAnswerRight){
        		result = 'past error';
        	}
        	
        	return result;
        };
        
        vm.isShowPaging = function($index){
        	return (vm.currentQuizIndex == 0 &&  $index <= vm.currentQuizIndex + 2)
    		|| (vm.currentQuizIndex == 1
    				&& vm.currentQuizIndex % 2 == 1 
    				&& $index <= vm.currentQuizIndex + 1
    				&& $index >= vm.currentQuizIndex - 1)
    		|| (vm.currentQuizIndex > 1
    				&&  $index <= vm.currentQuizIndex
    				&& $index >= vm.currentQuizIndex - 2)
    		|| ((vm.currentQuizIndex + 1) == vm.listQuestion.length - 1
    			&& $index >= vm.currentQuizIndex - 3
    			)
    		|| (vm.currentQuizIndex == vm.listQuestion.length - 1
    			&& $index >= vm.currentQuizIndex - 4)
    		|| $index == vm.listQuestion.length - 1
        };
        
        vm.isHidePaging = function($index){
        	return !vm.isShowPaging($index) && vm.listQuestion.length > 5 && ($index + 1) == vm.listQuestion.length - 1;
        };
        
        vm.nextQuizQuestion = function(){
        	vm.traineeAnswerErrorText = '';
        	var hasCheckAnswer = Enumerable.From(vm.currentQuizQuestion.listAnswer).Count(function(x) {return x.isChecked;}) > 0;
        	var checkedAnswer = Enumerable.From(vm.currentQuizQuestion.listAnswer).Where(function(x) {return x.isChecked;}).ToArray();
        	var currenQuestionTypeId = vm.currentQuizQuestion.questionTypeId;
        	
        	if((currenQuestionTypeId == 1 || currenQuestionTypeId == 4) && !hasCheckAnswer){
        		vm.traineeAnswerErrorText = "Please choose an answer";
        	}
        	else if(currenQuestionTypeId == 3 && !vm.currentQuizQuestion.traineeAnswer){
        		vm.traineeAnswerErrorText = "Please choose an answer";
        	}
        	else if (currenQuestionTypeId == 5 && !vm.currentQuizQuestion.traineeAnswer){
        		vm.traineeAnswerErrorText = "Please provide an answer";
        	}
        	else if (currenQuestionTypeId == 5 && vm.currentQuizQuestion.traineeAnswer.length > 2000){
        		vm.traineeAnswerErrorText = "Sorry, your answer is too long (max: 2000 characters)";
        	}
        	else{
        		var rightAnswer = vm.currentQuizQuestion.rightAnswerIndex;
        		var isRightAnswer = false;
        		if(currenQuestionTypeId == 1 || currenQuestionTypeId == 4){ //multi choice
        			var checkResult = true;
        			var rightAnswerArr = rightAnswer.split(',');
        			var traineeAnswer = '';
        			
        			angular.forEach(checkedAnswer, function(answer){
        				traineeAnswer += (traineeAnswer != '' ? ',' : '') + answer.answerIndex.toString();
        				if(rightAnswerArr.indexOf(answer.answerIndex.toString()) == -1){
        					checkResult = false;
        				}
        			});
        			
        			if(checkResult){
        				checkResult = checkedAnswer.length == rightAnswerArr.length;
        			}
        			
        			Enumerable.From(vm.listQuestion)
    				  .First(function(x) { return x.questionId == vm.currentQuizQuestion.questionId;})
    				  .isTraineeAnswerRight = checkResult;
        			Enumerable.From(vm.listQuestion)
    				  .First(function(x) { return x.questionId == vm.currentQuizQuestion.questionId;})
    				  .traineeAnswer = traineeAnswer;
        			
        			isRightAnswer = checkResult;
        		}
        		else if(currenQuestionTypeId == 3){//single choice    		
        			isRightAnswer = vm.currentQuizQuestion.traineeAnswer == rightAnswer;
        			Enumerable.From(vm.listQuestion)
        					  .First(function(x) { return x.questionId == vm.currentQuizQuestion.questionId;})
        					  .isTraineeAnswerRight = isRightAnswer;
        		}
        		else if(currenQuestionTypeId == 5){ //text
        			Enumerable.From(vm.listQuestion)
    				  .First(function(x) { return x.questionId == vm.currentQuizQuestion.questionId;})
    				  .isTraineeAnswerRight = true;
        		}
        		
        		if(!vm.isRedoingQiz && vm.currentQuizIndex + 1 <= vm.listQuestion.length - 1){
        			vm.answerLoaded = false;
    				vm.isLastQuizQuestion = vm.currentQuizIndex + 1 == vm.listQuestion.length - 1;
    				vm.currentQuizIndex += 1;
    				vm.currentQuizQuestion = vm.listQuestion[vm.currentQuizIndex];
    			}
        		else if (vm.isRedoingQiz && !isRightAnswer){
        			vm.traineeAnswerErrorText = "Sorry, this is not correct";
        		}
        		else if(vm.isRedoingQiz && isRightAnswer && vm.currentErrorQuizIndex + 1 <= vm.errorQuestion.length - 1){
        	    	vm.currentErrorQuizIndex += 1;
        	    	vm.currentQuizQuestion = vm.errorQuestion[vm.currentErrorQuizIndex];
        	    	vm.currentQuizIndex = vm.listQuestion.indexOf(vm.currentQuizQuestion);
        	    	vm.currentQuizType = vm.currentQuizQuestion.questionTypeId == 3 ? 'radio' : 'checkbox';
        			vm.isLastQuizQuestion = vm.currentQuizIndex == vm.listQuestion.length - 1;
        		}
        		else{
        			vm.currentQuizIndex = vm.listQuestion.length - 1;
        			var hasError = Enumerable.From(vm.listQuestion).Count(function(x) {return !x.isTraineeAnswerRight;}) > 0;    			
        	    	
    				if(!vm.isRedoingQiz) {
    	    			var listAnswer = Enumerable.From(vm.listQuestion)
    					   .Select("x => { questionId: x['questionId'], traineeAnswer: x['traineeAnswer'].toString() , isTraineeAnswerRight: x['isTraineeAnswerRight'] }")
    					   .ToArray();
    					
    					vm.isDoneQuiz = true;
    					vm.hasErrorQuiz = hasError;
//    					vm.isDoneLesson = res.data.isDoneLesson;
//    					vm.isDoneUnit = res.data.isDoneUnit;
//    					vm.nextLessonId = res.data.nextLessonId;
    				}
    				else{
    					vm.isDoneQuiz = true;
    					vm.hasErrorQuiz = hasError;
    				}
        		}
        	}
        	
        };
        
        vm.redoQuiz = function(){
        	vm.isRedoingQiz = true;
        	vm.isDoneQuiz = false;
        	vm.errorQuestion = Enumerable.From(vm.listQuestion).Where(function(x) {return !x.isTraineeAnswerRight;}).ToArray();
        	vm.currentErrorQuizIndex = 0;
        	vm.currentQuizQuestion = vm.errorQuestion[0];
        	vm.currentQuizIndex = vm.listQuestion.indexOf(vm.currentQuizQuestion);
        	vm.currentQuizType = vm.currentQuizQuestion.questionTypeId == 3 ? 'radio' : 'checkbox';
    		vm.isLastQuizQuestion = vm.currentQuizIndex == vm.listQuestion.length - 1;
        };
        
        vm.processingActivityData = function(content){
        	content = content.replace(/href/g, 'target="_blank" href');
        	return $sce.trustAsHtml(content);
        };
        
        vm.genVideoTag = function(content){
        	return $sce.trustAsHtml(content);
        };
    	
    }]);
})();