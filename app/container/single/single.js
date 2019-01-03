'use strict';

angular.module('single', []).
  component('single', {
    transclude: true,
    bindings: {
      data: '<'
    },
    templateUrl: 'container/single/single.html',
    controller: ['$scope', function SingleCtrl($scope) {
      this.$onInit = function () {
        $scope.data = this.data;
      };
    }],
  });