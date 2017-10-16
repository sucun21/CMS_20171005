function pagingCtrl($scope, $rootScope, $timeout, $state) {
    var self = this;
    
    self.startIndex = 0;
    self.endIndex = 0;
    self.totalCount = 0;
    self.rowPerPage = 0;
    
    self.IsShowCount = true;
    self.stateName = $state.current.name;
    self.CountShowPage = 6;
    self.params = $state.params;
    self.pageNumber = self.params.p ? self.params.p : 1;
    self.startIndex = 1;
    self.endIndex = 1;
    self.totalCount = $scope.totalRow;
    self.rowPerPage = self.params.ps ? self.params.ps : $scope.defaultPageSize;
    self.totalPage = Math.ceil(self.totalCount / self.rowPerPage);
    

    self.startIndex = ((self.pageNumber - 1) * self.rowPerPage) + 1;
    self.endIndex = Number(self.startIndex) + Number(self.rowPerPage) - 1;
    self.endIndex = self.endIndex >= self.totalCount ? self.totalCount : self.endIndex;

    self.startNum = 0;
    self.endNum = 0;

    if (self.pageNumber <= self.CountShowPage / 2 && self.totalPage <= self.CountShowPage) {
        self.startNum = 1;
        self.endNum = self.CountShowPage;
    }
    else if (self.pageNumber <= self.CountShowPage / 2 && self.totalPage > self.CountShowPage){
    	self.startNum = 1;
        self.endNum = self.CountShowPage - 1;
    }
    else if (self.pageNumber > (self.totalPage - self.CountShowPage / 2) && self.totalPage > self.CountShowPage) {
        self.endNum = self.totalPage;
        self.startNum = self.endNum - (self.CountShowPage / 2) - 1;
    }
    else {
        self.startNum = self.pageNumber - self.CountShowPage / 2 + 1;
        self.endNum = self.startNum + self.CountShowPage / 2;
    }

    if (self.startNum < 1) {
        self.startNum = 1;
    }
    if (self.endNum > self.totalPage) {
        self.endNum = self.totalPage;
    }

    $scope.$watch('parentLoaded', function (parentLoaded) {
        if (parentLoaded) {
            
        }
    });

    self.PreviousPage = function () {
        if (self.pageNumber > 1) {
            $state.params.p = Number(self.pageNumber) - 1;
            $state.transitionTo($state.current, $state.params, {
                reload: true,
                inherit: false,
                notify: true
            });
        }
    };

    self.NextPage = function () {
        if (self.pageNumber < self.totalPage) {
            $state.params.p = Number(self.pageNumber) + 1;
            $state.transitionTo($state.current, $state.params, {
                reload: true,
                inherit: false,
                notify: true
            });
        }
    };

    self.GoToPage = function (p) {
        if (p != self.pageNumber) {
        	self.params.p = p;
        	self.pageNumber = p;
//            $state.transitionTo($state.current, $state.params, {
//                reload: true,
//                inherit: false,
//                notify: true
//            });
        	
        	console.log(self.params);
        	
            $state.go($state.current, self.params, { notify: false });
        }
    };
    
    $scope.$watch('totalRow', function(val){
    	console.log(val);
    });

    self.getNumber = function (num) {
        return new Array(num);
    };
};

pagingCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$state'];

app.controller('pagingCtrl', pagingCtrl);