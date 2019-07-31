import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Sort } from '../../../models/Sort'
import { Filter } from '../../../models/Filter'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sorts: Observable<Sort[]>
  filters: Observable<Filter[]>

  constructor(dataService: DataService) {
    this.sorts = dataService.getSorts()
    this.filters = dataService.getFilters()
  }

  ngOnInit() {
  }

}
