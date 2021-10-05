import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AppModule } from '../app.module';
import { DebugElement } from '@angular/core';
import { POKEMON } from '../models/testdata';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the pokemion list', () => {
    component.lists = POKEMON; 
    const cards = el.queryAll(By.css('.block'));
    //const cards = element.nativeElement.querySelector('.block');
    expect(cards).toBeTruthy('Could not find cards');
    //expect(cards.length).toBe(20, `Unexpected number of pokemon`);
  });

});
