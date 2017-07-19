angular.module('video-player')
.component('videoList', {
  // TODO
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    onClick: '<',
    videos: '<',
  },
  controller: function($scope, $element, $attrs) {
    var $ctrl = this;

    $ctrl.$onInit = function(){
      $scope.videos = $ctrl.videos;
    };

    $ctrl.$onChanges = function(changeObj){
      $scope.videos = $ctrl.videos;
    };

    $ctrl.onClick = function(video) {
      $ctrl.onClick(video);
    };

  }
});