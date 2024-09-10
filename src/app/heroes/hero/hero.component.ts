import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name:string = 'superman';
public age:number = 30;

get capitalizeName():string {
  return this.name.toUpperCase();

}

getheroDesciption():string{
  return `${ this.name } - ${this.age}`;
}

changeHero():void{
this.name = 'Black Adam'
}
changeAge():void{
this.age = 100
}
reset():void{
  this.name = 'supermna',
  this.age = 30
}

}
