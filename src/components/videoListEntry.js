angular.module('video-player')
.component('videoListEntry', {
  // TODO
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    video: '<'
  },
  controller: function($scope) {
    this.video = $scope.$ctrl;
  }
});