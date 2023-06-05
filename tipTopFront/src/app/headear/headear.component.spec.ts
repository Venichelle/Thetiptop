import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadearComponent } from './headear.component';

xdescribe('HeadearComponent', () => {
  let component: HeadearComponent;
  let fixture: ComponentFixture<HeadearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
