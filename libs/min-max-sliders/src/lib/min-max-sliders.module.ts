import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MinMaxSlidersComponent } from './min-max-sliders.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MinMaxSlidersComponent},
    ]),
    MatSliderModule,
    MatCardModule,
  ],
  declarations: [MinMaxSlidersComponent],
})
export class MinMaxSlidersModule {}
