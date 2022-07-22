import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'wolt-game',
    loadChildren: () =>
      import('@rx-use-cases/wolt-game').then((m) => m.WoltGameModule),
  },
  {
    path: 'polling',
    loadChildren: () =>
      import('@rx-use-cases/polling').then((m) => m.PollingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
