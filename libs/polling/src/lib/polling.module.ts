import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PollingComponent } from './polling.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {UtilsModule} from "@rx-cardio/utils";
import {MatChipsModule} from "@angular/material/chips";
import { MapStatusToColorPipe } from './map-status-to-color.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PollingComponent},
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    UtilsModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  declarations: [PollingComponent, MapStatusToColorPipe],
})
export class PollingModule {}
