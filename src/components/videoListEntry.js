angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    index: '<',
    onClick: '<'
  },

  controller: function() {
  },


  template: 
    `<li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src='{{$ctrl.video.snippet.thumbnails.default.url}}' />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title" ng-click="$ctrl.onClick($ctrl.index)">{{$ctrl.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
      </div>
    </li>`
});

    // `<li>Dummy li</li>`

// .component('entry', {
//   bindings: {
//     item: '<',
//     index: '<',
//     onClick: '<'
//   },
//   controller: function(){
//     debugger;
//   },
//   template: `
//     <li ng-click="$ctrl.onClick($ctrl.index)">{{$ctrl.item}}</li>
//   `
// })