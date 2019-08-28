import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() buttonSet;
  @Input() group;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {

  }

  onClick(slug: string) {
    this.buttonClicked.emit({
      type: this.group,
      slug
    });
  }

}
