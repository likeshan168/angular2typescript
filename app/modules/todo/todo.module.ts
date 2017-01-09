import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { TodoComponent } from '../../components/todos/todo-list.component'
import { TodoService } from '../../components/todos/todo.service'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
    imports: [SharedModule, HttpModule, NgbModule],
    declarations: [TodoComponent],
    providers: [TodoService]
})

export class TodoModule { }