import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent {
  @Input() tagInput = '';
  @Input() tagsList: string[] = [];

  constructor() { }

  setKeyword(event: KeyboardEvent) {
    if (event.key === ',') {
      this.addTag();
      event.preventDefault();
    }
  }

  addTag(): void {
    if (this.tagInput !== '') {
      this.tagsList.push(this.tagInput);
      this.tagInput = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tagsList.indexOf(tag);
    if (index !== -1) {
      this.tagsList.splice(index, 1);
    }
  }

}
