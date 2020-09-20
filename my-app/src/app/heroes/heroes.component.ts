import { Component, OnInit } from '@angular/core';
//import {'Subscriber } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  /*heroes = 'Windstorm';
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'*/
  
  selectedHero: Hero;
  //onSelect(hero: Hero):void {
   // this.selectedHero = hero;
  //}
  
  constructor(private heroService: HeroService , private messageService: MessageService) { }
  ngOnInit() {
    this.getHeroes();
  }
  

  /*ngOnInit(): void {
  }*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes );
  }

}