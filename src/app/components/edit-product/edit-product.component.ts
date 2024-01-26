import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  @Input()
  prductId!: number;

  @Output()
  cancelEditEvent: EventEmitter<void> = new EventEmitter<void>();

  cancel(){
    this.cancelEditEvent.emit();
  }

}
