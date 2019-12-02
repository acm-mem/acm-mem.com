import {Component, Input, OnInit} from '@angular/core';
import {Homework} from '../../models/homework.model';

@Component({
  selector: 'app-homework-entry',
  templateUrl: './homework-entry.component.html',
  styleUrls: ['./homework-entry.component.scss']
})
export class HomeworkEntryComponent implements OnInit {

  @Input()
  homework: Homework;

  constructor() { }

  ngOnInit() {
  }

}
