import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() buttonSet
  @Input() group

  constructor() { }

  ngOnInit() {
  }

  onClick(slug: string) {
    console.log(slug)
  }

}
