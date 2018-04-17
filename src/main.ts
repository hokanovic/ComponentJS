import * as angular from 'angular';

let app = angular.module('awesomeApp', []);

app.controller('awesomeAppController', function TodoCtrl($scope) {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},         
        {text: 'Build an app', done:false}
      ];
       
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
      };
      $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
      };
      
        $scope.clearCompleted = function () {
            $scope.todos = $scope.filter($scope.todos, function(todo){
                return !todo.done;
            });
        };
      
} );

  
    
   
    
   
  

// ...and so it begins... 
