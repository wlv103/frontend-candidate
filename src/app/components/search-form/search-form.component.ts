import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from '../../enums/colors.enum';
import { ISearchFormData } from 'src/app/interfaces/search.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  term: string = '';
  color: Color; 
  Color = Color;

  @Output() search: EventEmitter<ISearchFormData> = new EventEmitter<ISearchFormData>();
  @Output() error: EventEmitter<string> = new EventEmitter<string>();

  performSearch(): void {
    if (this.color !== undefined || this.term.length > 0) {
      let submitColor = this.color ? this.color.toString() : '';
      this.search.emit({ term: this.term, color: submitColor });
    } else {
      this.error.emit('Please select a color or enter a search term.');
    }
  }

  getColorKeys(): string[] {
    return Object.values(this.Color);
  }
}