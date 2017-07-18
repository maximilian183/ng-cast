angular.module('video-player')
.component('videoList', {
  // TODO
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<'
  },
  controller: function($scope, $element, $attrs) {
    var $ctrl = this;

    $ctrl.$onInit = function(){
      $scope.videos = $ctrl.videos;
      console.log($scope.videos);
    }


    $ctrl.onClick = function(video) {
      $scope.$parent.selectVideo(video);
    };
  }
});