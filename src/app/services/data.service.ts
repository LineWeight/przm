import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Filter } from '../models/Filter';
import { Sort } from '../models/Sort';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filters: Observable<Filter[]>;
  sorts: Observable<Sort[]>;

  getFilters() {
    return this.filters;
  }

  getSorts() {
    return this.sorts;
  }

  constructor(db: AngularFireDatabase) {
    this.filters = db.list<Filter>('data/filters').valueChanges();
    this.sorts = db.list<Sort>('data/sorts').valueChanges();
  }
}
