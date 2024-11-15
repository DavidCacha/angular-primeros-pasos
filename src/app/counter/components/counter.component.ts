import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template:  `
    <h1>Contador</h1>
    <p>Contador {{counter}}</p>
    <button  (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent {
    public counter: number = 666;

    increaseBy(value: number):void {
      this.counter += value;
    }
  
    resetCounter(){
      this.counter = 666
    }
}