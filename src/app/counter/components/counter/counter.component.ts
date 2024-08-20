import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3><hr>
    <button (click)="increaseBy(+1);" type="button">+1</button>&nbsp;
    <button (click)="increaseBy(-1);" type="button">-1</button>&nbsp;
    <button (click)="resetByCounter();" type="button">Reset</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  };

  resetByCounter() : void {
    this.counter = 10;
  };

};
