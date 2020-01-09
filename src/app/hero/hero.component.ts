import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    if (this.heroes.length > 0) {
      this.selectedHero = this.heroes[0]
    }
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  onNewHero() {
    var newHero = new Hero('name');
    this.heroes.push(newHero)
    this.onSelect(newHero)
  }

}
