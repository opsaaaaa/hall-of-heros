import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})

export class BackComponent {

  isVisible: Boolean;

  constructor( private location: Location, private router: Router ){ 
    this.router.events.subscribe( 
      (event) => this.checkRoute(event)
    )
  }

  checkRoute(event) {
    if (event instanceof NavigationEnd) {
      this.updateVisibility(event.url)
    }
  }

  updateVisibility(url): void{
      this.isVisible = url != '/' 
  }

  goBack(): void {
    this.location.back();
  }

}
