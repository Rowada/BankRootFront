import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAboutComponent } from './bank-about.component';

describe('BankAboutComponent', () => {
  let component: BankAboutComponent;
  let fixture: ComponentFixture<BankAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
