import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems;
  pages: number;
  pageNumbers: number[] = [];
  @Output() pageSeleted: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.totalItems <= 10) {
      this.pages = 0;
    } else {
      this.pages = Math.ceil( this.totalItems / 10 );
      for (let i = 0; i < this.pages; i++) {
        this.pageNumbers.push(i);
      }
    }
  }

  selected(pageNumber) {
    this.pageSeleted.emit(pageNumber * 10);
  }

}
