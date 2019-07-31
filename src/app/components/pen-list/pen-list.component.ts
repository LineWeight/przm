import { Component, OnInit } from '@angular/core';
import { PenService } from '../../services/pen.service'
import { Observable } from 'rxjs';
import { Pen } from 'src/app/models/Pen';

@Component({
  selector: 'app-pen-list',
  templateUrl: './pen-list.component.html',
  styleUrls: ['./pen-list.component.css']
})
export class PenListComponent implements OnInit {

  pens: Observable<Pen[]>

  constructor(penService: PenService) {
    this.pens = penService.getPens()
  }

  ngOnInit() {

  }

}
