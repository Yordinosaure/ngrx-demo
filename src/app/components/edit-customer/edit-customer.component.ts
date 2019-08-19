import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { getCustomerById } from 'src/app/state';
import { FormBuilder } from '@angular/forms';
import { UpdateCustomer } from 'src/app/state/actions/customer.action';



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  // customer$: Observable<Customer>;
  customer: Customer;
  form = this.fb.group({
    name: [''],
    lastName: [''],
    address: [''],
    zip: [''],
    city:['']
  });

  constructor(private router: Router,
              private store: Store<fromStore.AllState>,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {

              }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new fromStore.GetCustomerById(params.id))
    });
    this.store.select(getCustomerById).subscribe(x => {
      this.customer = x;
      if(x){
        this.form.controls['name'].setValue(x.name);
        this.form.controls['lastName'].setValue(x.lastName);
        this.form.controls['address'].setValue(x.address);
        this.form.controls['zip'].setValue(x.zip);
        this.form.controls['city'].setValue(x.city);


      }
    });  
  }

  back() {
    this.router.navigateByUrl('/');
  }

  save() {
    this.customer.name = this.form.value.name;
    this.customer.lastName = this.form.value.lastName;
    this.customer.address = this.form.value.address;
    this.customer.zip = this.form.value.zip;
    this.customer.city = this.form.value.city;
    this.store.dispatch(new UpdateCustomer(this.customer));      
  }

}
