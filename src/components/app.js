angular.module('video-player')

.component('app', {

  controller: function() {
    this.videos = exampleVideoData;
    this.key = YOUTUBE_API_KEY;
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };//will be our on-click. Will change current video
    this.searchResults = (data) => {
      this.videos = data;
    };
    this.currentVideo = this.videos[0];
  },

  template: 
  `<div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search search-results="$ctrl.searchResults"></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="$ctrl.currentVideo"></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" select-video="$ctrl.selectVideo"></video-list>
      
      </div>
    <div>
  </div>`
});
