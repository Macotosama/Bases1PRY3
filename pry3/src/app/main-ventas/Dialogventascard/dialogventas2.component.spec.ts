import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogventasCardComponent } from './dialogventasCard';

describe('Dialogventas2Component', () => {
  let component: DialogventasCardComponent;
  let fixture: ComponentFixture<DialogventasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogventasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogventasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
