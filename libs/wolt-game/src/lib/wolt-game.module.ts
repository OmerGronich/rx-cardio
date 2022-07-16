import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WoltGameComponent } from './wolt-game.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: WoltGameComponent },
    ]),
    MatRippleModule,
  ],
  declarations: [WoltGameComponent],
})
export class WoltGameModule {}
