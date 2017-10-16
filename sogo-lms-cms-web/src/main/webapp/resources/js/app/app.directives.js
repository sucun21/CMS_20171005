app.directive('accessibleForm', function () {
    return {
        restrict: 'A',
        link: function (scope, elem) {

            // set up event handler on the form element
            elem.on('submit', function () {

                // find the first invalid element
                var firstInvalid = elem[0].querySelector('.ng-invalid');

                // if we find one, set focus
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            });
        }
    };
});

app.directive('title', ['$rootScope', '$timeout', '$transitions',
  function ($rootScope, $timeout, $transitions) {
  	return {
  		link: function () {

  			var listener = function (toState) {
  				console.log(toState);
  				$timeout(function () {
  				    $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle + ' - Learning Management System' : '';
  				});
  			};
  			
  			$transitions.onStart({ }, function(trans) {
  				listener(trans.$to());
  			  });
  		}
  	};
  }
]);

app.directive("passwordVerify", function () {
    return {
        require: "ngModel",
        scope: {
            passwordVerify: '='
        },
        link: function (scope, element, attrs, ctrl) {
            scope.$watch(function () {
                var combined;

                if (scope.passwordVerify || ctrl.$viewValue) {
                    combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                }
                return combined;
            }, function (value) {
                if (value) {
                    ctrl.$parsers.unshift(function (viewValue) {
                        var origin = scope.passwordVerify;
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
        }
    };
});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
        	  attrs.$set('src', scope.noAvatarImgUrl);
          });
        }
    }
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.directive('ngMin', function () {
	
	function isEmpty(value) {
	    return angular.isUndefined(value) || value === '' || value === null || value !== value;
	}
	
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMin, function () {
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var minValidator = function (value) {
                var min = attr.ngMin || 0;
                if (!isEmpty(value)) {
                	if(isNaN(value)){
                		ctrl.$setValidity('number', false);
                		return undefined;
                	}
                	else if(Number(value) < min){
                		ctrl.$setValidity('min', false);
                		return undefined;
                	}
                    return value;
                } else {
                    ctrl.$setValidity('min', true);
                    return value;
                }
            };

            ctrl.$parsers.push(minValidator);
            ctrl.$formatters.push(minValidator);
        }
    };
});

app.directive('ngMax', function () {
	
	function isEmpty(value) {
	    return angular.isUndefined(value) || value === '' || value === null || value !== value;
	}
	
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMax, function () {
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function (value) {
                var max = attr.ngMax || Infinity;
                if (!isEmpty(value)) {
                	
                	if(isNaN(value)){
                		ctrl.$setValidity('number', false);
                		return undefined;
                	}
                	else if(Number(value) > max){
                		ctrl.$setValidity('max', false);
                		return undefined;
                	}
                    return value;
                } else {
                    ctrl.$setValidity('max', true);
                    return value;
                }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };
});

app.directive('ngRange', [function() {
	
	function isEmpty(value) {
	    return angular.isUndefined(value) || value === '' || value === null || value !== value;
	}
	
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            
            var rangeValidator = function(value) {
            	var range = attrs.ngRange.split(',').map(Number);
            	if (!isEmpty(value)) {
                	
                	if(isNaN(value)){
                		ctrl.$setValidity('number', false);
                		return undefined;
                	}
                	else if(Number(value) < range[0] || Number(value) > range[1]){
                		ctrl.$setValidity('range', false);
                		return undefined;
                	}
                    return value;
                } else {
                    ctrl.$setValidity('range', true);
                    return '';
                }
            };
            
            ctrl.$parsers.push(rangeValidator);
            ctrl.$formatters.push(rangeValidator);
        }
    };
}]);

