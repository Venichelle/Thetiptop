import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSommeNousComponent } from './qui-somme-nous.component';

xdescribe('QuiSommeNousComponent', () => {
  let component: QuiSommeNousComponent;
  let fixture: ComponentFixture<QuiSommeNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiSommeNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSommeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
