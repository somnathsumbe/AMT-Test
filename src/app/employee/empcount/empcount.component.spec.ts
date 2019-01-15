import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcountComponent } from './empcount.component';

describe('EmpcountComponent', () => {
  let component: EmpcountComponent;
  let fixture: ComponentFixture<EmpcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
