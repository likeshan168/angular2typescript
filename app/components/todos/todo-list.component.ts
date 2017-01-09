import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo.service'
import { Todo } from './todo'
@Component({
    moduleId: module.id,
    selector: 'app-todo',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoComponent {
    todos: Todo[];
    todo: Todo = new Todo();
    todoLength: number;
    finished: number;
    constructor(private todoService: TodoService) {

    }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(x => {
            // console.log('init');
            this.todos = x
            this.todoLength = this.todos.filter(x => !x.finish).length;
            this.finished = this.todos.filter(x => x.finish).length;
        });
        // this.todoService.getTodos().subscribe(x => {
        //     this.todos = x
        // });

    }

    deleteTodo(id: string, finish: boolean): void {

        this.todoService.deleteTodo(id, finish).subscribe(x => {
            this.todos = x
            this.todoLength = this.todos.filter(x => !x.finish).length;
            this.finished = this.todos.filter(x => x.finish).length;

        })
    }

    createTodo():void{
        this.todoService.createTodo(this.todo.text).subscribe(x=>{
            this.todos = x
            this.todoLength = this.todos.filter(x => !x.finish).length;
            this.finished = this.todos.filter(x => x.finish).length;
        })
    }
}