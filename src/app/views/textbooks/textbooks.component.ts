import { Component, OnInit } from '@angular/core';
import {Textbook} from '../../models/textbook.model';
import {textbooks} from '../../data/textbook';


@Component({
  selector: 'app-textbooks',
  templateUrl: './textbooks.component.html',
  styleUrls: ['./textbooks.component.scss']
})
export class TextbooksComponent implements OnInit {
  textbookArray: Textbook[];
  searchText: string;

  constructor() {
    this.textbookArray = textbooks.map(rawTextbook => Textbook.fromJSON(rawTextbook));
  }

  ngOnInit() {
  }

}
