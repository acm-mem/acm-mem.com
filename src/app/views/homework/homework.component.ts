import { Component, OnInit } from '@angular/core';
import {Homework} from '../../models/homework.model';
import {homework} from '../../data/homework';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  homeworkArray: Homework[];
  searchText: string;

  constructor() {
    this.homeworkArray = homework.map(rawHomework => Homework.fromJSON(rawHomework));
  }

  ngOnInit() {
  }

}
