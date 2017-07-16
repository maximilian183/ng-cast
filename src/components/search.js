angular.module('video-player')

.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html',
  binding: {
    query: '='
  },
  controller: function() {
    this.result = function() {

    };
  }
});
