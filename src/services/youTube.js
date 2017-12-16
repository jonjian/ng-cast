angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function (query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        key: YOUTUBE_API_KEY,
        type: 'video',
        maxResults: 5,
        part: 'snippet',
        q: query,
        data: 'json',
        success: function(data) {
          callback(data);
          console.log('IT WORKS! mom get the camera');
        },
        error: function(error) {
          console.log(error);
        }
      }

    });
  };
});



// $scope.search = function (isNewQuery) {
//   $scope.loading = true;
//   $http.get('https://www.googleapis.com/youtube/v3/search', {
//     params: {
//       key: YOUR_API_KEY_HERE,
//       type: 'video',
//       maxResults: '10',
//       pageToken: isNewQuery ? '' : $scope.nextPageToken,
//       part: 'id,snippet',
//       fields: 'items/id,items/snippet/title,items/snippet/description,
//               items/snippet/thumbnails/default,items/snippet/channelTitle,
//               nextPageToken',
//       q: this.query
//     }
//   })
//   .success( function (data) {
//     if (data.items.length === 0) {
//       $scope.label = 'No results were found!';
//     }
//     VideosService.listResults(data, $scope.nextPageToken && !isNewQuery);
//     $scope.nextPageToken = data.nextPageToken;
//     $log.info(data);
//   })
//   .error( function () {
//     $log.info('Search error');
//   })
//   .finally( function () {
//     $scope.loadMoreButton.stopSpin();
//     $scope.loadMoreButton.setDisabled(false);
//     $scope.loading = false;
//   })
//   ;
// };