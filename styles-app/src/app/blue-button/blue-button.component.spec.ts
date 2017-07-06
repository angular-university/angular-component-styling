import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueButtonComponent } from './blue-button.component';

describe('BlueButtonComponent', () => {
  let component: BlueButtonComponent;
  let fixture: ComponentFixture<BlueButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
