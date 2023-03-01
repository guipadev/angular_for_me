import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoComponentComponent } from './proyecto-component.component';

describe('ProyectoComponentComponent', () => {
  let component: ProyectoComponentComponent;
  let fixture: ComponentFixture<ProyectoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
