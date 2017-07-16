angular.module('video-player')
.component('videoList', {
  // TODO
  templateUrl: 'src/templates/videoList.html',
  controller: function($scope) {
    this.videos = window.exampleVideoData;
    this.onClick = function() {

    };
  }
});