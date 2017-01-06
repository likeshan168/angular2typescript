import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { UsersListComponent } from '../../components/users/users-list.component'
import { LoginService } from '../../components/login/login.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
 

@NgModule({
    imports: [SharedModule,NgbModule],
    declarations: [UsersListComponent],
    // providers: [LoginService]
})

export class UsersListModule { }