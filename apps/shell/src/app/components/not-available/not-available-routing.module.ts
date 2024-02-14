import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAvailableComponent } from './not-available.component';

const routes: Routes = [
  {
    path: '**', component: NotAvailableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAvailableRoutingModule { }
