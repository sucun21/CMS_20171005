var $stateProviderRef=null,$urlRouterProviderRef=null,app=angular.module("app",["ui.router","ngSanitize","angular-cache"]);app.value("genderArray",["GENDER_UNKNOWN","GENDER_MALE","GENDER_FEMALE"]);
app.run(["$rootScope","$q","$state","$urlRouter","$timeout","sessionService","dataService","notifyService","CacheFactory",function(a,d,c,e,f,g,b,h,k){function l(){var a=d.defer();b.getModules(g.getUserSession().userTypeId).then(function(b){angular.forEach(b,function(b){var a={name:b.group,icon:b.icon,parentState:b.parentState,subMenu:[]};angular.forEach(b.states,function(b){b.isShowMenu&&a.subMenu.push({name:b.menuName,uiSref:b.name});if(null===c.get(b.name)){var f={url:b.url,parent:b.parent,"abstract":b["abstract"],
template:b.template,templateUrl:b.templateUrl,data:b.data,controller:b.controller,controllerAs:b.controllerAs,views:{}};angular.forEach(b.views,function(b){f.views[b.name]={templateUrl:b.templateUrl,template:b.template,data:b.data,controller:b.controller,controllerAs:b.controllerAs}});$stateProviderRef.state(b.name,f)}});g.pushUserMenu(a)});e.sync();e.listen();a.resolve()});return a.promise}angular.element(document).on("click",function(b){a.$broadcast("documentClicked",angular.element(b.target))});
a.pageLoaded=!1;a.appName="LMS";a.SERVER_DATE_FORMAT="YYYY-MM-DD";a.FULL_CALENDAR_DATE_TIME_FORMAT="YYYY-MM-DDTHH:mm:ss";a.currentYear=(new Date).getFullYear();a.currentDate=moment(new Date).format("DD/MM/YYYY");a.defaultPageSize=10;a.notifyService=h;a.sessionUserId=0;a.isAdmin=g.isAdmin();a.defaultPassword="1234567";a.noAvatarImgUrl="/images/no-avatar.jpg";a.isAdmin=g.isAdmin();a.listCourseActivity={};a.getCourseActivity=function(c){a.listCourseActivity[c]||b.getCourseActivity(c).then(function(b){a.listCourseActivity[c]=
b.data})};a.convertToShortDatetimeVN=function(b){return""!==b&&b?(b=new Date(1*b.toString().match(/\d+/)[0]),moment(b).format("DD/MM/YYYY HH:mm")):b};a.convertToDatetimeVN=function(b){return""!==b&&b?(b=new Date(1*b.toString().match(/\d+/)[0]),moment(b).format("DD/MM/YYYY HH:mm:ss")):b};a.generateAvatarUrl=function(b){return b&&-1==b.indexOf("http://")&&-1==b.indexOf("https://")?imageDomain+"avatar/"+b:b};a.closePopup=function(){c.transitionTo(c.$current.parent,c.params,{reload:!1,inherit:!1,notify:!0})};
a.clearCache=function(){k.clearAll();h.success("Cache cleared")};a.hasPermission=function(b){return 0<Enumerable.From(a.listState).Count(function(a){return a.name==b})};d.when(function(){var c=d.defer();b.getUserSession().then(function(b){b.is_success?(a.sessionUserId=b.data.userId,g.setUserSession(b.data)):g.setUserSession();c.resolve()});return c.promise}()).then(function(){d.when(l()).then(function(){a.listState=c.get()})})}]);app.config(["$qProvider",function(a){a.errorOnUnhandledRejections(!1)}]);
app.config(["CacheFactoryProvider",function(a){var d={maxAge:864E5,deleteOnExpire:"aggressive",storagePrefix:"cms.cache."};window.sessionStorage?d.storageMode="sessionStorage":window.localStorage&&(d.storageMode="localStorage");angular.extend(a.defaults,d)}]);
app.config(["$httpProvider",function(a){a.defaults.xsrfHeaderName="x-dt-csrf-header";a.defaults.xsrfCookieName="X-CSRF-TOKEN";a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";a.interceptors.push(["$q","$injector",function(a,c){return{response:function(a){return a},responseError:function(a){return a}}}])}]);
app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,d,c){a.state("root",{url:"","abstract":!0,views:{"":{templateUrl:"views/shared/_layout.html"},"header@root":{templateUrl:"views/shared/_header.html"},"footer@root":{templateUrl:"views/shared/_footer.html"},"leftMenu@root":{templateUrl:"views/shared/_leftMenu.html"}}});d.deferIntercept();d.otherwise("/");c.html5Mode(!0);$stateProviderRef=a;$urlRouterProviderRef=d}]);
app.factory("sessionService",["$rootScope",function(a){var d,c=[];return{getUserSession:function(){return d},setUserSession:function(c){d=c;a.$broadcast("updateSession")},pushUserMenu:function(a){c.push(a)},getUserMenu:function(){return c},clearUserSession:function(){d=void 0;a.$broadcast("updateSession")},isLogin:function(){return d?!0:!1},isAdmin:function(){return d&&1==d.userTypeId?!0:!1}}}]);
app.factory("dataService",["$http","CacheFactory","$timeout",function(a,d,c){var e=function(b){return a.post(b).then(function(b){return b.data})},f=function(b,c){return a.post(b,c).then(function(b){return b.data})};d.get("masterDataCache")||d.createCache("masterDataCache",{deleteOnExpire:"aggressive",recycleFreq:6E4});var g=d.get("masterDataCache");return{getModules:function(b){return f("/api/getModules",b)},doLogin:function(b){return f("/api/doLogin",b)},doLogout:function(){return e("/api/doLogout")},
getUserSession:function(){return e("/api/getUserSession")},getStudentList:function(b){return f("/api/getStudentList",b)},getAllCenter:function(){return g.get("/api/getAllCenter")?c(function(){return g.get("/api/getAllCenter")}):a.get("/api/getAllCenter").then(function(b){g.put("/api/getAllCenter",b.data);return b.data})},getAllCourse:function(){return g.get("/api/getAllCourse")?c(function(){return g.get("/api/getAllCourse")}):a.get("/api/getAllCourse").then(function(b){g.put("/api/getAllCourse",b.data);
return b.data})},getIntroClassByCenterAndCourse:function(b){return f("/api/getIntroClassByCenterAndCourse",b)},getIncomingFirstClass:function(b){return f("/api/getIncomingFirstClass",b)},addNewStudent:function(b){return f("/api/addNewStudent",b)},getPendingCheckAttendanceClass:function(b){return f("/api/getPendingCheckAttendanceClass",b)},getIncomingClass:function(b){return f("/api/getIncomingClass",b)},getClassSchedule:function(b){return f("/api/getClassSchedule",b)},getClassInfoById:function(b){return f("/api/getClassInfoById",
b)},getStudentByClass:function(b){return f("/api/getStudentByClass",b)},changeClassTrainer:function(b){return f("/api/changeClassTrainer",b)},changeClassTime:function(b){return f("/api/changeClassTime",b)},updateStudentAttendance:function(b){return f("/api/updateStudentAttendance",b)},updateClassAttendanceCheck:function(b){return f("/api/updateClassAttendanceCheck",b)},getAllTrainer:function(){return g.get("/api/getAllTrainer")?c(function(){return g.get("/api/getAllTrainer")}):a.get("/api/getAllTrainer").then(function(b){g.put("/api/getAllTrainer",
b.data);return b.data})},getStudentInfo:function(b){return f("/api/getStudentInfo",b)},getStudentClasses:function(b){return f("/api/getStudentClasses",b)},getStudentActivityLog:function(b){return f("/api/getStudentActivityLog",b)},getAllCommentType:function(){return e("/api/getAllCommentType")},getAllCommentResult:function(b){return f("/api/getAllCommentResult",b)},resetStudentPassword:function(b){return f("/api/resetStudentPassword",b)},addActivityLog:function(b){return f("/api/addActivityLog",b)},
getQuizReport:function(b){return f("/api/getQuizReport",b)},getQuizReportDetail:function(b){return f("/api/getQuizReportDetail",b)},getSystemUser:function(b){return f("/api/getSystemUser",b)},getUserType:function(){return g.get("/api/getUserType")?c(function(){return g.get("/api/getUserType")}):a.get("/api/getUserType").then(function(b){g.put("/api/getUserType",b.data);return b.data})},addNewUser:function(b){return f("/api/addNewUser",b)},getStudentProperty:function(b){return f("/api/getStudentProperty",
b)},getStudentQuiz:function(b){return f("/api/getStudentQuiz",b)},getStudentOtherActivity:function(b){return f("/api/getStudentOtherActivity",b)},getCourseActivity:function(b){return f("/api/getCourseActivity",b)},getStudentAllCourse:function(b){return f("/api/getStudentAllCourse",b)},updateStudentCourseStatus:function(b){return f("/api/updateStudentCourseStatus",b)},getOfflineClassForRetake:function(b){return f("/api/getOfflineClassForRetake",b)},retakeStudentClass:function(b){return f("/api/retakeStudentClass",
b)},getUnitInCourse:function(b){return f("/api/getUnitInCourse",b)},getCourseHoliday:function(b){return f("/api/getCourseHoliday",b)},addNewGroupClass:function(b){return f("/api/addNewGroupClass",b)},getLessonInUnit:function(b){return f("/api/getLessonInUnit",b)},getActivityCatalouge:function(b){return f("/api/getActivityCatalouge",b)},getActivityDetails:function(b){return f("/api/getActivityDetails",b)},getQuizQuestion:function(b){return f("/api/getQuizQuestion",b)},getAllGroupClass:function(b){return f("/api/getAllGroupClass",
b)}}}]);app.service("notifyService",function(){this.error=function(d,c){a(d,"error",c)};this.success=function(d,c){a(d,"success",c)};var a=function(a,c,e){new PNotify({text:a,delay:void 0==e?6E5:e,icon:!1,styling:"bootstrap3",type:c,width:"290px",animate:{animate:!1},buttons:{sticker:!1,closer:!1}})}});app.filter("dateVN",function(){return function(a){return""!==a&&a?(a=new Date(1*a.toString().match(/\d+/)[0]),moment(a).format("DD/MM/YYYY")):a}});
app.filter("dateToDateVN",function(){return function(a){return""!==a&&a?moment(a).format("DD/MM/YYYY"):a}});app.filter("dateTimeShortVN",function(){return function(a){return""!==a&&a?(a=new Date(1*a.toString().match(/\d+/)[0]),moment(a).format("DD/MM/YYYY HH:mm")):a}});app.filter("dateTimeVN",function(){return function(a){return""!==a&&a?(a=new Date(1*a.toString().match(/\d+/)[0]),moment(a).format("DD/MM/YYYY HH:mm:ss")):a}});
app.filter("unitCompletionPercent",function(){return function(a){return""!==a&&a?Math.round(100*a)+"%":"0%"}});app.filter("unitScore",function(){return function(a){return""!==a&&a?Math.round(10*a)+"/10":"0/10"}});app.filter("unitTimeSpend",function(){return function(a){if(""!==a&&a){var d=new Date(1970,0,1);d.setSeconds(1*a.toString().match(/\d+/)[0]);return moment(d).format("HH:mm:ss")}return"00:00:00"}});
app.filter("splitRightAnswer",["$sce",function(a){return function(d){if(d){d=d.split("#@WSE@#");for(var c="",e=0;e<d.length;e++)""!=d[e]&&(c+='\x3ci class\x3d"fa fa-check text-success fa-fw"\x3e\x3c/i\x3e'+d[e]+"\x3cbr/\x3e");c=c.slice(0,-5);return a.trustAsHtml(c)}}}]);app.directive("accessibleForm",function(){return{restrict:"A",link:function(a,d){d.on("submit",function(){var a=d[0].querySelector(".ng-invalid");a&&a.focus()})}}});
app.directive("title",["$rootScope","$timeout",function(a,d){return{link:function(){a.$on("$stateChangeSuccess",function(c,e){d(function(){a.title=e.data&&e.data.pageTitle?e.data.pageTitle+" - Learning Management System":""})})}}}]);
app.directive("passwordVerify",function(){return{require:"ngModel",scope:{passwordVerify:"\x3d"},link:function(a,d,c,e){a.$watch(function(){var c;if(a.passwordVerify||e.$viewValue)c=a.passwordVerify+"_"+e.$viewValue;return c},function(c){c&&e.$parsers.unshift(function(c){if(a.passwordVerify!==c)e.$setValidity("passwordVerify",!1);else return e.$setValidity("passwordVerify",!0),c})})}}});
app.directive("fileModel",["$parse",function(a){return{restrict:"A",link:function(d,c,e){var f=a(e.fileModel).assign;c.bind("change",function(){d.$apply(function(){f(d,c[0].files[0])})})}}}]);app.directive("onErrorSrc",function(){return{link:function(a,d,c){d.bind("error",function(){c.$set("src",a.noAvatarImgUrl)})}}});
app.directive("numbersOnly",function(){return{require:"ngModel",link:function(a,d,c,e){e.$parsers.push(function(a){if(a){var c=a.replace(/[^0-9]/g,"");c!==a&&(e.$setViewValue(c),e.$render());return c}})}}});
app.directive("ngMin",function(){return{restrict:"A",require:"ngModel",link:function(a,d,c,e){a.$watch(c.ngMin,function(){e.$setViewValue(e.$viewValue)});a=function(a){var d=c.ngMin||0;if(angular.isUndefined(a)||""===a||null===a||a!==a)e.$setValidity("min",!0);else{if(isNaN(a)){e.$setValidity("number",!1);return}if(Number(a)<d){e.$setValidity("min",!1);return}}return a};e.$parsers.push(a);e.$formatters.push(a)}}});
app.directive("ngMax",function(){return{restrict:"A",require:"ngModel",link:function(a,d,c,e){a.$watch(c.ngMax,function(){e.$setViewValue(e.$viewValue)});a=function(a){var d=c.ngMax||Infinity;if(angular.isUndefined(a)||""===a||null===a||a!==a)e.$setValidity("max",!0);else{if(isNaN(a)){e.$setValidity("number",!1);return}if(Number(a)>d){e.$setValidity("max",!1);return}}return a};e.$parsers.push(a);e.$formatters.push(a)}}});
app.directive("ngRange",[function(){return{require:"ngModel",link:function(a,d,c,e){e&&(a=function(a){var d=c.ngRange.split(",").map(Number);if(angular.isUndefined(a)||""===a||null===a||a!==a)return e.$setValidity("range",!0),"";if(isNaN(a))e.$setValidity("number",!1);else if(Number(a)<d[0]||Number(a)>d[1])e.$setValidity("range",!1);else return a},e.$parsers.push(a),e.$formatters.push(a))}}}]);
app.directive("datepicker",function(){return{restrict:"E",require:"ngModel",replace:!0,templateUrl:"views/components/datepicker.html",scope:{dateFormat:"@",dateMin:"@",dateMax:"@",placeholder:"@",daysOfWeekDisabled:"\x3d",outputFormat:"@",onSelect:"\x26",model:"\x3dngModel",ngClass:"\x3dngClass"},link:function(a,d,c,e){a.dateFormat=angular.isUndefined(a.dateFormat)?"DD/MM/YYYY":a.dateFormat;a.outputFormat=angular.isUndefined(a.outputFormat)?"YYYY-MM-DD":a.outputFormat;var f=$(d).find("input[type\x3dtext]:first"),
g=function(){void 0!==f.data("DateTimePicker")&&(f.data("DateTimePicker").destroy(),f.unbind("dp.change"));f.datetimepicker({format:a.dateFormat,useCurrent:!1,pickTime:!1,minDate:a.dateMin,daysOfWeekDisabled:a.daysOfWeekDisabled});f.on("dp.change",function(b){b=b.date?moment(b.date):null;var c="";if(null!=b){switch(a.outputFormat){case "timestamp":c=b.valueOf();break;default:c=b.format(a.outputFormat)}a.$apply(function(){e.$setViewValue(c)});if(void 0!==a.onSelect&&null!=b)a.onSelect({date:b,formatedDate:c,
weekDay:b.weekday()})}})};a.$watch("daysOfWeekDisabled",function(b,c){a.daysOfWeekDisabled=b;g()});a.$watch("dateMin",function(b,a){void 0!=b&&f.data("DateTimePicker").setMinDate(b)});a.$watch("dateMax",function(b,a){void 0!=b&&f.data("DateTimePicker").setMaxDate(b)});a.$watch("model",function(b,a){void 0===b&&f.data("DateTimePicker").setValue("")});g()}}});
app.directive("timepicker",function(){return{restrict:"E",require:"ngModel",replace:!0,templateUrl:"views/components/timepicker.html",scope:{timeFormat:"@",minuteStepping:"@",placeholder:"@",outputFormat:"@",onSelect:"\x26",model:"\x3dngModel",ngClass:"\x3dngClass"},link:function(a,d,c,e){a.dateFormat=angular.isUndefined(a.dateFormat)?"HH:mm":a.dateFormat;a.outputFormat=angular.isUndefined(a.outputFormat)?"HH:mm":a.outputFormat;a.minuteStepping=isNaN(a.minuteStepping)?1:Number(a.minuteStepping);var f=
$(d).find("input[type\x3dtext]:first");a.$watch("model",function(a,b){void 0===a&&f.data("DateTimePicker").setValue("")});(function(){void 0!==f.data("DateTimePicker")&&(f.data("DateTimePicker").destroy(),f.unbind("dp.change"));f.datetimepicker({format:a.dateFormat,useCurrent:!1,pickDate:!1,useSeconds:!1,minuteStepping:a.minuteStepping});f.on("dp.change",function(c){c=c.date?moment(c.date):null;var b="";if(null!=c){switch(a.outputFormat){case "timestamp":b=c.valueOf();break;default:b=c.format(a.outputFormat)}a.$apply(function(){e.$setViewValue(b)});
if(void 0!==a.onSelect&&null!=c)a.onSelect({date:c,formatedTime:b})}})})()}}});app.directive("fcEvent",function(){return{restrict:"E",replace:!0,templateUrl:"views/components/fc-event.html",scope:{event:"\x3d",style:"@",isAdmin:"\x3d"},link:function(a,d,c,e){d=a.event;a.eventClass="";d.isIncomingClass?a.eventClass="fc-event-primary":d.isCheckAttendance?a.eventClass="fc-event-success":d.isCheckAttendance||(a.eventClass="fc-event-warning")}}});
app.directive("dropdown",["$rootScope","$timeout",function(a,d){return{restrict:"E",templateUrl:"views/components/dropdown.html",scope:{placeholder:"@",list:"\x3d",selected:"\x3d",value:"@",text:"@",onSelect:"\x26?",allowFilter:"@",multiple:"@"},link:function(c,e,f){c.listVisible=!1;c.isPlaceholder=!0;c.select=function(b){if(void 0==b)c.selected=void 0,c.selectedItem=void 0,c.display="",c.isPlaceholder=!0;else if(void 0==c.multiple&&!c.isSelected(b))c.isPlaceholder=!1,c.selected=b[c.value].toString(),
c.selectedItem=b,c.display=void 0!==b?b[c.text]:"";else if(void 0==c.multiple&&c.isSelected(b))c.isPlaceholder=!0,c.selected=void 0,c.selectedItem=void 0;else if(void 0!=c.multiple&&(null==c.selected||!c.isSelected(b))){c.isPlaceholder=!1;var a=void 0!=c.selected?c.selected.split(","):[];a.push(b[c.value].toString());c.selected=a.join(",");c.display=1<a.length?a.length+" "+c.placeholder+" selected":b[c.text]}else if(void 0!=c.multiple&&c.isSelected(b)){var a=c.selected.split(","),e=a.indexOf(b[c.value].toString());
-1<e&&a.splice(e,1);c.selected=0==a.length?void 0:a.join(",");c.isPlaceholder=0==a.length;1<a.length?c.display=1<a.length?a.length+" "+c.placeholder+" selected":b[c.text]:1==a.length?(b=c.list.filter(function(b){return b[c.value]==c.selected})[0],c.display=b[c.text]):c.display=""}c.onSelect&&d(function(){c.onSelect()})};c.isSelected=function(b){return void 0==c.multiple?b[c.value].toString()==c.selected:-1!=(void 0!=c.selected?c.selected.split(","):[]).indexOf(b[c.value].toString())};c.show=function(){c.listVisible=
!c.listVisible};c.getList=function(){return c.filterInput&&void 0!=c.list?c.list.filter(function(b){return-1!=g(b[c.text]).indexOf(g(c.filterInput))}):c.list};c.clearFilter=function(){c.filterInput=""};c.clearSelect=function(){c.select()};c.isShowFilter=function(){return void 0===c.allowFilter?c.list&&5<c.list.length:"false"!=c.allowFilter};a.$on("documentClicked",function(b,a){if(!$(a[0]).is(".dropdown-display.clicked")&&0< !$(a[0]).parents(".dropdown-display.clicked").length&&!$(a[0]).is(".filter-input")&&
!$(a[0]).is(".clear-filter"))c.$apply(function(){c.listVisible=!1});else{var d=e[0].querySelector(".filter-input");d&&d.focus()}});var g=function(b){b=b.toLowerCase();b=b.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/ig,"a");b=b.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/ig,"A");b=b.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");b=b.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E");b=b.replace(/ì|í|ị|ỉ|ĩ/g,"i");b=b.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I");b=b.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");b=b.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,
"O");b=b.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");b=b.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U");b=b.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");b=b.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y");b=b.replace(/đ/g,"d");b=b.replace(/Đ/g,"d");var a={"ẻ":"ẻ","é":"é","è":"è","ẹ":"ẹ","ẽ":"ẽ","ể":"ể","ế":"ế","ề":"ề","ệ":"ệ","ễ":"ễ","ỷ":"ỷ","ý":"ý","ỳ":"ỳ","ỵ":"ỵ","ỹ":"ỹ","ủ":"ủ","ú":"ú","ù":"ù","ụ":"ụ","ũ":"ũ","ử":"ử","ứ":"ứ","ừ":"ừ","ự":"ự","ữ":"ữ","ỉ":"ỉ","í":"í","ì":"ì","ị":"ị","ĩ":"ĩ","ỏ":"ỏ","ó":"ó","ò":"ò","ọ":"ọ",
"õ":"õ","ở":"ở","ớ":"ớ","ờ":"ờ","ợ":"ợ","ỡ":"ỡ","ổ":"ổ","ố":"ố","ồ":"ồ","ộ":"ộ","ỗ":"ỗ","ả":"ả","á":"á","à":"à","ạ":"ạ","ã":"ã","ẳ":"ẳ","ắ":"ắ","ằ":"ằ","ặ":"ặ","ẵ":"ẵ","ẩ":"ẩ","ấ":"ấ","ầ":"ầ","ậ":"ậ","ẫ":"ẫ","Ẻ":"Ẻ","É":"É","È":"È","Ẹ":"Ẹ","Ẽ":"Ẽ","Ể":"Ể","Ế":"Ế","Ề":"Ề","Ệ":"Ệ","Ễ":"Ễ","Ỷ":"Ỷ","Ý":"Ý","Ỳ":"Ỳ","Ỵ":"Ỵ","Ỹ":"Ỹ","Ủ":"Ủ","Ú":"Ú","Ù":"Ù","Ụ":"Ụ","Ũ":"Ũ","Ử":"Ử","Ứ":"Ứ","Ừ":"Ừ","Ự":"Ự","Ữ":"Ữ","Ỉ":"Ỉ","Í":"Í","Ì":"Ì","Ị":"Ị","Ĩ":"Ĩ",
"Ỏ":"Ỏ","Ó":"Ó","Ò":"Ò","Ọ":"Ọ","Õ":"Õ","Ở":"Ở","Ớ":"Ớ","Ờ":"Ờ","Ợ":"Ợ","Ỡ":"Ỡ","Ổ":"Ổ","Ố":"Ố","Ồ":"Ồ","Ộ":"Ộ","Ỗ":"Ỗ","Ả":"Ả","Á":"Á","À":"À","Ạ":"Ạ","Ã":"Ã","Ẳ":"Ẳ","Ắ":"Ắ","Ằ":"Ằ","Ặ":"Ặ","Ẵ":"Ẵ","Ẩ":"Ẩ","Ấ":"Ấ","Ầ":"Ầ","Ậ":"Ậ","Ẫ":"Ẫ"},c;for(c in a)b=b.replace(new RegExp(c,"g"),a[c]);return b};c.$watch("list",function(b){c.isPlaceholder=void 0===c.selected;if(c.list)if(b=c.list.filter(function(a){return a[c.value]==c.selected})[0],void 0==c.multiple)c.display=void 0!==
b?b[c.text]:"";else{var a=void 0!=c.selected?c.selected.split(","):[];c.display=1<a.length?a.length+" "+c.placeholder+" selected":void 0!==b?b[c.text]:""}});c.$watch("selected",function(a){c.isPlaceholder=void 0===c.selected;c.list&&(a=c.list.filter(function(a){return a[c.value]==c.selected})[0],c.display=a?a[c.text]:"")})}}}]);
function mainCtrl(a,d,c,e,f,g,b,h,k){a.sessionInfo;a.isLogin;a.parentLoaded=!1;var l=["/api/updateStudentAttendance"];a.IsShowLoading=function(){return 0!==Enumerable.From(c.pendingRequests).Count(function(a){return-1==l.indexOf(a.url)})};d.$on("updateSession",function(){a.sessionInfo=h.getUserSession();a.isLogin=h.isLogin()});a.init=function(){a.sessionInfo=h.getUserSession();a.userMenu=h.getUserMenu();a.isLogin=h.isLogin();a.parentLoaded=!0;d.$on("$stateChangeStart",function(b,c,d,e){a.pageLoaded=
!1});d.$on("$stateChangeSuccess",function(){e(function(){common.init()},1)})};a.doLogout=function(a){a.preventDefault();k.doLogout().then(function(){window.location.href="/login?ref\x3d"+encodeURIComponent(window.location.pathname+window.location.search)})}}mainCtrl.$inject="$scope $rootScope $http $timeout $state $q $urlRouter sessionService dataService".split(" ");app.controller("mainCtrl",mainCtrl);
function loginCtrl(a,d,c){var e=this;a.$watch("parentLoaded",function(a){a&&(d.pageLoaded=!0)});a.checkInvalidUsername=function(){return e.loginForm.userName.$invalid&&!e.loginForm.userName.$pristine};e.doLogin=function(a){a.preventDefault();e.isLoginError=!1;e.loginForm.$valid?c.doLogin(e.loginInfo).then(function(a){if(a&&a.data){var b=void 0;b=window.location.href;a="ref".replace(/[\[\]]/g,"\\$\x26");a=(a=(new RegExp("[?\x26]"+a+"(\x3d([^\x26#]*)|\x26|#|$)")).exec(b))?a[2]?decodeURIComponent(a[2].replace(/\+/g,
" ")):"":null;window.location.href=a?a:"/"}else e.isLoginError=!0}):angular.forEach(e.loginForm.$error,function(a){angular.forEach(a,function(a){a.$setDirty()})})}}loginCtrl.$inject=["$scope","$rootScope","dataService"];app.controller("loginCtrl",loginCtrl);