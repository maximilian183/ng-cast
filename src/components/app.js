angular.module('video-player')
.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function($scope, $element, $attrs, youTube) {

    var $ctrl = this;
    $ctrl.videos = [];
    $ctrl.currentVideo = {};
    $scope.HAS_VIDEO = false;

    $ctrl.selectVideo = function(video) {
      $scope.currentVideo = video;
    };

    $ctrl.searchResults = function(results) {
      if (Array.isArray(results.items)) {
        $ctrl.selectVideo(results.items[0]);
        $ctrl.videos = results.items;
        $scope.videos = $ctrl.videos;
      }
    };

    $ctrl.$onInit = function() {
      youTube.search('cats', $ctrl.searchResults);
      if ($scope.currentVideo !== undefined) {
        $scope.HAS_VIDEO = !$scope.HAS_VIDEO;
      }
    }


    $scope.selectVideo = $ctrl.selectVideo;
    $scope.searchResults = $ctrl.searchResults;
    $scope.videos = $ctrl.videos;
    $scope.currentVideo = $ctrl.currentVideo;
  }
});