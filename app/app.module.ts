import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component'
import { TitleComponent } from './components/title/title.component'
import { UserService } from './services/user.service'
import { ContactModule } from './modules/contact/contact.module'
import { AppRoutingModule } from './modules/routing/app-routing.module'


@NgModule({
  imports: [BrowserModule, ContactModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, TitleComponent],

  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
