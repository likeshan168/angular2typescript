import { NgModule } from '@angular/core'
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../shared/shared.module'
import { TitleComponent } from '../../components/title/title.component'
@NgModule({
    imports: [SharedModule],
    declarations: [TitleComponent],
    providers: [UserService]
})

export class TitleModule { }