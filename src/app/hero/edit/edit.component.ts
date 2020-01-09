import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() hero: Hero;
}
