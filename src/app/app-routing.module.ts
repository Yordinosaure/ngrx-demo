import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from 'src/app/components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from 'src/app/components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

const routes: Routes = [
  {path: "", component: CustomerListComponent},
  {path: 'detail/:id', component: CustomerDetailsComponent},
  {path: 'edit/:id', component: EditCustomerComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: "**",component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
