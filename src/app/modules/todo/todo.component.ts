import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";
import {TodoService} from "./todo.service";


@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public newTodo: Todo = new Todo();

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
    }

    get todoList(): Todo[] {
        return this.todoService.getTodoList();
    }

    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    deleteTodo(todo: Todo) {
        this.todoService.deleteTodo(todo.id);
    }



}
