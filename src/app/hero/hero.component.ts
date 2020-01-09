import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Heros';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void{
    this.getHeroes();
    if (this.heroes.length > 0) {
      this.selectedHero = this.heroes[0]
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  onNewHero(): void {
    var newHero = new Hero('name');
    this.heroes.push(newHero)
    this.onSelect(newHero)
  }

}
