import { Customer } from 'src/app/models/Customer.model';
import * as fromCustomerActions from 'src/app/state/actions/customer.action';


export interface CustomerState {
    data: Customer[];
    selected: Customer;
    action: string;
    error?: Error;
    checked: boolean;
    
}

export const initialState: CustomerState = {
    data: [],
    selected: null,
    action: null,
    error: null,
    checked: false
};

export function reducer(
    state = initialState,
    action: fromCustomerActions.CustomerAction
): CustomerState {
    switch(action.type) {

        /********
        *GET ALL
        *********/
        case fromCustomerActions.GET_CUSTOMERS: {
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMERS,
                selected: null,
                checked: false,
                error: null
            };
        }
        case fromCustomerActions.GET_CUSTOMERS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMERS_SUCCESS,
                selected: null,
                checked: true,
                error: null,
                data: action.payload
            };
        }
        case fromCustomerActions.GET_CUSTOMERS_FAIL: {
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMERS_FAIL,
                selected: null,
                checked: false,
                error: action.payload
            };
        }

        /*********
        *GET BY ID
        **********/

        case fromCustomerActions.GET_CUSTOMER_BY_ID: {
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMER_BY_ID,
                selected: null,
                checked: false,
                error: null
            };
        }
        case fromCustomerActions.GET_CUSTOMER_BY_ID_SUCCESS: {
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMER_BY_ID_SUCCESS,
                selected: action.payload,
                checked: true,
                error: null
            };
        }
        case fromCustomerActions.GET_CUSTOMER_BY_ID_FAIL: {
            return {
                ...state,
                action: fromCustomerActions.GET_CUSTOMER_BY_ID_FAIL,
                selected: null,
                checked: false,
                error: action.payload
            };
        }
        /*********
         * Delete
         **********/
        case fromCustomerActions.DELETE_CUSTOMER: {
            const selected = state.data.find(c => c.id === action.payload);
            return {
                ...state,
                action: fromCustomerActions.DELETE_CUSTOMER,
                selected,
                checked: false,
                error: null
            };
        }
        case fromCustomerActions.DELETE_CUSTOMER_SUCCESS: {
            const data = state.data.filter(c => c.id !== state.selected.id);
            return {
                ...state,
                data,
                selected: null,
                error: null,
                checked: true
            };
        }
        case fromCustomerActions.DELETE_CUSTOMER_FAIL: {
            return {
                ...state,
                selected: null,
                checked: true,
                error: action.payload
            };
        }

        /******************
         * Create Customer
         *****************/
        case fromCustomerActions.CREATE_CUSTOMER: {
            return {
                ...state,
                selected: action.payload,
                action: fromCustomerActions.CREATE_CUSTOMER,
                checked: false,
                error: null
            };
        }
        case fromCustomerActions.CREATE_CUSTOMER_SUCCESS: {
            const newCust = {...state.selected, id: action.payload};
            const data = [...state.data, newCust]
            return {
                ...state,
                data,
                selected: null,
                error: null,
                checked: true
            };
        }
        case fromCustomerActions.CREATE_CUSTOMER_FAIL: {
            return {
                ...state,
                selected: null,
                checked: true,
                error: action.payload
            };
        }

        /******************
         * Update Customer
         ******************/

        case fromCustomerActions.UPDATE_CUSTOMER: {
            return {
                ...state,
                selected: action.payload,
                action: fromCustomerActions.UPDATE_CUSTOMER,
                checked: false,
                error: null
            }

        }
        case fromCustomerActions.UPDATE_CUSTOMER_SUCCESS: {
            const index = state.data.findIndex( c => c.id === state.selected.id);
            const data = [...state.data.slice(0, index),
                        state.selected,
                        ...state.data.slice(index + 1)];
            return {
                ...state,
                data,
                checked: true,
                selected: null,
                error: null
            }
        }
        case fromCustomerActions.UPDATE_CUSTOMER_FAIL: {
            return {
                ...state,
                checked: true,
                selected: null,
                error: action.payload
            }
        }
       
    }
    return state;
}