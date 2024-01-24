import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  // templateUrl: '<h3>This is inline template</h3>',

  styleUrl: './products.component.css',
  // interpolation: ['$', '$']
})
export class ProductsComponent {

  showAddProduct: boolean | undefined;
  isLoading :boolean = false;
  firstProductItemName = "White Basmathi Rice";
  secondProductItemName = "wheat Flour";
  public rowIndex: number | undefined;
  public rowSelected: boolean | undefined;

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private productService: ProductService) {}

  public showAddProducts() {
    this.showAddProduct = true;
  }
  public hideAddProducts() {
    this.showAddProduct = false;
  }

  public getPriceofRice() {
    return 350;
  }

  public getQuantityofFlour() {
    return 225;
  }

  public products: Product[] = [];

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  public selectProduct(row: number) {
    this.rowSelected = true;
    this.rowIndex = row;
  }

}
