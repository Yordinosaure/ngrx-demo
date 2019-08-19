import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';

import * as fromStore from 'src/app/state';
import { Store } from '@ngrx/store';
import { CreateCustomer } from 'src/app/state/actions/customer.action';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  form = this.fb.group({
    name: [''],
    lastName: [''],
    address: [''],
    zip: [''],
    city:['']
  });

  customer: Customer;

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store<fromStore.AllState>) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/');
  }

  save() {
    this.customer = new Customer();
    this.customer.name = this.form.value.name;
    this.customer.lastName = this.form.value.lastName;
    this.customer.address = this.form.value.address;
    this.customer.zip = this.form.value.zip;
    this.customer.city = this.form.value.city;
    this.store.dispatch(new CreateCustomer(this.customer));
  }

}
