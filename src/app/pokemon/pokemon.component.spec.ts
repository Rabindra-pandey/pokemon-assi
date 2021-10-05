import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { AppModule } from '../app.module';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PokemonComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
