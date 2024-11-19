import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorVendidoComponent } from './mejor-vendido.component';

describe('MejorVendidoComponent', () => {
  let component: MejorVendidoComponent;
  let fixture: ComponentFixture<MejorVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MejorVendidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MejorVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
