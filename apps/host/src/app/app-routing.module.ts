import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'wolt-game',
    loadChildren: () =>
      import('@rx-cardio/wolt-game').then((m) => m.WoltGameModule),
  },
  {
    path: 'polling',
    loadChildren: () =>
      import('@rx-cardio/polling').then((m) => m.PollingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
