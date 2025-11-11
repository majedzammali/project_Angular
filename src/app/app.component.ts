import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FaceSnapListComponent],
  template: `
    <app-header></app-header>
    <app-face-snap-list></app-face-snap-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}