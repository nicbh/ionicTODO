angular.module('starter.controllers')
.controller('CreateController', function ($state, $scope, Tasks) {
  $scope.createTask = function(task) {
    Tasks.save(task, false);
    $state.go("tasks");
    //console.log(task);
  };
});