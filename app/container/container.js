'use strict';

angular.module('container', ['multiple', 'single']).
  component('container', {
    templateUrl: 'container/container.html',
    controller: ['$scope', '$http', function ContainerCtrl($scope, $http) {

      // get() call  to getting images from API.
      $http.get("https://picsum.photos/list")
        .then(function successCallback(response) {
          $scope.imageData = response;
        },
          function errorCallback() { });

      // get() call  to getting titles.
      $http.get("http://demo8499921.mockable.io/angular")
        .then(function successCallback(response) {
          $scope.imageTitles = response;
          $scope.clubbedData = clubData($scope.imageData.data, $scope.imageTitles.data.titles);
        },
          function errorCallback() { });

      // function to clubbing images & titles.
      function clubData(images, titles) {
        var clubArray = [], i, key;
        for (i = 0; i < titles.length; i++) {
          key = { imageUrl: images[i].filename, title: titles[i] };
          clubArray.push(key);
        }
        return clubArray;
      }
    }],
  });