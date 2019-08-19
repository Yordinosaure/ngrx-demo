import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/Customer.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  getCustomersById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }

  createCustomer(cust: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, cust);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + '/' + id);
  }

  updateCustomer(cust: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl + '/' + cust.id, cust);
  }


}
