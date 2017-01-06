import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../components/title/title.component'
import { UserService } from '../services/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent],
    providers: [UserService, CookieService]
})
export class CoreModule {
}