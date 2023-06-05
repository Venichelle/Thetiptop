import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBarInfoComponent } from './step-bar-info.component';

describe('StepBarInfoComponent', () => {
  let component: StepBarInfoComponent;
  let fixture: ComponentFixture<StepBarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepBarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
