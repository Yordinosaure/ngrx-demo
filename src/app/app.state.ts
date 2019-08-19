// import { Customer } from 'src/app/models/Customer.model';
import * as fromCustomers from './state/reducers/customer.reducer'

export interface AppState {
    customer: fromCustomers.CustomerState;
}