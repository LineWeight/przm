import { Component, OnInit, Input } from '@angular/core';
import { Pen } from '../models/Pen';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  @Input() pen: Pen;

  constructor() { }

  ngOnInit() {
  }

}
