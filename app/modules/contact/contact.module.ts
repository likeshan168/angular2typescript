import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AwesomePipe } from '../../pipe/awesome.pipe';
import { ContactComponent } from '../../components/contact/contact.component'
import { ContactService } from '../../components/contact/contact.service'
import { HighlightDirective } from '../../directives/highlight.directive';
import { ContactRoutingModule } from './contact-routing.module'

@NgModule({
    imports: [CommonModule, FormsModule, ContactRoutingModule],
    declarations: [ContactComponent, HighlightDirective, AwesomePipe],
    // exports: [ContactComponent],
    //现在我们通过路由器导航到ContactComponent，所以也就没有理由公开它了
    providers: [ContactService]
})

export class ContactModule { }
