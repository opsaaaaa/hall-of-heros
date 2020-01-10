import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  title = 'Heros';
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  onEditHero(hero): void {
    this.router.navigate(['hero', hero.id, 'edit']);
  }
  
}
