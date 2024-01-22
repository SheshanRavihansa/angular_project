import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-poduct',
  templateUrl: './add-poduct.component.html',
  styleUrl: './add-poduct.component.css'
})
export class AddPoductComponent {

  ngOnInit(): void {}

  onSubmit() {}

  constructor(private fb: FormBuilder) {}

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required],
  });

  get f() {
    return this.productFrom.controls;
  }

}
