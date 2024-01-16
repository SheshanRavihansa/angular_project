import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  // templateUrl: '<h3>This is inline template</h3>',

  styleUrl: './products.component.css',
  interpolation :['$','$']
})
export class ProductsComponent {

  firstProductItemName = "White Basmathi Rice";
  secondProductItemName = "wheat Flour";

  public getPriceofRice() {
    return 350;
  }

  public getQuantityofFlour(){
    return 225;
  }

}
