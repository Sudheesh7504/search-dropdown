// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class SearchService {
//   private searchResultsSubject = new BehaviorSubject<string[]>([]);
//   searchResults$ = this.searchResultsSubject.asObservable();

//   fetchSearchResults(query: string) {
//     // In a real application, you would make an HTTP request to fetch search results.
//     // For this example, we'll simulate it with a delay.
//     setTimeout(() => {
//       const searchResults = [
//         'Result 1 for ' + query,
//         'Result 2 for ' + query,
//         'Result 3 for ' + query,
//         'Result 4 for ' + query,
//         'Result 5 for ' + query,
//       ];
//       this.searchResultsSubject.next(searchResults);
//     }, 1000); // Simulate a 1-second delay
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSubject = new BehaviorSubject<string[]>([]);
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
