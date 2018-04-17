import * as angular from 'angular';

let app = angular.module('todoApp', []);

import registerTodoComponent from './todocomp';
registerTodoComponent(app);

