import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacoesComponent } from './apresentacoes.component';

describe('ApresentacoesComponent', () => {
  let component: ApresentacoesComponent;
  let fixture: ComponentFixture<ApresentacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresentacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApresentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
