angular.module('video-player')

.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<'
  },
  controller: function($scope, $element, $attrs, youTube) {
    var $ctrl = this;

    $scope.searchBox = null;
    $scope.result = function(query) {
      youTube.search(query, $ctrl.result);
    };
  }
});
