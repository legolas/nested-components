import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @Input() parentId: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
    console.info('parentID', this.parentId, 'message', this.message);
  }

}
