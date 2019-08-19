import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCustomerReducer from './customer.reducer';
import * as fromCustomerAction from 'src/app/state/actions/customer.action';

export interface AllState {
    customers: fromCustomerReducer.CustomerState
}
/***********
* ALL STATE
***********/
export const getAllState = createFeatureSelector<AllState>('All states');

export const getAllCustState = createSelector(getAllState, (state: AllState) => state.customers);

export const reducers: ActionReducerMap<AllState> = {
    customers: fromCustomerReducer.reducer
};
export const getCustomersState = createFeatureSelector<fromCustomerReducer.CustomerState>('customers');
/*************
*GET ALL CUST
*************/
export const getAllCustomers = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) => state.data);
/*
*error
*/
export const getAllCustomersError = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) =>{
    return state.action ===  fromCustomerAction.GET_CUSTOMERS ? state.error : null;});

/***************
 *GET CUST BY ID 
 ***************/
export const getCustomerById = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) => {
    if (state.action === fromCustomerAction.GET_CUSTOMER_BY_ID_SUCCESS && state.checked) {
        return state.selected;
    } else {
        return null;
    }
});
/*
*error
*/
export const getCustomerByIdError = createSelector(getCustomersState, (state:fromCustomerReducer.CustomerState) => {
    return state.action === fromCustomerAction.GET_CUSTOMER_BY_ID ? state.error : null;});

/*********
 * Delete
 ********/
export const isDeleted = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) =>
state.action === fromCustomerAction.DELETE_CUSTOMER && state.checked && !state.error);
/**
 * error
 */
export const getDeleteError = createSelector(getCustomersState, (state:fromCustomerReducer.CustomerState) =>{
    return state.action === fromCustomerAction.DELETE_CUSTOMER ? state.error : null;});

/*********
 * Create
 ********/
 export const isCreated = createSelector(getCustomersState, (state:fromCustomerReducer.CustomerState) =>
 state.action === fromCustomerAction.CREATE_CUSTOMER && state.checked && !state.error);
 /**
  * error
  */
export const getCreateError = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) => {
    return state.action === fromCustomerAction.CREATE_CUSTOMER ? state.error : null;});

/**********
 * Update
 **********/
 export const isUpdated = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) =>
 state.action === fromCustomerAction.UPDATE_CUSTOMER && state.checked && !state.error);
 /**
  * error
  */
  export const getUpdateError = createSelector(getCustomersState, (state: fromCustomerReducer.CustomerState) => {
      return state.action === fromCustomerAction.CREATE_CUSTOMER ? state.error : null;});