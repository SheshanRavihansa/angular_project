import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService) { };

  // @Input() productId!: number;
  @Input() product!: Product;
  isDataUploading = false;

  @Output() cancelEditEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void { }

  cancel() {
    this.cancelEditEvent.emit();
  }

  onSubmit() {
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe(()=> {
      this.isDataUploading = false;
    });
  }
}
