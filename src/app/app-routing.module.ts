import { DashGuard } from './dashboard/dash.guard';
import { RvwComponent } from './reviews/rvw/rvw.component';
import { ErrComponent } from './err/err/err.component';
import { LgnComponent } from './login/lgn/lgn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';

const routesDash: Routes = [
  { path: 'rv', component: RvwComponent }
]

const routes: Routes = [
  { path: '', component: LgnComponent },
  { path: 'dash', redirectTo: 'dash/def', pathMatch: 'full' },
  { path: 'dash/:usNm', component: DashComponent, children: routesDash, canActivate : [DashGuard] },
  { path: '**', component: ErrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
