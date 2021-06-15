import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to manage todo list data in memory.
 *  and imitate restful api endpoints for CRUD operations
 */
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  constructor() {}
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  getAllTodos(): Todo[] {
    return this.todos;
  }
  getTodoById(id: number): Todo | undefined {
    return this.todos.filter((todo) => todo.id === id).pop();
  }
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null as any;
    }
    Object.assign(todo, values);
    return todo;
  }
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }
  toggleTodoStatus(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      isComplete: !todo.isComplete,
    });
    return updatedTodo;
  }
}
