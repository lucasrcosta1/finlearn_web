import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/service/api/api.service';
import { InvestType } from 'src/app/models/practice/InvestType.model';

describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComponent ],
      imports: [HttpClientModule],
      providers: [ApiService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should fetch api to get investments registered', async () => {
    const apiService = TestBed.inject(ApiService);

    const mockDataResponse = new Map<number, InvestType>([
      [0, {id: 0, name: "Tesouro Selic", redemptionPeriod: "1 ano", interestRate: 0.1275}],
      [1, {id: 1, name: "Tesouro IPCA", redemptionPeriod: "3 anos", interestRate: 0.465}],
      [2, {id: 2, name: "Tesouro Prefixado", redemptionPeriod: "3 anos", interestRate: 0.3348}],
      [3, {id: 3, name: "CDB - liquidez diária", redemptionPeriod: "1 ano", interestRate: 0.15}],
      [4, {id: 4, name: "Letra de Crédito Imobiliário - liquidez diária", redemptionPeriod: "1 ano", interestRate: 13.65}],
      [5, {id: 5, name: "Letra de Crédito do Agronegócio - liquidez diária", redemptionPeriod: "1 ano", interestRate: 13.65}],
      [6, {id: 6, name: "Certificado de Recebíveis Imobiliários - liquidez diária", redemptionPeriod: "1 ano", interestRate: 0.12}],
      [7, {id: 7, name: "Certificado de Recebíveis do Agronegócio - liquidez diária", redemptionPeriod: "1 ano", interestRate: 0.13}],
      [8, {id: 8, name: "Poupança - liquidez diária", redemptionPeriod: "1 ano", interestRate: 0.45}],
    ]);

    spyOn(apiService, 'getInvestmentTypes').and.returnValue(Promise.resolve(mockDataResponse));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const fieldInvestTypeArray = Array.from(component.fieldInvestType.values());
    const expectedArray = Array.from(mockDataResponse.values());
    expect(fieldInvestTypeArray).toEqual(jasmine.arrayContaining(expectedArray));

  });
  
});
