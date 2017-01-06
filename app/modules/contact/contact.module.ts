import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { ContactComponent } from '../../components/contact/contact.component'
import { ContactService } from '../../components/contact/contact.service'
import { ContactRoutingModule } from './contact-routing.module'

@NgModule({
    imports: [SharedModule, ContactRoutingModule],
    declarations: [ContactComponent],
    // exports: [ContactComponent],
    //现在我们通过路由器导航到ContactComponent，所以也就没有理由公开它了
    providers: [ContactService]
})

export class ContactModule { }
