import { Injectable } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pen } from '../models/Pen';
import { Sort } from '../models/Sort';
import { Filter } from '../models/Filter';


@Injectable({
  providedIn: 'root'
})

export class PenService {

  private sortSource = new Subject<string>()
  private filterSource = new Subject<string>()

  sort$ = this.sortSource.asObservable()
  filter$ = this.filterSource.asObservable()

  sortPens(slug: string) {
    this.sortSource.next(slug)
  }
  filterPens(slug: any) {
    this.filterSource.next(slug)
  }

  pens: Observable<Pen[]>

  getPens() {
    return this.pens
  }

  constructor(db: AngularFireDatabase) {
    this.pens = db.list<Pen>('pens').valueChanges()
  }
}
