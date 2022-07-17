import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PollingComponent } from './polling.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PollingComponent },
    ]),
  ],
  declarations: [PollingComponent],
})
export class PollingModule {}
