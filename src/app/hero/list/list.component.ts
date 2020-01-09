import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() heroes: Hero[];
  @Input() selectedHero: Hero[];
  @Output() select = new EventEmitter();
}
