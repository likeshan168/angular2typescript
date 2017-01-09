import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
import { Todo } from './todo'
@Injectable()
export class TodoService {
    private getUrl: string = '/api/todos';
    // private deleteUrl: string = '/api/todos';
    constructor(private http: Http) { }

    // getTodos(): Promise<Todo[]> {
    //     return this.http.get(this.getUrl).toPromise().then(response => response.json() as Todo[]);
    // }
    getTodos(): Observable<Todo[]> {
        return this.http.get(this.getUrl).map((r: Response) => {
            // if(typeof(r))
            // console.log(r.json() as Todo[]);
            return r.json() as Todo[]
        });
    }

    deleteTodo(id: string, finish: boolean): Observable<Todo[]> {
        return this.http.delete(`/api/todos/${id}?finish=${finish}`).map((r: Response) => {
            return r.json() as Todo[]
        })
    }
    // deleteTodo(id: string, finish: boolean): Observable<boolean> {
    //     return this.http.delete(`/api/todos/${id}?finish=${finish}`).map((r: Response) => {
    //         return r.ok;
    //     })
    // }

    createTodo(text: string): Observable<Todo[]> {
        return this.http.post("/api/todos", { text: text }).map((r: Response) => {
            return r.json() as Todo[]
        })
    }
}