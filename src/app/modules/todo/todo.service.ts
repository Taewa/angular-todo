import {Injectable} from '@angular/core';
import {Todo} from "./todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private currentId: number = 0;
    public todoList: Todo[] = [];

    constructor() {
    }

    addTodo(newTodo: Todo): void {
        newTodo.id = ++this.currentId;
        this.todoList.push(newTodo);
    }

    getTodoList(): Todo[] {
        return this.todoList;
    }

    deleteTodo(id: number): void {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
    }
}
