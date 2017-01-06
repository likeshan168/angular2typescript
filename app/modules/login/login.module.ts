import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { LoginComponent } from '../../components/login/login.component'
import { LoginService } from '../../components/login/login.service'

@NgModule({
    imports: [SharedModule],
    declarations: [LoginComponent],
    providers: [LoginService]
})

export class LoginModule { }