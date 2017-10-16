function leftMenuCtrl($scope, initData) {
	var vm = this;
	vm.userMenu = initData.userMenu;
};

leftMenuCtrl.$inject = ['$scope', 'initData'];

app.controller('leftMenuCtrl', leftMenuCtrl);