import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  onSnapAll() {
    // You can implement logic to snap all FaceSnaps
    console.log('Snap All clicked');
    alert('Snap All feature would be implemented here!');
  }

  onResetAll() {
    // You can implement logic to reset all FaceSnaps
    console.log('Reset All clicked');
    alert('Reset All feature would be implemented here!');
  }
}