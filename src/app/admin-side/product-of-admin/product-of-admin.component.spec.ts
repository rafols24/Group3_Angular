import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfAdminComponent } from './product-of-admin.component';

describe('ProductOfAdminComponent', () => {
  let component: ProductOfAdminComponent;
  let fixture: ComponentFixture<ProductOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
