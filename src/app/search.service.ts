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
    // In a real application, you would make an HTTP request to fetch search results for the given query.
    // For this example, we'll simulate it with a delay.
    const searchResults = this.generateSearchResults(query);

    // Simulate a delay (replace with actual HTTP request)
    return new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(searchResults);
        observer.complete();
      }, 1000); // Simulate a 1-second delay
    });
  }

  private generateSearchResults(query: string): string[] {
    // Generate some mock search results for the given query.
    // You can replace this with your actual search logic.
    return [
      `Result 1 for ${query}`,
      `Result 2 for ${query}`,
      `Result 3 for ${query}`,
    ];
  }
}
