import { ReturnStatement } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { ViewProductDetailsComponent } from '../view-product-details/view-product-details.component';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  // templateUrl: '<h3>This is inline template</h3>',

  styleUrl: './products.component.css',
  // interpolation: ['$', '$']
})
export class ProductsComponent {

  showAddProduct: boolean | undefined;
  showEditProduct!: boolean; // you can also declare undefined veriables using !
  selectedProduct!: Product;

  isLoading: boolean = false;
  firstProductItemName = "White Basmathi Rice";
  secondProductItemName = "wheat Flour";
  public rowIndex: number | undefined;
  public rowSelected: boolean | undefined;

  ngOnInit(): void {
    this.getProducts();
  }

  // @ViewChild(ViewProductDetailsComponent) productDetailsComp!: ViewProductDetailsComponent;
  // viewProductDetailsMsg!: string;

  // ngAfterViewInit() {
  //   this.viewProductDetailsMsg = this.productDetailsComp.productDetailsMessage;
  // }

  constructor(private productService: ProductService) { }

  public openAddProducts() {
    if (this.showEditProduct) {
      this.showEditProduct = false;
    }
    this.showAddProduct = true;
  }

  public openEditProducts() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
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

  updateProductList() {
    this.getProducts();
  }

  cancelEditView() {
    this.showEditProduct = false;
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  public selectProduct(row: number, product: Product) {
    this.rowSelected = true;
    this.rowIndex = row;
    this.selectedProduct = product;
  }

}
