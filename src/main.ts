import * as angular from 'angular';

let app = angular.module('awesomeApp', []);

app.controller('awesomeAppController', function TodoCtrl($scope) {
    $scope.object = 
    $scope.todos = [
        //{text:'', done:false},         
        //{text:'', done:false}
      ];
       
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
      };

     /*  $scope.addStep = function() {
        $scope.
      } */
      $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
      };
      
        $scope.clearCompleted = function () {
            $scope.todos =($scope.todos, function(todo){
                return !todo.done;
            });
        };
      
} );

  
    
   
    
   
  

// ...and so it begins... 

