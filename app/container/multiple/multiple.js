'use strict';

angular.module('multiple', []).
  component('multiple', {
    transclude: true,
    bindings: {
      data: '<'
    },
    templateUrl: 'container/multiple/multiple.html',
    controller: ['$scope', function MultipleCtrl($scope) {
      this.$onInit = function () {
        $scope.data = this.data;
      };
    }],
  });