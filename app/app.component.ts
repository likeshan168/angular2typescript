import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <my-title [subtitle]="subtitle"></my-title>
     <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
      <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  name = 'Angular';
  subtitle = '(v1)';
}
