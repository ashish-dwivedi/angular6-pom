import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOfficeComponent } from './remove-office.component';

describe('RemoveOfficeComponent', () => {
  let component: RemoveOfficeComponent;
  let fixture: ComponentFixture<RemoveOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
