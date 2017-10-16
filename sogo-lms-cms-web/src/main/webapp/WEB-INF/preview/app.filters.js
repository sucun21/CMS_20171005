appPreview.filter('genVideoTag', ['$sce', function ($sce) {
	return function (val) {
		if (val) {
			return $sce.trustAsHtml(val);
		}
	};
}]);

appPreview.filter('activityTime', function () {
	return function (input) {
		if (input === '' || !input) {
			return input;
		} else {
			
			var convertedDate = new Date(1970, 0, 1);
			convertedDate.setMinutes(input.toString().match(/\d+/)[0] * 1);
			return moment(convertedDate).format('mm');
		}
	}
});