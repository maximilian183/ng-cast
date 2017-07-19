angular.module('video-player')

.component('videoPlayer', {
  // TODO
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function($scope) {
    var $ctrl = this;

    $scope.HAS_VIDEO = false;

    $ctrl.$onInit = function() {
      // console.log($ctrl);
      // console.log($scope, 'scope');
      if ($ctrl.video !== undefined) {
        $scope.HAS_VIDEO = !$scope.HAS_VIDEO;
      }
    };

    $ctrl.getIframeSrc = function(videoId) {
      var src = 'https://www.youtube.com/embed/' + videoId;
      return src;
    };
  }
});
