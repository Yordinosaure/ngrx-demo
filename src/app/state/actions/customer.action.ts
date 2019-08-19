import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/Customer.model';


/****************
*GET ALL ACTIONS
******************/

export const GET_CUSTOMERS = '[CUSTOMERS] GET ALL CUSTOMERS';
export const GET_CUSTOMERS_FAIL = '[CUSTOMERS] GET ALL CUSTOMERS FAIL';
export const GET_CUSTOMERS_SUCCESS = '[CUSTOMERS] GET ALL CUSTOMERS SUCCESS';

export class GetAllCustomers implements Action{
    readonly type = GET_CUSTOMERS;

    constructor() {}
}

export class GetAllCustomersFail implements Action{
    readonly type = GET_CUSTOMERS_FAIL;

    constructor(public payload: any) {}
}

export class GetAllCustomersSuccess implements Action{
    readonly type = GET_CUSTOMERS_SUCCESS;
    
    constructor(public payload: Customer[]) {}
}

/*******************
*GET BY ID ACTIONS
********************/

export const GET_CUSTOMER_BY_ID = '[CUSTOMER] GET CUSTOMER BY ID';
export const GET_CUSTOMER_BY_ID_SUCCESS = '[CUSTOMER] GET CUSTOMER BY ID SUCCESS';
export const GET_CUSTOMER_BY_ID_FAIL = '[CUSTOMER] GET CUSTOMER BY ID FAIL';

export class GetCustomerById implements Action {
    readonly type = GET_CUSTOMER_BY_ID;

    constructor(public payload: number) {}
}

export class GetCustomerByIdSuccess implements Action {
    readonly type = GET_CUSTOMER_BY_ID_SUCCESS;

    constructor(public payload: Customer) {}
}

export class GetCustomerByIdFail implements Action {
    readonly type = GET_CUSTOMER_BY_ID_FAIL;

    constructor(public payload: Error) {}
}

/******************
 * Delete Actions
 ******************/
export const DELETE_CUSTOMER = '[CUSTOMER] DELETE CUSTOMER';
export const DELETE_CUSTOMER_SUCCESS = '[CUSTOMER] DELETE CUSTOMER SUCCESS';
export const DELETE_CUSTOMER_FAIL = '[CUSTOMER] DELETE CUSTOMER FAIL';

 export class DeleteCustomer implements Action {
     readonly type = DELETE_CUSTOMER;

     constructor(public payload: number) {}
 }

 export class DeleteCustomerSuccess implements Action {
     readonly type = DELETE_CUSTOMER_SUCCESS;

     constructor(public payload: Customer) {}
 }

 export class DeleteCustomerFail implements Action {
     readonly type = DELETE_CUSTOMER_FAIL;

     constructor(public payload: Error) {}
 }

 /*******************
  * Update Customer
  ********************/

  export const UPDATE_CUSTOMER = '[CUSTOMER] UPDATE CUSTOMER';
  export const UPDATE_CUSTOMER_SUCCESS = '[CUSTOMER] UPDATE CUSTOMER SUCCESS';
  export const UPDATE_CUSTOMER_FAIL = '[CUSTOMER] UPDATE CUSTOMER FAIL';

  export class UpdateCustomer implements Action {
    readonly type = UPDATE_CUSTOMER;

    constructor(public payload: Customer) {}
  }

  export class UpdateCustomerSuccess implements Action {
    readonly type =  UPDATE_CUSTOMER_SUCCESS;

    constructor() {}
  }

  export class UpdateCustomerFail implements Action {
    readonly type = UPDATE_CUSTOMER_FAIL;

    constructor(public payload: Error) {}
  }
/*****************
 * Create Customer
 *****************/
export const CREATE_CUSTOMER = '[CUSTOMER] CREATE CUSTOMER';
export const CREATE_CUSTOMER_SUCCESS = '[CUSTOMER] CREATE CUSTOMER SUCCESS';
export const CREATE_CUSTOMER_FAIL = '[CUSTOMER] CREATE CUSTOMER FAIL';

export class CreateCustomer implements Action {
    readonly type = CREATE_CUSTOMER;

    constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
    readonly type = CREATE_CUSTOMER_SUCCESS;

    constructor(public payload: number) {}
}

export class CreateCustomerFail implements Action {
    readonly type = CREATE_CUSTOMER_FAIL;

    constructor(public payload: Error) {}
}

export type CustomerAction = GetAllCustomers | GetAllCustomersFail | GetAllCustomersSuccess |
                             GetCustomerById | GetCustomerByIdFail | GetCustomerByIdSuccess |
                             DeleteCustomer  | DeleteCustomerFail  | DeleteCustomerSuccess  |
                             UpdateCustomer  | UpdateCustomerFail  | UpdateCustomerSuccess  |
                             CreateCustomer  | CreateCustomerFail  | CreateCustomerSuccess;