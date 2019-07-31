import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PenService } from 'src/app/services/pen.service'
import { Sort } from '../../models/Sort'
import { Filter } from '../../models/Filter'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sorts: Observable<Sort[]>
  filters: Observable<Filter[]>
  penService: PenService

  @Output() sortClicks: EventEmitter<Sort> = new EventEmitter<Sort>()
  @Output() filterClicks: EventEmitter<Filter> = new EventEmitter<Filter>()

  constructor(dataService: DataService, penService: PenService) {
    this.sorts = dataService.getSorts()
    this.filters = dataService.getFilters()
    this.penService = penService
  }

  ngOnInit() {
  }

  handleClicks(e: any) {
    if (e.type.indexOf('sort') > -1) {
      this.penService.sortPens(e.slug)
    }
    if (e.type.indexOf('filter') > -1) {
      this.penService.filterPens(e.slug)
    }
  }
}
