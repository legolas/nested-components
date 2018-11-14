import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Input() parentId: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
    console.info('parentID', this.parentId, 'message', this.message);
  }
}
