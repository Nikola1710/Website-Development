import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsAndCowsComponent } from './bulls-and-cows.component';

describe('BullsAndCowsComponent', () => {
  let component: BullsAndCowsComponent;
  let fixture: ComponentFixture<BullsAndCowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullsAndCowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BullsAndCowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
