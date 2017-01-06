import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './modules/routing/app-routing.module'
import { LoginModule } from './modules/login/login.module'
import { ContactModule } from './modules/contact/contact.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { UsersListModule } from './modules/users/users-list.module'

@NgModule({
  imports: [BrowserModule, NgbModule.forRoot(), CoreModule, AppRoutingModule, LoginModule, ContactModule, UsersListModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
