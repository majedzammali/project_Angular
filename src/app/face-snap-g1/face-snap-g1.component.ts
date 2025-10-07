import { Component, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-g1',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.scss']
})
export class FaceSnapG1Component {
  @Input() faceSnap!: FaceSnap;
  buttonText: string = 'Oh Snap!';

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
