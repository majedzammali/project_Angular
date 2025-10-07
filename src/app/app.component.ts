import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FaceSnapG1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald 🧸',
        'Mon meilleur ami depuis tout petit !',
        new Date(),
        0,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
      new FaceSnap(
        'Montagne',
        'Une belle montagne enneigée.',
        new Date(),
        0,
        'https://picsum.photos/300/200'
      ),
      new FaceSnap(
        'Plage',
        'Vacances au bord de la mer.',
        new Date(),
        5,
        'https://picsum.photos/300/201'
      )
    ];
  }
}
