import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css'],
  host: { id: 'nav-links' }
})
export class NavLinksComponent implements OnInit {
  links = [
    {
      name: 'Dash', 
      path: '/dash'
    },{
      name: 'Heroes',
      path: '/heroes'
    },{
      name: 'New',
      path: '/new'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
