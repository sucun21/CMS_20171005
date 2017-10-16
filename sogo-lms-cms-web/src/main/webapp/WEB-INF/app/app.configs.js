/*config*/
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(['NotificationProvider', function (NotificationProvider) {
    NotificationProvider.setOptions({
        positionX: 'center',
        positionY: 'top',
        replaceMessage: true
    });
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
    //$httpProvider.defaults.headers.post["Content-Type"] = "text/plain";
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