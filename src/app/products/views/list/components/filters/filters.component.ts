import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  keyword = '';
  private subject = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.subject.pipe(debounceTime(500)).subscribe(() => {
      this.searchProduct();
    });
  }

  searchProduct() {
    this.search.emit(this.keyword);
  }

  onChange() {
    this.subject.next(this.keyword);
  }
}
