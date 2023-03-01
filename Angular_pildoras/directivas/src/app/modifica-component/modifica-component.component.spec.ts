import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaComponentComponent } from './modifica-component.component';

describe('ModificaComponentComponent', () => {
  let component: ModificaComponentComponent;
  let fixture: ComponentFixture<ModificaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
