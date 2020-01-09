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
      path: '/hero/1'
    },{
      name: 'New',
      path: '/hero/new'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
