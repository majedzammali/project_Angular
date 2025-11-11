import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
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