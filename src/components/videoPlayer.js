angular.module('video-player')

.component('videoPlayer', {
  // TODO
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function($scope) {
    this.video = $scope.$ctrl;
    console.log(this.video);
  }
});
