import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoductComponent } from './add-poduct.component';

describe('AddPoductComponent', () => {
  let component: AddPoductComponent;
  let fixture: ComponentFixture<AddPoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPoductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