app.directive('select2', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
        	$(element).select2();
//            attrs.$observe('value', function(val){
//            	console.log(val);
//            });
            
//        	$(element).on('change', function() {
//                console.log('on change event');
//                var val = $(this).val();
//                console.log(val);
//                scope.$apply(function(){
//                    //will cause the ng-model to be updated.
//                    ngModel.$setViewValue(val);
//                });
//           });
//           ngModel.$render = function() {
//                //if this is called, the model was changed outside of select, and we need to set the value
//               //not sure what the select2 api is, but something like:
//               element.value = ngModel.$viewValue;
//           };
        	
//            scope.$watch(function () {
//                return ngModel.$modelValue;
//             }, function(newValue, oldVal) {
////            	 console.log(newValue);
////            	 console.log(oldVal);
////            	 if($(element).data('select2')){
////            		 console.log($(element));
////            		 $(element).select2();
////            		 //$(element).val(newValue).trigger('change');
////            		 //$(element).select2('val', newValue);
////            	 }
//             });
            
//            scope.$watch('ngModel', function(val){
//            	console.log(val);
//            });
        }
    };
});

app.directive('datepicker', function () {
	
  return {
    restrict: 'E',
    require: 'ngModel',
    replace: true,
    templateUrl: 'views/components/datepicker.html',
    scope: {
		dateFormat: '@',
		dateMin: '@',
		dateMax: '@',
		placeholder:'@',
		daysOfWeekDisabled: '=',
		outputFormat:'@',
		onSelect: '&',
		model: '=ngModel',
		ngClass: '=ngClass'
	},
    link: function (scope, elem, attrs, ngModelCtrl) {
    	
      scope.dateFormat = angular.isUndefined(scope.dateFormat) ? 'DD/MM/YYYY' : scope.dateFormat;
      scope.outputFormat = angular.isUndefined(scope.outputFormat) ? 'YYYY-MM-DD' : scope.outputFormat;
      
      var dpEle = $(elem).find('input[type=text]:first');
      
      var initDatepicker = function(){
    	  
    	  //destroy nếu đã có
    	  if(dpEle.data('DateTimePicker') !== undefined){
    		  dpEle.data('DateTimePicker').destroy();
    		  dpEle.unbind('dp.change');
    	  }
    	  
    	  //init option
          var options = {
    		  format: scope.dateFormat,
    		  useCurrent: false,
    		  pickTime: false,
    		  minDate: scope.dateMin,
    		  daysOfWeekDisabled: scope.daysOfWeekDisabled
          };
          
          dpEle.datetimepicker(options);
          
          dpEle.on('dp.change', function(e) {
        	  var momentDate = e.date ? moment(e.date) : null;
        	  var val = '';
        	  
        	  
        	  if(momentDate != null){
        		  switch (scope.outputFormat){
	        		  case 'timestamp':
	        			  val = momentDate.valueOf();
	        			  break;
	        		  default:
	        			  val = momentDate.format(scope.outputFormat);
	        			  break;
        		  };
    		      
    		      scope.$apply(function () {
    		          ngModelCtrl.$setViewValue(val);
    		        });
            	  
            	  if(scope.onSelect !== undefined && momentDate != null)
            		  scope.onSelect({date: momentDate, formatedDate: val, weekDay: momentDate.weekday()});
        	  }
          });
      };
      
      scope.$watch('daysOfWeekDisabled', function(newVal, oldVal){
    	  
    	  scope.daysOfWeekDisabled = newVal;
    	  
    	  initDatepicker();
      });
      
//      attrs.$observe('dateMin', function(comparisonModel){
//	      // Whenever the comparison model changes we'll re-validate
//	      return validate(ctrl.$viewValue);
//	    });
      
      scope.$watch('dateMin', function(newVal, oldVal){
    	  if(newVal != undefined){
    		  dpEle.data("DateTimePicker").setMinDate(newVal);
    	  }
      });
      
      scope.$watch('dateMax', function(newVal, oldVal){
    	  if(newVal != undefined){
    		  dpEle.data("DateTimePicker").setMaxDate(newVal);
    	  }
      });
      
      scope.$watch('model', function(newVal, oldVal){
    	  if(newVal === undefined){
    		  dpEle.data('DateTimePicker').setValue('');
    	  }
      });
      
      initDatepicker();
    }
  }
});

