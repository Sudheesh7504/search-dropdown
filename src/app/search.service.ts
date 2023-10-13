

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSubject = new BehaviorSubject<string[]>([]);
  private searchQuery: string = '';

  private searchResults: { [key: string]: string[] } = {};

  getSearchQuery(): string {
    return this.searchQuery;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  getSearchResults(): { [key: string]: string[] } {
    return this.searchResults;
  }

  setSearchResults(query: { [key: string]: string[] }) {
    this.searchResults = query;
  }

  searchResults$ = this.searchResultsSubject.asObservable();

  fetchSearchResults(query: string): Observable<string[]> {

    const searchResults = this.generateSearchResults(query);

    return new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(searchResults);
        observer.complete();
      }, 1000);
    });
  }

  private generateSearchResults(query: string): string[] {

    return [
      `Result 1 for ${query}`,
      `Result 2 for ${query}`,
      `Result 3 for ${query}`,
    ];
  }
}
