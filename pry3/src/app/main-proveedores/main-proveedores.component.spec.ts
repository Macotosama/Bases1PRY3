import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProveedoresComponent } from './main-proveedores.component';

describe('MainProveedoresComponent', () => {
  let component: MainProveedoresComponent;
  let fixture: ComponentFixture<MainProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
