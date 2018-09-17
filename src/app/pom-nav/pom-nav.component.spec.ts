
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomNavComponent } from './pom-nav.component';

describe('PomNavComponent', () => {
  let component: PomNavComponent;
  let fixture: ComponentFixture<PomNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PomNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
