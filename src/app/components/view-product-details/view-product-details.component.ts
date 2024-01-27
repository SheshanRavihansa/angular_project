import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrl: './view-product-details.component.css'
})
export class ViewProductDetailsComponent {

  selectedProduct!: Product;

  // productDetailsMessage = "This message from view product details"
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe((res) => {
      this.selectedProduct = res.data;
    })
  }

}
