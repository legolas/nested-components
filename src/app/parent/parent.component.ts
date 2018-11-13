import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  leftData: Data;
  rightData: Data;

  constructor() {
    this.leftData = {
      parentId: 'The parent',
      text: 'This is the left side of the page'
    };
    this.rightData = {
      parentId: 'The parent',
      text: 'This is the right side of the page'
    };
  }
}
