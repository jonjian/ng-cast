angular.module('video-player')

.component('search', {
 
  bindings: {
    searchResults: '<'
  },

  controller: function(youTube) {
    this.service = youTube;
    this.newQuery = '';
  },
  template: 
`<div class="search-bar form-inline">
  <input class="form-control" type="text" ng-model="$ctrl.newQuery"/>
  <button  ng-click="$ctrl.service.search($ctrl.newQuery, $ctrl.searchResults)" class="btn">
    <span class="glyphicon glyphicon-search"></span>
  </button>
</div>`
});


//ng-click="$ctrl.service.search($ctrl.newQuery, $ctrl.searchResults())"