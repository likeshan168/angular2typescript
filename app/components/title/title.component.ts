import { Component, Input } from '@angular/core'
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'my-title',
    templateUrl: 'title.component.html',

})

export class TitleComponent {
    constructor(private userService: UserService) { 
        this.user = userService.userName;
    }
    @Input() subtitle = '';
    title = 'Angular modules';
    user=''
}