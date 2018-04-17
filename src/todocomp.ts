import {IModule, IAugmentedJQuery} from 'angular';

import {StepType} from './types';

export default function registerTodoComponent(app: IModule){
  app.component('todo', {
    controllerAs: 'c',
    template: `





    
      <ul>
        <li ng-repeat="todo in c.todos track by $index">
          <label ng-class="{done: todo.complete}">
            <input type="checkbox" ng-model="todo.complete">
            {{todo.kind}}
          </label>
          <button ng-click="c.delete($index)">delete</button>
        </li>
      </ul>





      <form ng-submit="c.submit($event)">
        <input id="field" placeholder="What to do?" autofocus>
        <button type="submit">Add</button>
      </form>
      <hr/>
      <button ng-click="c.clearCompleted()"
              ng-disabled="!c.numberOfCompleted">
        Clear completed
      </button>
    `,
    controller: class TodoComponent {
      todos: StepType[]
      field: HTMLInputElement;
      constructor($element: IAugmentedJQuery){
        this.field = $element[0].querySelector("#field");
        this.todos = [
            { kind: "Löpning", unit: "puls", value: "153"}
        ];
      }
      delete(n: number){
        this.todos.splice(n, 1);
        this.field.focus();
      }
      submit(e: Event){
        e.preventDefault();
        if (this.field.value){
          this.todos.push(
            { kind: "Löpning", unit: "puls", value: "153"}
          );
          this.field.value = "";
          this.field.focus();
        }
      }
      clearCompleted(){
        this.todos = this.todos.filter(t => !t.complete);
      }
      get numberOfCompleted(){
        return this.todos.filter(t => t.complete).length;
      }
    }
  })
}