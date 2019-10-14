import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroSerivce: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSerivce.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    this.heroSerivce
      .addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void {
    this.heroSerivce
      .deleteHero(hero)
      .subscribe(hero => this.heroes.filter(h => h.id === hero.id));
  }
}
