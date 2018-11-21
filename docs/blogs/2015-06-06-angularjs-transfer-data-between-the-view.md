---
title: AngularJS中通过ui-route将数据传递给视图。

category: [javascript]
---

```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp" ng-controller="AppCtrl">
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
  <script src="http://cdn.bootcss.com/angular.js/1.4.0-rc.2/angular.min.js"></script>
  <script src="http://cdn.bootcss.com/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
  <script>
  var ng = angular.module('myApp',['ui.router']);
  ng.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('index', {
      url: '/',
      template: '<h1>Hello world</h1>',
      controller: 'MainCtrl',
      data: {
        title: 'homePage'
      }
    })
  });
  ng.controller('AppCtrl',['$scope',function($scope){
    var vm = $scope;
    vm.title = 'default';

    // this'll be called on every state change in the app
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.data && angular.isDefined(toState.data.title)) {
        vm.title = toState.data.title;
        return;
      }

      vm.title = 'default';
    });
  }])
  .controller('MainCtrl',[function(){

  }]);
  </script>
</head>
<body>
<div ui-view></div>
</body>
</html>

```

利用ui-route中的$stateChangeSuccess事件，在每次state改变时，获取$state上的data对象。
