import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as customerActions from '../actions/customer.action';
import * as fromServices from 'src/app/services';
import { Customer } from 'src/app/models/Customer.model';

@Injectable()
export class CustomerEffects {

    constructor(private actions$: Actions,
                private customerService: fromServices.CustomerService) {}

   @Effect()
   getAllCustomers$: Observable<Action> = this.actions$.pipe(
       ofType(customerActions.GET_CUSTOMERS),
       switchMap(() => this.customerService.getCustomers()),
       map((customers) => new customerActions.GetAllCustomersSuccess(customers)),
       catchError((err) => [new customerActions.GetAllCustomersFail(err)])
   );

   @Effect()
   getCustomerById$  = this.actions$.pipe(
       ofType(customerActions.GET_CUSTOMER_BY_ID),
       map((action: customerActions.GetCustomerById) => action.payload),
       switchMap((id) => this.customerService.getCustomersById(id)),
       map((customer) => new customerActions.GetCustomerByIdSuccess(customer)),
       catchError((err) => [new customerActions.GetCustomerByIdFail(err)])
   );

   @Effect()
   createCustomer$ = this.actions$.pipe(
       ofType(customerActions.CREATE_CUSTOMER),
       map((action: customerActions.CreateCustomer) => action.payload),
       switchMap(newCustomer => this.customerService.createCustomer(newCustomer)),
       map((response) => new customerActions.CreateCustomerSuccess(response.id)),
       catchError((err) => [new customerActions.CreateCustomerFail(err)])
   );

   @Effect()
   deleteCustomer$ = this.actions$.pipe(
       ofType(customerActions.DELETE_CUSTOMER),
       map((action: customerActions.DeleteCustomer) => action.payload),
       switchMap((id) => this.customerService.deleteCustomer(id)),
       map((cust: Customer) => new customerActions.DeleteCustomerSuccess(cust)),
       catchError((err) => [new customerActions.DeleteCustomerFail(err)])
   );

   @Effect()
   updateCustomer$ = this.actions$.pipe(
    ofType(customerActions.UPDATE_CUSTOMER),
    map((action: customerActions.UpdateCustomer) => action.payload),
    switchMap(cust => this.customerService.updateCustomer(cust)),
    map(() => new customerActions.UpdateCustomerSuccess()),
    catchError((err) => [new customerActions.UpdateCustomerFail(err)])
   );
}