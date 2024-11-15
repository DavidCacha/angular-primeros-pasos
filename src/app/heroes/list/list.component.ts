import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public nameHero: string[] = ['Spiderman', 'Irinman', 'Hulk', 'She Hulk', 'Thor'];
  public indexName: number = this.nameHero.length;
  public nameRemove?: string;
  removeLastHero():void {
    this.nameHero.pop();
    this.indexName = this.nameHero.length;
    this.nameRemove = this.nameHero.pop();
  }
  resetList(): void{
    this.nameHero  = ['Spiderman', 'Irinman', 'Hulk', 'She Hulk', 'Thor'];
    this.indexName = this.nameHero.length

  }
}
