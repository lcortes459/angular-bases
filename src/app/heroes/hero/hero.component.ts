import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string  = 'IronMan';
  public age : number  = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  };

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  };

  changeHero(): void {
    this.name = 'Wolverine';
  };

  changeAge(): void {
    this.age = 40;
  };

  restHeroAge(): void {
    this.age = 45;
    this.name = 'IronMan';
  };
}
