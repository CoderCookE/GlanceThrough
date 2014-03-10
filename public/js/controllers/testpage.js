'use strict';

angular.module('mean.system').controller('TestPageController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

}]);