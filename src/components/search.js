angular.module('video-player')

.component('search', {
  bindings: {},
  controller: function() {
    this.result = () => {};
  },
  template: 
`<div class="search-bar form-inline">
  <input class="form-control" type="text" />
  <button class="btn">
    <span class="glyphicon glyphicon-search"></span>
  </button>
</div>`
});
