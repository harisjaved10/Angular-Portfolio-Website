import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailsComponent } from './bio-details.component';

describe('BioDetailsComponent', () => {
  let component: BioDetailsComponent;
  let fixture: ComponentFixture<BioDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioDetailsComponent]
    });
    fixture = TestBed.createComponent(BioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
