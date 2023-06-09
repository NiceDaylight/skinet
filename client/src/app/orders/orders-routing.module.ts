import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from '../orders-detailed/orders-detailed.component';

const routes : Routes = [
  {path: '', component: OrdersComponent},
  {path: ':id', component: OrderDetailedComponent, data: {breadcrumb: {alias: 'orderDetails'}}},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class OrdersRoutingModule { }
