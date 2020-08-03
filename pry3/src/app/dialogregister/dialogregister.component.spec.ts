import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogregisterComponent } from './dialogregister.component';

describe('DialogregisterComponent', () => {
  let component: DialogregisterComponent;
  let fixture: ComponentFixture<DialogregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
