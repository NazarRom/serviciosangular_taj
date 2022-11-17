import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosplantillaComponent } from './empleadosplantilla.component';

describe('EmpleadosplantillaComponent', () => {
  let component: EmpleadosplantillaComponent;
  let fixture: ComponentFixture<EmpleadosplantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosplantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosplantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
