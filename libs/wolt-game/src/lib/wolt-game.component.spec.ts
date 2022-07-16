import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoltGameComponent } from './wolt-game.component';

describe('WoltGameComponent', () => {
  let component: WoltGameComponent;
  let fixture: ComponentFixture<WoltGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WoltGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WoltGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
