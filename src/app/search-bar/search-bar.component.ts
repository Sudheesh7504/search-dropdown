// import { Component } from '@angular/core';
// import { SearchService } from '../search.service';

// @Component({
//   selector: 'app-search-bar',
//   templateUrl: './search-bar.component.html',
//   styleUrls: ['./search-bar.component.scss'],
// })
// export class SearchbarComponent {
//   searchQuery: string = '';
//   isAscending: boolean = true;
//   showSuggestions: boolean = false;
//   suggestions: string[] = [];

//   toggleSuggestions() {
//     this.showSuggestions = !this.showSuggestions;
//     this.updateSuggestions();
//   }

//   searchResults$ = this.searchService.searchResults$;
//   constructor(private searchService: SearchService) { }

//   updateSuggestions() {
//     if (this.searchQuery.trim() !== '') {
//       this.suggestions = [
//         'Task 1',
//         'Task 2',
//         'Task 3',
//         'Task 4',
//         'Task 5',
//       ].filter((task) =>
//         task.toLowerCase().includes(this.searchQuery.toLowerCase())
//       );
//     } else {
//       this.suggestions = [];
//     }
//     this.searchService.fetchSearchResults(this.searchQuery);
//   }

//   toggleDirection() {
//     this.isAscending = !this.isAscending;
//     this.toggleSuggestions();
//   }

//   selectSuggestion(suggestion: string) {
//     this.searchQuery = suggestion;
//     this.showSuggestions = false;
//   }
// }


import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchbarComponent {
  searchQuery: string = '';
  showSuggestions: boolean = false;
  suggestions: string[] = [];
  searchResults: { [key: string]: string[] } = {};
  isAscending: boolean = true;

  constructor(private searchService: SearchService) { }

  updateSuggestions() {
    if (this.searchQuery.trim() !== '') {
      this.suggestions = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
      ].filter((task) =>
        task.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.suggestions = [];
    }

    // Fetch individual search results for each suggestion
    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
        // Store results in a map
        this.searchResults[suggestion] = results;
      });
    });
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.showSuggestions = false;
  }

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;
    this.updateSuggestions();
  }
  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }
}

