import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoarticuloComponent } from './dialogoarticulo.component';

describe('DialogoarticuloComponent', () => {
  let component: DialogoarticuloComponent;
  let fixture: ComponentFixture<DialogoarticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoarticuloComponent]
    });
    fixture = TestBed.createComponent(DialogoarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
