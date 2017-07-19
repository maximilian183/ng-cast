angular.module('video-player')
.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function($scope, $element, $attrs, youTube) {

    var $ctrl = this;

    $ctrl.selectVideo = function(video) {
      $scope.currentVideo = video;
      $ctrl.currentVideo = video;
    };

    youTube.search('cats', (results) => {
        $ctrl.selectVideo(results[0]);
        $scope.videos = results;
        $ctrl.videos = results;
    });

    $ctrl.searchResults = function(results) {
      if (Array.isArray(results)) {
        $ctrl.selectVideo(results[0]);
        $scope.videos = results;
      }
    };

    $scope.selectVideo = $ctrl.selectVideo;
    $scope.searchResults = $ctrl.searchResults;
    $scope.videos = $ctrl.videos;
    $scope.currentVideo = $ctrl.currentVideo;
  }
});