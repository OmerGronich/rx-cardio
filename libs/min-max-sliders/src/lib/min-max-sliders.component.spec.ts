import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxSlidersComponent } from './min-max-sliders.component';

describe('MinMaxSlidersComponent', () => {
  let component: MinMaxSlidersComponent;
  let fixture: ComponentFixture<MinMaxSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinMaxSlidersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinMaxSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
