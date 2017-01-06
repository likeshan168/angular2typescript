import { Component, Input } from '@angular/core'
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../shared/shared.module'

@Component({
    moduleId: module.id,
    selector: 'my-title',
    templateUrl: 'title.component.html',

})

export class TitleComponent {
    constructor(private userService: UserService) {
        this.uname = userService.userName;
    }
    @Input() subtitle = '';
    title = 'Angular modules';
    uname = ''
}