import { Component, OnInit } from '@angular/core';
import { PenService } from '../../services/pen.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Pen } from 'src/app/models/Pen';

@Component({
  selector: 'app-pen-list',
  templateUrl: './pen-list.component.html',
  styleUrls: ['./pen-list.component.css']
})
export class PenListComponent implements OnInit {

  pens: Observable<Pen[]>;

  constructor(penService: PenService) {
    this.pens = penService.getPens()
      .pipe(
        map(x => {
          x
            .map(y => {
              y.colorHex = this.rgbToHex(y.rgb);
              return y;
            });
          return x;
        })
      );
  }

  ngOnInit() {

  }

  rgbToHex(rgb) {
    return rgb
      .map(x => x.toString(16))
      .map(x => x.padStart(2, '0'))
      .reduce((prev, x) => prev + x, '#');

  }
}
