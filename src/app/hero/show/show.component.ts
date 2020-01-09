import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  hero: Hero = {
    id: 2,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
