import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTypeComponent } from './practice-type.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/service/api/api.service';
import { InvestmentType } from 'src/app/models/practice/InvestmentType.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('PracticeTypeComponent', () => {
  let component: PracticeTypeComponent;
  let fixture: ComponentFixture<PracticeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTypeComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ApiService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should fetch api to get investments registered', async () => {
    const apiService = TestBed.inject(ApiService);

    const mockDataResponse = [
      {id: 0, name: "Tesouro Selic", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 1, interestRate: 0.1275, clicked: false},
      {id: 1, name: "Tesouro IPCA", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 3, interestRate: 0.465, clicked: false},
      {id: 2, name: "Tesouro Prefixado", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 3, interestRate: 0.3348, clicked: false},
      {id: 3, name: "CDB", investmentLogoPath: "/assets/images/pratique/cdb.svg", redemptionPeriodInYears: 1, interestRate: 0.15, clicked: false},
      {id: 4, name: "Carta de Crédito Imobiliário", investmentLogoPath: "/assets/images/pratique/credit_letter.svg", redemptionPeriodInYears: 1, interestRate: 0.1365, clicked: false},
      {id: 5, name: "Carta de Crédito do Agronegócio", investmentLogoPath: "/assets/images/pratique/credit_letter.svg", redemptionPeriodInYears: 1, interestRate: 0.1365, clicked: false},
      {id: 6, name: "Certificado de Recebíveis Imobiliários", investmentLogoPath: "/assets/images/pratique/credit_certified.svg", redemptionPeriodInYears: 1, interestRate: 0.12, clicked: false},
      {id: 7, name: "Certificado de Recebíveis do Agronegócio", investmentLogoPath: "/assets/images/pratique/credit_certified.svg", redemptionPeriodInYears: 1, interestRate: 0.13, clicked: false},
      {id: 8, name: "Poupança",investmentLogoPath: "/assets/images/pratique/pig.svg", redemptionPeriodInYears: 1, interestRate: 0.45, clicked: false},
  ];

    spyOn(apiService, 'getInvestmentTypes').and.returnValue(Promise.resolve(mockDataResponse));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const fieldInvestmentTypeArray = component.fieldInvestmentTypes;
    const expectedArray = Array.from(mockDataResponse.values());
    expect(fieldInvestmentTypeArray).toEqual(jasmine.arrayContaining(expectedArray));

  });
});
