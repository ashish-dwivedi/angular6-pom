import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveShipmentComponent } from './remove-shipment.component';

describe('RemoveShipmentComponent', () => {
  let component: RemoveShipmentComponent;
  let fixture: ComponentFixture<RemoveShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
