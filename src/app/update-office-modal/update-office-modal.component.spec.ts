import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfficeModalComponent } from './update-office-modal.component';

describe('UpdateOfficeModalComponent', () => {
  let component: UpdateOfficeModalComponent;
  let fixture: ComponentFixture<UpdateOfficeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOfficeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOfficeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
