import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miguel } from './miguel';

describe('Miguel', () => {
  let component: Miguel;
  let fixture: ComponentFixture<Miguel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miguel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miguel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
