import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogvendedoresComponent } from './dialogvendedores.component';

describe('DialogvendedoresComponent', () => {
  let component: DialogvendedoresComponent;
  let fixture: ComponentFixture<DialogvendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogvendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogvendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
