import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'pokemon'`, () => {
    expect(component.title).toEqual('pokemon');
  });

});
