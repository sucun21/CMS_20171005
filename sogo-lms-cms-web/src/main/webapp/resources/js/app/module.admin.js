
console.log('aaaa');

$stateProviderRef.state('root.schedule', {
	url: "/schedule?courseId&trainerId&centerId",
	templateUrl: "views/home/dashboard.html",
	controller: "dashboardCtrl as $vm",
	data: {
        pageTitle: "Class schedule"
    }
});

console.log($stateProviderRef.$get().get());