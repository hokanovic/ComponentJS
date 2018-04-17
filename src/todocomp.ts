import { IModule, IAugmentedJQuery } from 'angular';

import { StepType } from './types';

export default function registerTodoComponent(app: IModule) {
    app.component('todo', {
        controllerAs: 'c',
        template: `


<div class="wrapper">

<h1>Träningsschema</h1>
<hr/>
      <ul>
        <li ng-repeat="todo in c.todos track by $index">
          <label ng-class="{done: todo.complete}">        
            <div id="tyst" class="alert alert-info alert-dismissible fade show" role="alert">
            <div class="row">
                <div class="col">
            {{todo.kind}}
              </div>
              <div class="col">
              {{todo.unit}}
                </div>
                <div class="col">
                {{todo.value}}
                  </div>
                  <div class="col">
                  </div>  
      </div>
                  </label>
                  <button ng-click="c.delete($index)" type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
        </li>
      </ul>



      <div class="alert alert-info alert-dismissible fade show" role="alert">
      <div class="row">
          <div class="col">
          <select class="form-control" id="field">
          <optgroup label="Välj typ av steg">
          <option value="Uppvärmning">Uppvärmning</option>
          <option value="Löpning">Löpning</option>
          <option value="Återhämtning">Återhämtning</option>
          <option value="Vila">Vila</option>
          <option value="Nedvarvning">Nedvarning</option>
        </optgroup>
      </select>
    </div>


    <div class="col">
    <select class="form-control" id="field2"  placeholder="Shamaga">
      <optgroup label="Välj varaktighet" placeholder="Shamaga" >
        <option value="Tid">Tid</option>
        <option value="Distans">Distans</option>
        <option value="Puls">Puls</option>
      </optgroup>
    </select>
  </div>

  <div class="col">
  <input type="text" class="form-control" id="field3">
</div>

<div class="col">
<label for="colFormLabel" class=" col-form-label">bmp/mm:ss/m/km</label>
</div>


</div>

      </div>
      <form ng-submit="c.submit($event)">

      <button type="submit">Add</button>
      </form>
<hr/>

<button ng-click="c.clearCompleted()">
Clear completed
</button>

      </div>


      
    `,
        controller: class TodoComponent {
            todos: StepType[]
            field: HTMLInputElement;
            field2: HTMLInputElement;
            field3: HTMLInputElement;
            constructor($element: IAugmentedJQuery) {
                this.field = $element[0].querySelector("#field");
                this.field2 = $element[0].querySelector("#field2");
                this.field3 = $element[0].querySelector("#field3");
                this.todos = [];
            }
            delete(n: number) {
                this.todos.splice(n, 1);
                this.field.focus();
            }
            submit(e: Event) {
                e.preventDefault();
                if ((this.field.value) && (this.field2.value) && (this.field3.value)) {
                    this.todos.push(
                        { kind: this.field.value, unit: this.field2.value, value: this.field3.value }
                    );
                    this.field.value = "";
                    this.field2.value = "";
                    this.field3.value = "";
                }
            }
            clearCompleted() {
                this.todos = [];
            }
            get numberOfCompleted() {
                return this.todos.filter(t => t.complete).length;
            }
        }
    })
}