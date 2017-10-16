(function () {
    angular.module('app').controller('Shared.LeftMenu', ['$scope', 'userRole',
    	function ($scope, userRole) {
    	var vm = this;
    	
    	vm.userRole = userRole;
    	
    	vm.hasSubMenu = function(item){
    		return item.states && Enumerable.From(item.states).Count("$.isShowMenu") > 0;
    	};
    	
    	vm.isSingleMenu = function(item){    		
    		return Enumerable.From(item.states).Count("$.isShowMenu") == 1;
    	};
    	
    }]);
})();