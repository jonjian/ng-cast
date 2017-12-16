angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  template: 
  `<h3>RECOMMENDED FOR YOU...</h3>
    <video-list-entry 
      index="$index" 
      video="video"
      ng-repeat="video in $ctrl.videos track by $index"
    />
  


  `
});

// `<ul class="video-list">
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
// </ul>`

// template: `
//     <h1>Todo List</h1>
//     <input ng-model="$ctrl.newTodo">
//     <button ng-click="$ctrl.addTodo()">add</button>
//     <ul>
//       <entry
//         item="todo"
//         index="$index"
//         on-click="$ctrl.removeTodo"
//         ng-repeat="todo in $ctrl.todos track by $index"
//       />
//     </ul>
//     <hr/>
//   `
// })