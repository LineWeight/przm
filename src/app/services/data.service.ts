import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filters: Observable<any>
  sorts: Observable<any>

  getFilters() {
    return this.filters
  }


  getSorts() {
    return this.sorts
  }

  constructor(db: AngularFireDatabase) {
    this.filters = db.list('data/filters').valueChanges()
    this.sorts = db.list('data/sorts').valueChanges()
  }
}
