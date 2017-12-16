angular.module('video-player')

.component('search', {
 
  bindings: {
    searchResults: '<'
  },

  controller: function(youTube) {
    this.service = youTube;
    this.newQuery = '';
    this.liveSearch = (query, callback) => {
      this.service.search(query, callback);
    };
  },
  template: 
`<div class="search-bar form-inline">
  <input class="form-control" type="text" 
  ng-keyDown="$ctrl.liveSearch($ctrl.newQuery, $ctrl.searchResults)"
  ng-model-options='{debounce: 500}'
  ng-change="$ctrl.liveSearch($ctrl.newQuery, $ctrl.searchResults)"
  ng-model="$ctrl.newQuery"/>
  <button ng-click="$ctrl.service.search($ctrl.newQuery, $ctrl.searchResults)" class="btn">
    <span class="glyphicon glyphicon-search"></span>
  </button>
</div>`
});


//ng-click="$ctrl.service.search($ctrl.newQuery, $ctrl.searchResults())"