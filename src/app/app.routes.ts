import { Routes } from '@angular/router';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

export const routes: Routes = [
  { path: 'facesnap1', component: FaceSnapG1Component },
  { path: 'list', component: FaceSnapListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];