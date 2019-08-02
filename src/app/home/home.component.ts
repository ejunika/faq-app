import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checked: boolean = true;
  displayedColumns: string[] = ['isSelected', 'description'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

}

export interface FrequentlyAskedQuestion {
  id: number;
  description: string;
  isSelected: boolean;
}

const ELEMENT_DATA: FrequentlyAskedQuestion[] = [
  { id: 1, description: 'What is this?', isSelected: false }
];
