import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVendedoresComponent } from './main-vendedores.component';

describe('MainVendedoresComponent', () => {
  let component: MainVendedoresComponent;
  let fixture: ComponentFixture<MainVendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
