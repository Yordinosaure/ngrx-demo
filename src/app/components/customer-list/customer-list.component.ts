import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from 'src/app/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList$: Observable<Customer[]>;

  constructor(private store: Store<fromStore.AllState>,
    private router: Router) {}

  ngOnInit() {
    this.customerList$ = this.store.select(fromStore.getAllCustomers);
    this.store.dispatch(new fromStore.GetAllCustomers());
  }    

  edit(id: number) {
    this.router.navigate(['/edit/', id]);
  }

  delete(id: number) {
    if(confirm('are you sure ?')){
      this.store.dispatch(new fromStore.DeleteCustomer(id));
    };
  }
  
  addCust() {
    this.router.navigateByUrl('/addCustomer');
  }

  toDetails(id: number) {
    this.router.navigate(['/detail/', id]);
  }

}
