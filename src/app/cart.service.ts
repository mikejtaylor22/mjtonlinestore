import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product){
    this.items.push(product);
    this.items$.next(this.items.length);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  items$ = new Subject()
  constructor(private http: HttpClient) { }

}