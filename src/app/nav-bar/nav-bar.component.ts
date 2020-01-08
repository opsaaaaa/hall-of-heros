import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  host: { class: 'app-nav-bar' }
})
export class NavBarComponent implements OnInit {
  title = 'The Hall of Heros';
  constructor() { }

  ngOnInit() {
  }

}
