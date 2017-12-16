angular.module('video-player')

.component('app', {

  controller: function() {
    this.videos = window.exampleVideoData;
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };//will be our on-click. Will change current video
    this.searchResults = () => {};
    this.currentVideo = this.videos[0];
  },

  template: 
  `<div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search><h5><em>search</em> component goes here</h5></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" select-video="$ctrl.selectVideo"><h5><em>videoList</em> component goes here</h5></video-list>
      
      </div>
    <div>
  </div>`
});
