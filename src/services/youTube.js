angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(name, callback) {
    $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      dataType: 'json',
      params:{
        part: 'snippet',
        key: 'AIzaSyD4_z5xrVmMjhk9yTeCx2OZRSfPjb2RzZA',
        q: name,
        maxResults: '10',
        type: 'video'
      }
    }).then(
      function mySuccess(response) {
        callback(response.data.items);
      }, function myError(response) {
        // console.log(response.data);
      }
    )
  };
});
