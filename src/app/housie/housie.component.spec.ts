import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousieComponent } from './housie.component';

describe('HousieComponent', () => {
  let component: HousieComponent;
  let fixture: ComponentFixture<HousieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousieComponent]
    });
    fixture = TestBed.createComponent(HousieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
