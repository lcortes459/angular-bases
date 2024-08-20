import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Ironman','Hulk', 'Spiderman', 'Wolverine', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  };

  restaurarHero(): void {
    this.heroNames = ['Ironman','Hulk', 'Spiderman', 'Wolverine', 'She Hulk', 'Thor'];
    this.deletedHero = '';
  }
}
