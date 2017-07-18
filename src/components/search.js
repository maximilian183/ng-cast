angular.module('video-player')

.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html',
  binding: {
    search: '<'
  },
  controller: function($scope, $element, $attrs, youTube) {
    var $ctrl = this;
    $ctrl.result = function(query) {
      // console.log(query.items);
      $scope.$parent.searchResults(query);
    };

    $scope.searchBox = null;
    $scope.search = function(query) {
      youTube.search(query, $ctrl.result);
    }
  }
});
