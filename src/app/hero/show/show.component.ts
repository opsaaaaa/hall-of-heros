import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService }  from '../../hero.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  onEditHero(): void {
    console.log(this.hero.id)
    this.router.navigate(['hero', this.hero.id, 'edit']);
  }
}
