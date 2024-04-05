import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { IPerson } from '../../interfaces/person.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  errorMessage: string;
  isLoading: boolean = false;
  searchResults$: Observable<IPerson[]>;
  searchPerformed: boolean = false;

  constructor(private apiService: ApiService) { }

  performSearch(searchData: { term: string; color: string }): void {
    this.clearError();
    this.isLoading = true;
    this.searchPerformed = true;
    const { term, color } = searchData;
    this.searchResults$ = this.apiService.searchPeople(term, color).pipe(
      map((response: any) => response.matches),
      catchError((error) => {
        let message = 'An error occurred while searching.';
        this.handleError(message);
        return EMPTY;
      }),
      finalize(() => this.isLoading = false)
    );
  }

  handleError(message: string): void {
    this.errorMessage = message;
  }

  clearError(): void {
    this.errorMessage = '';
  }
}
