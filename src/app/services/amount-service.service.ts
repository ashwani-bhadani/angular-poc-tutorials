import { Injectable } from '@angular/core';

@Injectable({ //injectable means we can inject & us this as a .ts code in entire project
  providedIn: 'root'
})
export class AmountServiceService {

  constructor() { 
    console.log("Amount service is called")
  }

  getAmountData(){ //this way some common data is available everywhere by a method
    return [
      {product:"bulbs",price:90},
      {product:"batteries",price:300},
      {product:"pliers nose tip",price:500},
      {product:"wires", price:30}
    ]
  }
}
