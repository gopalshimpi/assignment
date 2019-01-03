'use strict';

angular.module('container', ['multiple', 'single']).
  component('container', {
    templateUrl: 'container/container.html',
    controller: ['$scope', '$http', function ContainerCtrl($scope, $http) {
      
    }],
  });