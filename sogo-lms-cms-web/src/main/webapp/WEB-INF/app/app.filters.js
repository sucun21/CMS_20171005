app.filter('gender', ['genderArray', function (genderArray) {
	return function (input) {
		if (isNaN(input)) {
			return input;
		}
		else if (input == null || !input) {
			return 'Unknown';
		}
		else {
			return genderArray[input];
		}
	}
}]);

app.filter('dateVN', function () {
	return function (input) {
		if (input === '' || !input) {
			return input;
		} else {
			var convertedDate = new Date(input.toString().match(/\d+/)[0] * 1);
			
			return moment(convertedDate).format('DD/MM/YYYY')
		}
	}
});

app.filter('dateToDateVN', function () {
	return function (input) {
		if (input === '' || !input) {
			return input;
		} else {			
			return moment(input).format('DD/MM/YYYY')
		}
	}
});

app.filter('dateTimeShortVN', function () {
	return function (input) {
		if (input === '' || !input) {
			return input;
		} else {
			var convertedDate = new Date(input.toString().match(/\d+/)[0] * 1);
			
			return moment(convertedDate).format('DD/MM/YYYY HH:mm')
		}
	}
});


app.filter('dateTimeVN', function () {
    return function (input) {
        if (input === '' || !input) {
            return input;
        } else {
            var convertedDate = new Date(input.toString().match(/\d+/)[0] * 1);

            return moment(convertedDate).format('DD/MM/YYYY HH:mm:ss');
        }
    }
});

app.filter('unitCompletionPercent', function () {
	return function (input) {
		if (input === '' || !input) {
			return '0%';
		} else {
			return (Math.round(input * 100)) + '%';
		}
	}
});

app.filter('unitScore', function () {
	return function (input) {
		if (input === '' || !input) {
			return '0/10';
		} else {
			return (Math.round(input * 10)) + '/10';
		}
	}
});

app.filter('unitTimeSpend', function () {
	return function (input) {
		if (input === '' || !input) {
			return '00:00:00';
		} else {
			
			var convertedDate = new Date(1970, 0, 1);
			convertedDate.setSeconds(input.toString().match(/\d+/)[0] * 1);
			return moment(convertedDate).format('HH:mm:ss');
		}
	}
});
app.filter('splitRightAnswer', ['$sce', function ($sce) {
	return function (val) {
		if (val) {
			var lines = val.split('#@WSE@#');
			var res = '';
			for (var i = 0; i < lines.length; i++) {
				if (lines[i] != '') {
//					if (isShowLineNum) {
//						res += (i + 1) + '. ' + lines[i] + '<br/>';
//					}
//					else {
//						res += lines[i] + '<br/>';
//					}
					
					res += '<i class="fa fa-check text-success fa-fw"></i>' + lines[i] + '<br/>';
				}
			}

			res = res.slice(0, -5);
			return $sce.trustAsHtml(res);
		}
	};
}]);

app.filter('sliceChar', function(){
	return function(input, charNumber){
		
		charNumber = Math.abs(charNumber);
		
		if(input && input.length > charNumber){
			return input.slice(0, -charNumber);
		}
		else{
			return input;
		}
	};
});

app.filter('trusted', ['$sce', function($sce){
    return function(html){
        return $sce.trustAsHtml(html)
    }
 }]);