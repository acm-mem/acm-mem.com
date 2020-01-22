
import {Component, Input, OnInit} from '@angular/core';
import {Textbook} from '../../models/textbook.model';

@Component({
  selector: 'app-textbook-entry',
  templateUrl: './textbook-entry.component.html',
  styleUrls: ['./textbook-entry.component.scss']
})
export class TextbookEntryComponent implements OnInit {

  @Input()
  textbook: Textbook;

  constructor() { }

  ngOnInit() {
  }

}


