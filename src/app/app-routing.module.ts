import { RvwComponent } from './reviews/rvw/rvw.component';
import { ErrComponent } from './err/err/err.component';
import { LgnComponent } from './login/lgn/lgn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';

const routes: Routes = [
  { path: '', component: LgnComponent },
  { path: 'dash/:usNm', component: DashComponent },
  { path: 'rv', component: RvwComponent },
  { path: '**', component: ErrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
