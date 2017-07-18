angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function($scope) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
    }

    $ctrl.getIframeSrc = function(videoId) {
      var src = 'https://www.youtube.com/embed/' + videoId;
      return src;
    }

  }
});
