'use strict';

angular.module('app')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.hello = 'hello world';
  }]);