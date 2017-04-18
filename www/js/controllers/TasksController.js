angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, $ionicListDelegate, Tasks) {
	$scope.tasks = Tasks.all();
  	$scope.cssline = {"text-decoration":"'line-through"};
  	$scope.noline = {"text-decoration":"none"};
  	$scope.getstyle = function(task){
  		if(task.comp == true)
  			return 'line-through';
  		else
  			return 'none';
  	};
  	$scope.complete = function(task, index){
  		if(task.comp==false){
			$scope.tasks.splice(index, 1);
			task.comp = true;
			var index;
			for(index=0; index<$scope.tasks.length; index++){
				if($scope.tasks[index].comp == true)
					break;
			}
			$scope.tasks.splice(index, 0, task);
			Tasks.save($scope.tasks, true);
  		}
		$ionicListDelegate.closeOptionButtons();
  	};
});