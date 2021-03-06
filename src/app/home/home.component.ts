import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectAll: boolean = false;
  displayedColumns: string[] = ['isSelected', 'description'];
  faqs: Array<FrequentlyAskedQuestion> = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

  onCheckboxChange(value: boolean, type?: 'SELECT_ALL' | 'OTHER'): void {
    if (type && type === 'SELECT_ALL') {
      if (value) {
        this.faqs.map((faq: FrequentlyAskedQuestion) => faq.isSelected = true);
      } else {
        this.faqs.map((faq: FrequentlyAskedQuestion) => faq.isSelected = false);
      }
    } else {
      if (!value) {
        this.selectAll = false;
      } else if (this.faqs.filter((faq: FrequentlyAskedQuestion) => faq.isSelected === true).length === this.faqs.length) {
        this.selectAll = true;
      }
    }
  }

  addToFrequentlyAskedQuestions(description: string): void {
    if (description) {
      this.faqs.unshift(new FrequentlyAskedQuestion(description));
    }
  }

}

export class FrequentlyAskedQuestion {
  id: number;
  description: string;
  isSelected: boolean;

  constructor(description: string) {
    this.id = new Date().getTime();
    this.isSelected = false;
    this.description = description;
  }

}

const ELEMENT_DATA: FrequentlyAskedQuestion[] = [
  new FrequentlyAskedQuestion('What this application can do?'),
  new FrequentlyAskedQuestion('Is it possible to delete the FAQ from this application?'),
  new FrequentlyAskedQuestion('Can we modify the FAQ using this application'),
  new FrequentlyAskedQuestion('What if we are deleting the FAQ, can it be retrieved back?'),
  new FrequentlyAskedQuestion('What all technologies are been used to create this aplication?')
];
