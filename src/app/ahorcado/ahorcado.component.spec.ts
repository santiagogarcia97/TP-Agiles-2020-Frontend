import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoComponent } from './ahorcado.component';

describe('AhorcadoComponent', () => {
  let component: AhorcadoComponent;
  let fixture: ComponentFixture<AhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Ahorcado" as h1 title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ahorcado');
  });

});
