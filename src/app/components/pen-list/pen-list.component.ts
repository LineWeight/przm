import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pen } from '../models/Pen'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pen-list',
  templateUrl: './pen-list.component.html',
  styleUrls: ['./pen-list.component.css']
})
export class PenListComponent implements OnInit {
  pens: Observable<any[]>

  constructor(db: AngularFireDatabase) {
    this.pens = db.list('pens').valueChanges()
    this.pens.subscribe(data => console.log(data))
  }

  ngOnInit() {
  }

}
