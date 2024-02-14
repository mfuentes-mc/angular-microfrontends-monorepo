import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  {
    path: 'shop',
    loadComponent: ()=> ShopComponent
  },
  {
    path: 'prices',
    loadComponent: ()=> PricesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
