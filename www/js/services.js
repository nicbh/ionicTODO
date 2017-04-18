angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
		save: function(task, reset) {
			var tasks = [];
			if(reset == false){
				task.comp = false;
				var taskString = window.localStorage['tasks'];
				if(taskString) {
					tasks = angular.fromJson(taskString);
				}
				tasks.splice(0, 0, task);
			}
			else
				tasks = task;
			window.localStorage['tasks'] = angular.toJson(tasks);
			//console.log(tasks);
		}
	}
})