app.directive('timepicker', function(){
	return {
	    restrict: 'E',
	    require: 'ngModel',
	    replace: true,
	    templateUrl: 'views/components/timepicker.html',
	    scope: {
	    	timeFormat: '@',
			minuteStepping: '@',
			placeholder:'@',
			outputFormat:'@',
			onSelect: '&',
			model: '=ngModel',
			ngClass: '=ngClass'
		},
	    link: function (scope, elem, attrs, ngModelCtrl) {
	    	
	      scope.timeFormat = angular.isUndefined(scope.timeFormat) ? 'HH:mm' : scope.timeFormat;
	      scope.outputFormat = angular.isUndefined(scope.outputFormat) ? 'HH:mm' : scope.outputFormat;
	      scope.minuteStepping = !isNaN(scope.minuteStepping) ? Number(scope.minuteStepping) : 1;
	      scope.selectedVal = null;
	      
	      var dpEle = $(elem).find('input[type=text]:first');
	      
	      var initTimepicker = function(){
	    	  
	    	  //destroy nếu đã có
	    	  if(dpEle.data('DateTimePicker') !== undefined){
	    		  dpEle.data('DateTimePicker').destroy();
	    		  dpEle.unbind('dp.change');
	    	  }
	    	  
	    	  //init option
	          var options = {
	        	  format: scope.timeFormat,
	        	  useCurrent: true,
	    		  pickDate: false,
	    		  useSeconds: false,
	    		  minuteStepping: scope.minuteStepping
	          };
	          
	          dpEle.datetimepicker(options);
	          
	          dpEle.on('dp.change', function(e) {
	        	  
	        	  var momentTime = e.date ? moment(e.date) : null;	        	  
	        	  var val = '';
	        	  
	        	  
	        	  if(momentTime != null){
	        		  switch (scope.outputFormat){
		        		  case 'timestamp':
		        			  val = momentTime.valueOf();
		        			  break;
		        		  default:
		        			  val = momentTime.format(scope.outputFormat);
		        			  break;
	        		  };
	    		      
	    		      scope.$apply(function () {
	    		          ngModelCtrl.$setViewValue(val);
	    		        });
	            	  
	            	  if(scope.onSelect !== undefined && momentTime != null)
	            		  scope.onSelect({date: momentTime, formatedTime: val});
	        	  }
	          });
	      };
	      
	      scope.$watch('model', function(newVal, oldVal){
	    	  if(newVal === undefined){
	    		  dpEle.data('DateTimePicker').setValue('');
	    	  }
	      });
	      
	      initTimepicker();
	    }
	  }
});

app.directive('fcEvent', function(){
	return {
	    restrict: 'E',
	    replace: true,
	    templateUrl: 'views/components/fc-event.html',
	    scope: {
			event: '=',
			style: '@',
			isAdmin: '='
			
		},
	    link: function (scope, elem, attrs, ngModelCtrl) {
	    	
	    	var event = scope.event;
	    	
	    	scope.eventClass = '';
        	if(event.isIncomingClass){
        		scope.eventClass = 'fc-event-primary';
        	}
        	else if(event.isCheckAttendance){
        		scope.eventClass = 'fc-event-success';
        	}
        	else if(!event.isCheckAttendance){
        		scope.eventClass = 'fc-event-warning';
        	}
	  }
	}
});

