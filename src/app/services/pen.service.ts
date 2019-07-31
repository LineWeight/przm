import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pen } from '../models/Pen';

@Injectable({
  providedIn: 'root'
})
export class PenService {

  pens: Observable<Pen[]>

  getPens() {
    return this.pens
  }


  constructor(db: AngularFireDatabase) {
    this.pens = db.list<Pen>('pens').valueChanges()
  }
}
