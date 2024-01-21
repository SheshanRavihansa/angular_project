import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  // templateUrl: '<h3>This is inline template</h3>',

  styleUrl: './products.component.css',
  // interpolation: ['$', '$']
})
export class ProductsComponent {

  firstProductItemName = "White Basmathi Rice";
  secondProductItemName = "wheat Flour";

  public rowIndex: number | undefined;
  public rowSelected: boolean | undefined;

  public getPriceofRice() {
    return 350;
  }

  public getQuantityofFlour() {
    return 225;
  }

  public products = [
    {
      productId: "001",
      'productName': "White Basmathi Rice",
      'createdDate': "Oct 25, 2020",
      'quantity': 100,
      'unitPrice': "400",
      'productDescription': "White Basmathi Rice imported from pakistan"
    }, {
      productId: "002",
      'productName': "Flour",
      'createdDate': "Jan 14, 2020",
      'quantity': 50,
      'unitPrice': "190",
      'productDescription': "Super Fine Whole grain general Purpose flour. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }, {
      productId: "003",
      'productName': "sugar",
      'createdDate': "Aug 03, 2020",
      'quantity': 1200,
      'unitPrice': "200",
      'productDescription': "White sugar manufactured by Palwatte Factory"
    }, {
      productId: "004",
      'productName': "Dhal",
      'createdDate': "Sep 29, 2020",
      'quantity': 10,
      'unitPrice': "200",
      'productDescription': "Imported mysoor dhal from India. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
  ]

  public selectProduct(row: number) {
    this.rowSelected = true;
    this.rowIndex = row;
  }

}
