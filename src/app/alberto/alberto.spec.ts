import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alberto } from './alberto';

describe('Alberto', () => {
  let component: Alberto;
  let fixture: ComponentFixture<Alberto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alberto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alberto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