app.directive('pagination', ['$rootScope', '$state', function($rootScope, $state){
	return {
	    restrict: 'E',
	    replace: true,
	    templateUrl: 'views/components/paging.html',
	    scope: {
	    	params: '=',
	    	totalRow: '='
		},
	    link: function (scope, elem, attrs) {
	    	
//	    	scope.startIndex = 0;
//	        scope.endIndex = 0;
//	        scope.totalCount = 0;
	        
	        scope.IsShowCount = true;
	        scope.stateName = $state.current.name;
	        scope.CountShowPage = 6;
//	        scope.params = $state.params;
	        scope.pageNumber = scope.params.p ? scope.params.p : 1;
	        
	        scope.rowPerPage = 0;
	        scope.startNum = 0;
	        scope.endNum = 0;
	        scope.startIndex = 1;
	        scope.endIndex = 1;
	        
	        scope.rowPerPage = scope.params.ps ? scope.params.ps : $rootScope.defaultPageSize;
	        scope.totalPage = Math.ceil(scope.totalRow / scope.rowPerPage);
	        
	        scope.startIndex = ((scope.pageNumber - 1) * scope.rowPerPage) + 1;
	        scope.endIndex = Number(scope.startIndex) + Number(scope.rowPerPage) - 1;
	        scope.endIndex = scope.endIndex >= scope.totalRow ? scope.totalRow : scope.endIndex;

	        if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage <= scope.CountShowPage) {
	            scope.startNum = 1;
	            scope.endNum = scope.CountShowPage;
	        }
	        else if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage > scope.CountShowPage){
	        	scope.startNum = 1;
	            scope.endNum = scope.CountShowPage - 1;
	        }
	        else if (scope.pageNumber > (scope.totalPage - scope.CountShowPage / 2) && scope.totalPage > scope.CountShowPage) {
	            scope.endNum = scope.totalPage;
	            scope.startNum = scope.endNum - (scope.CountShowPage / 2) - 1;
	        }
	        else {
	            scope.startNum = scope.pageNumber - scope.CountShowPage / 2 + 1;
	            scope.endNum = scope.startNum + scope.CountShowPage / 2;
	        }

	        if (scope.startNum < 1) {
	            scope.startNum = 1;
	        }
	        if (scope.endNum > scope.totalPage) {
	            scope.endNum = scope.totalPage;
	        }
	        
//	        var initScope = function(totalRow){
//	        	
//	        	scope.apply(function(){	        		
//		        	
//	        	});
//	        };
	        
//	        initScope(scope.totalRow);
	        
	        scope.getNumber = function (num) {
	            return new Array(num);
	        };
	        
	        
	        scope.GoToPage = function (p, e) {
	        	e.preventDefault();
	            if (p != scope.params.p) {
	                $state.go('.', angular.extend(scope.params, { p: p }), { notify: false });
	            }
	        };
	        
	        scope.PreviousPage = function () {
	            if (scope.params.p > 1) {
	            	$state.go('.', angular.extend(scope.params, { p: Number(scope.params.p) - 1 }), { notify: false });
	            }
	        };

	        scope.NextPage = function (e) {
	        	e.preventDefault();
	            if (scope.params.p < scope.totalPage) {
	            	$state.go('.', angular.extend(scope.params, { p: Number(scope.params.p) + 1 }), { notify: false });
	            }
	        };
	        
	        scope.$watch('totalRow', function(val){
	        	if(val){
//	        		initScope(val);
	        		scope.totalPage = Math.ceil(scope.totalRow / scope.rowPerPage);

	    	        if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage <= scope.CountShowPage) {
	    	            scope.startNum = 1;
	    	            scope.endNum = scope.CountShowPage;
	    	        }
	    	        else if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage > scope.CountShowPage){
	    	        	scope.startNum = 1;
	    	            scope.endNum = scope.CountShowPage - 1;
	    	        }
	    	        else if (scope.pageNumber > (scope.totalPage - scope.CountShowPage / 2) && scope.totalPage > scope.CountShowPage) {
	    	            scope.endNum = scope.totalPage;
	    	            scope.startNum = scope.endNum - (scope.CountShowPage / 2) - 1;
	    	        }
	    	        else {
	    	            scope.startNum = scope.pageNumber - scope.CountShowPage / 2 + 1;
	    	            scope.endNum = scope.startNum + scope.CountShowPage / 2;
	    	        }

	    	        if (scope.startNum < 1) {
	    	            scope.startNum = 1;
	    	        }
	    	        if (scope.endNum > scope.totalPage) {
	    	            scope.endNum = scope.totalPage;
	    	        }
//	        		scope.$apply(function(){
//	        			
//	        		});
	        	}
	        });
	        
	        scope.$watch('params.p', function(val){
	        	if(val){
	        		scope.pageNumber = val;
	        		scope.startIndex = ((scope.pageNumber - 1) * scope.rowPerPage) + 1;
	    	        scope.endIndex = Number(scope.startIndex) + Number(scope.rowPerPage) - 1;
	    	        scope.endIndex = scope.endIndex >= scope.totalRow ? scope.totalRow : scope.endIndex;
	    	        if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage <= scope.CountShowPage) {
	    	            scope.startNum = 1;
	    	            scope.endNum = scope.CountShowPage;
	    	        }
	    	        else if (scope.pageNumber <= scope.CountShowPage / 2 && scope.totalPage > scope.CountShowPage){
	    	        	scope.startNum = 1;
	    	            scope.endNum = scope.CountShowPage - 1;
	    	        }
	    	        else if (scope.pageNumber > (scope.totalPage - scope.CountShowPage / 2) && scope.totalPage > scope.CountShowPage) {
	    	            scope.endNum = scope.totalPage;
	    	            scope.startNum = scope.endNum - (scope.CountShowPage / 2) - 1;
	    	        }
	    	        else {
	    	            scope.startNum = scope.pageNumber - scope.CountShowPage / 2 + 1;
	    	            scope.endNum = scope.startNum + scope.CountShowPage / 2;
	    	        }

	    	        if (scope.startNum < 1) {
	    	            scope.startNum = 1;
	    	        }
	    	        if (scope.endNum > scope.totalPage) {
	    	            scope.endNum = scope.totalPage;
	    	        }
	        	}
	        });
	    }
	}
}]);

