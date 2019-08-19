import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { getCustomerById } from 'src/app/state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer$: Observable<Customer>;
  customer: Customer;

  constructor(private store: Store<fromStore.AllState>,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new fromStore.GetCustomerById(params.id))
    });

    this.store.select(getCustomerById).subscribe(x => this.customer = x);
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
