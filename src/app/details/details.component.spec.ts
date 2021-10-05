import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DetailsComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