app.directive('bootstrapCollapse', function(){
	return {
	    restrict: 'A',
	    link: function (scope, elem, attrs, ngModelCtrl) {
	    	$(elem).collapse({
	    		toggle: false
	    	});
	    }
	}
});

app.directive("dropdown", ['$rootScope', '$timeout', function($rootScope, $timeout) {
	return {
		restrict: "E",
		templateUrl: "views/components/dropdown.html",
		scope: {
			placeholder: '@',
			list: '=',
			selected: '=',
			value: '@',
			text: '@',
			onSelect: '&?',
			allowFilter: '@',
			multiple: '@'
		},
		link: function(scope, ele, attrs) {
			
			var itemCountToShowFilter = 5;
			
			scope.listVisible = false;
			scope.isPlaceholder = true;
			
			scope.select = function(item) {
				if(item == undefined){
					scope.selected = undefined;
					scope.selectedItem = undefined;
					scope.display = '';
					scope.isPlaceholder = true;
				}
				else if(scope.multiple == undefined && !scope.isSelected(item))
				{
					scope.isPlaceholder = false;
					scope.selected = item[scope.value].toString();
					scope.selectedItem = item;
					scope.display = item !== undefined ? item[scope.text] : '';
				}
				else if (scope.multiple == undefined && scope.isSelected(item)){
					scope.isPlaceholder = true;
					scope.selected = undefined;
					scope.selectedItem = undefined;
				}
				else if(scope.multiple != undefined && (scope.selected == null || !scope.isSelected(item))){
					scope.isPlaceholder = false;					
					var arr = scope.selected != undefined ? scope.selected.split(',') : [];
					arr.push(item[scope.value].toString());					
					scope.selected = arr.join(',');
					scope.display = arr.length > 1 ? arr.length + ' ' + scope.placeholder + ' selected' : item[scope.text];
				}
				else if(scope.multiple != undefined && scope.isSelected(item)){
					
					var arr = scope.selected.split(',');
					var index = arr.indexOf(item[scope.value].toString());
					
					if (index > -1) {
						arr.splice(index, 1);
					}
					scope.selected = arr.length == 0 ? undefined : arr.join(',');
					scope.isPlaceholder = arr.length == 0;
					
					if(arr.length > 1)
					{
						scope.display = arr.length > 1 ? arr.length + ' ' + scope.placeholder + ' selected' : item[scope.text];
					}
					else if(arr.length == 1){
						var item = scope.list.filter(function(item){
							return item[scope.value] == scope.selected;
						})[0];
						
						scope.display = item[scope.text];
					}
					else{
						scope.display = '';
					}
				}
				
				if(scope.onSelect)
				{
					$timeout(function(){
						scope.onSelect();
					});
				}
			};
			
			scope.isSelected = function(item) {
				if(scope.multiple == undefined){
					return item[scope.value].toString() == scope.selected;
				}
				else{
					var arr = scope.selected != undefined ? scope.selected.split(',') : [];
					return arr.indexOf(item[scope.value].toString()) != -1;
				}
			};

			scope.show = function() {
				scope.listVisible = !scope.listVisible;
			};
			
			scope.getList = function(){
				if(scope.filterInput && scope.list != undefined){
					return scope.list.filter(function(item){
						return convertToASCII(item[scope.text]).indexOf(convertToASCII(scope.filterInput)) != -1;
					});
				}
				else{
					return scope.list;
				}
			};
			
			scope.clearFilter = function(){
				scope.filterInput = '';
			};
			
			scope.clearSelect = function(){
				scope.select();
			};
			
			scope.isShowFilter = function(){				
				if(scope.allowFilter === undefined){
					return (scope.list && scope.list.length > itemCountToShowFilter);
				}
				else{
					return scope.allowFilter != 'false';
				}
			};

			$rootScope.$on("documentClicked", function(inner, target) {				
				if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0
						&& !$(target[0]).is('.filter-input') && !$(target[0]).is('.clear-filter'))
				{
					scope.$apply(function() {
						scope.listVisible = false;
					});
				}
				else{					
					var filterInputEle = ele[0].querySelector('.filter-input');
					if(filterInputEle){
						filterInputEle.focus();
					}
				}
			});
			
			var convertToASCII = function(string){
				
				/*remove dau ky tu bt*/
				string = string.toLowerCase();
			    string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/ig,"a");
			    string = string.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/ig,"A");
			    string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
			    string = string.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E");
			    string = string.replace(/ì|í|ị|ỉ|ĩ/g,"i");
			    string = string.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I");
			    string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
			    string = string.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O");			    
			    string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
			    string = string.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U");
			    string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
			    string = string.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y");
			    string = string.replace(/đ/g,"d");
			    string = string.replace(/Đ/g,"d");
//			    string = string.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
//			    string = string.replace(/ + /g," ");
//			    string = string.trim(); 
				
				/*remove to hop unicode*/
				var map = {
					  '\u0065\u0309': '\u1EBB', //ẻ
					  '\u0065\u0301': '\u00E9', //é
					  '\u0065\u0300': '\u00E8', //è
					  '\u0065\u0323': '\u1EB9', //ẹ
					  '\u0065\u0303': '\u1EBD', //ẽ
					  '\u00EA\u0309': '\u1EC3', //ể
					  '\u00EA\u0301': '\u1EBF', //ế
					  '\u00EA\u0300': '\u1EC1', //ề
					  '\u00EA\u0323': '\u1EC7', //ệ
					  '\u00EA\u0303': '\u1EC5', //ễ
					  '\u0079\u0309': '\u1EF7', //ỷ
					  '\u0079\u0301': '\u00FD', //ý
					  '\u0079\u0300': '\u1EF3', //ỳ
					  '\u0079\u0323': '\u1EF5', //ỵ
					  '\u0079\u0303': '\u1EF9', //ỹ
					  '\u0075\u0309': '\u1EE7', //ủ
					  '\u0075\u0301': '\u00FA', //ú
					  '\u0075\u0300': '\u00F9', //ù
					  '\u0075\u0323': '\u1EE5', //ụ
					  '\u0075\u0303': '\u0169', //ũ
					  '\u01B0\u0309': '\u1EED', //ử
					  '\u01B0\u0301': '\u1EE9', //ứ
					  '\u01B0\u0300': '\u1EEB', //ừ
					  '\u01B0\u0323': '\u1EF1', //ự
					  '\u01B0\u0303': '\u1EEF', //ữ
					  '\u0069\u0309': '\u1EC9', //ỉ
					  '\u0069\u0301': '\u00ED', //í
					  '\u0069\u0300': '\u00EC', //ì
					  '\u0069\u0323': '\u1ECB', //ị
					  '\u0069\u0303': '\u0129', //ĩ
					  '\u006F\u0309': '\u1ECF', //ỏ
					  '\u006F\u0301': '\u00F3', //ó
					  '\u006F\u0300': '\u00F2', //ò
					  '\u006F\u0323': '\u1ECD', //ọ
					  '\u006F\u0303': '\u00F5', //õ
					  '\u01A1\u0309': '\u1EDF', //ở
					  '\u01A1\u0301': '\u1EDB', //ớ
					  '\u01A1\u0300': '\u1EDD', //ờ
					  '\u01A1\u0323': '\u1EE3', //ợ
					  '\u01A1\u0303': '\u1EE1', //ỡ
					  '\u00F4\u0309': '\u1ED5', //ổ
					  '\u00F4\u0301': '\u1ED1', //ố
					  '\u00F4\u0300': '\u1ED3', //ồ
					  '\u00F4\u0323': '\u1ED9', //ộ
					  '\u00F4\u0303': '\u1ED7', //ỗ
					  '\u0061\u0309': '\u1EA3', //ả
					  '\u0061\u0301': '\u00E1', //á
					  '\u0061\u0300': '\u00E0', //à
					  '\u0061\u0323': '\u1EA1', //ạ
					  '\u0061\u0303': '\u00E3', //ã
					  '\u0103\u0309': '\u1EB3', //ẳ
					  '\u0103\u0301': '\u1EAF', //ắ
					  '\u0103\u0300': '\u1EB1', //ằ
					  '\u0103\u0323': '\u1EB7', //ặ
					  '\u0103\u0303': '\u1EB5', //ẵ
					  '\u00E2\u0309': '\u1EA9', //ẩ
					  '\u00E2\u0301': '\u1EA5', //ấ
					  '\u00E2\u0300': '\u1EA7', //ầ
					  '\u00E2\u0323': '\u1EAD', //ậ
					  '\u00E2\u0303': '\u1EAB', //ẫ
					  '\u0045\u0309': '\u1EBA', //Ẻ
					  '\u0045\u0301': '\u00C9', //É
					  '\u0045\u0300': '\u00C8', //È
					  '\u0045\u0323': '\u1EB8', //Ẹ
					  '\u0045\u0303': '\u1EBC', //Ẽ
					  '\u00CA\u0309': '\u1EC2', //Ể
					  '\u00CA\u0301': '\u1EBE', //Ế
					  '\u00CA\u0300': '\u1EC0', //Ề
					  '\u00CA\u0323': '\u1EC6', //Ệ
					  '\u00CA\u0303': '\u1EC4', //Ễ
					  '\u0059\u0309': '\u1EF6', //Ỷ
					  '\u0059\u0301': '\u00DD', //Ý
					  '\u0059\u0300': '\u1EF2', //Ỳ
					  '\u0059\u0323': '\u1EF4', //Ỵ
					  '\u0059\u0303': '\u1EF8', //Ỹ
					  '\u0055\u0309': '\u1EE6', //Ủ
					  '\u0055\u0301': '\u00DA', //Ú
					  '\u0055\u0300': '\u00D9', //Ù
					  '\u0055\u0323': '\u1EE4', //Ụ
					  '\u0055\u0303': '\u0168', //Ũ
					  '\u01AF\u0309': '\u1EEC', //Ử
					  '\u01AF\u0301': '\u1EE8', //Ứ
					  '\u01AF\u0300': '\u1EEA', //Ừ
					  '\u01AF\u0323': '\u1EF0', //Ự
					  '\u01AF\u0303': '\u1EEE', //Ữ
					  '\u0049\u0309': '\u1EC8', //Ỉ
					  '\u0049\u0301': '\u00CD', //Í
					  '\u0049\u0300': '\u00CC', //Ì
					  '\u0049\u0323': '\u1ECA', //Ị
					  '\u0049\u0303': '\u0128', //Ĩ
					  '\u004F\u0309': '\u1ECE', //Ỏ
					  '\u004F\u0301': '\u00D3', //Ó
					  '\u004F\u0300': '\u00D2', //Ò
					  '\u004F\u0323': '\u1ECC', //Ọ
					  '\u004F\u0303': '\u00D5', //Õ
					  '\u01A0\u0309': '\u1EDE', //Ở
					  '\u01A0\u0301': '\u1EDA', //Ớ
					  '\u01A0\u0300': '\u1EDC', //Ờ
					  '\u01A0\u0323': '\u1EE2', //Ợ
					  '\u01A0\u0303': '\u1EE0', //Ỡ
					  '\u00D4\u0309': '\u1ED4', //Ổ
					  '\u00D4\u0301': '\u1ED0', //Ố
					  '\u00D4\u0300': '\u1ED2', //Ồ
					  '\u00D4\u0323': '\u1ED8', //Ộ
					  '\u00D4\u0303': '\u1ED6', //Ỗ
					  '\u0041\u0309': '\u1EA2', //Ả
					  '\u0041\u0301': '\u00C1', //Á
					  '\u0041\u0300': '\u00C0', //À
					  '\u0041\u0323': '\u1EA0', //Ạ
					  '\u0041\u0303': '\u00C3', //Ã
					  '\u0102\u0309': '\u1EB2', //Ẳ
					  '\u0102\u0301': '\u1EAE', //Ắ
					  '\u0102\u0300': '\u1EB0', //Ằ
					  '\u0102\u0323': '\u1EB6', //Ặ
					  '\u0102\u0303': '\u1EB4', //Ẵ
					  '\u00C2\u0309': '\u1EA8', //Ẩ
					  '\u00C2\u0301': '\u1EA4', //Ấ
					  '\u00C2\u0300': '\u1EA6', //Ầ
					  '\u00C2\u0323': '\u1EAC', //Ậ
					  '\u00C2\u0303': '\u1EAA' //Ẫ	
				};
				
				for (var key in map) {
					string = string.replace(new RegExp(key, 'g'), map[key])
				}

			  return string
			};
			
			scope.$watch("list", function(value) {
				scope.isPlaceholder = scope.selected === undefined;
				if(scope.list)
				{
					var item = scope.list.filter(function(item){
						return item[scope.value] == scope.selected;
					})[0];
					
					if(scope.multiple == undefined)
					{
						scope.display = item !== undefined ? item[scope.text] : '';
					}
					else{
						var arr = scope.selected != undefined ? scope.selected.split(',') : [];
						scope.display = arr.length > 1 ? arr.length + ' ' + scope.placeholder + ' selected' : (item !== undefined ? item[scope.text] : '');
					}
				}
			});
			
			scope.$watch("selected", function(value) {
				scope.isPlaceholder = scope.selected === undefined;
				if(scope.list){
					var item = scope.list.filter(function(item){
						return item[scope.value] == scope.selected;
					})[0];
					
					scope.display = item ? item[scope.text] : '';
				}
			});
		}
	}
}]);