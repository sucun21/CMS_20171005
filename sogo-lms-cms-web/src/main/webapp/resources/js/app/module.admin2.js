"use babel";

var adminModule = angular.module('adminModule', ['ui.router']);

adminModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('root.schedule', {
	  	url: "/schedule?courseId&trainerId&centerId",
		templateUrl: "views/home/dashboard.html",
		controller: "dashboardCtrl as $vm",
		data: {
	        pageTitle: "Class schedule"
	    }
  });
  
  $stateProvider.state('root.schedule.view', {
	  	url: "/schedule?courseId&trainerId&centerId",
		templateUrl: "views/home/dashboard.html",
		controller: "dashboardCtrl as $vm",
		data: {
	        pageTitle: "Class schedule"
	    }
  });
  
  $stateProvider.state('root.student', {
	  	url: '/student',
	  	abstract:true,
	  	template: '<ui-view></ui-view>'
  });
  
  $stateProvider.state('root.student.list', {
	  	url: '/list?searchKey&p&ps&studentStatus&courseId&centerId',
		reloadOnSearch: false,
		params:{
			searchKey:{
				value: null,
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
			}
		},
		data: {
            pageTitle: 'Manage Student'
        }
  });
  
}]);

//adminModule.service('lazyService', function($http) {
//  this.getServiceData = function() {
//    return $http.get('serviceData.json').then(resp => resp.data);
//  }
//})


//adminModule.component('lazyComponent', {
//  template: `
//    <h1>Lazy Module component!</h1>
//    <a ui-sref=".foo">Foo</a><br>
//    <a ui-sref=".bar">Bar</a><br>
//    <ui-view></ui-view>
//  `
//});
//
//adminModule.component('fooComponent', {
//  bindings: { fooData: '<' },
//  template: `
//    <h3>The foo component</h1>
//    {{ $ctrl.fooData }}
//  `
//});
//
//adminModule.component('barComponent', {
//  bindings: { serviceData: '<' },
//  template: `
//    <h3>The bar component</h1>
//    Data from lazy service: 
//    <pre>{{ $ctrl.serviceData | json }}</pre>
//  `
//});