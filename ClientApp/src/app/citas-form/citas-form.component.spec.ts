import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasFormComponent } from './citas-form.component';

describe('CitasFormComponent', () => {
  let component: CitasFormComponent;
  let fixture: ComponentFixture<CitasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
