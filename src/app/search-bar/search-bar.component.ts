
// import { Component, OnInit } from '@angular/core';
// import { SearchService } from '../search.service';

// @Component({
//   selector: 'app-search-bar',
//   templateUrl: './search-bar.component.html',
//   styleUrls: ['./search-bar.component.scss'],
// })
// export class SearchbarComponent implements OnInit {
//   searchQuery: string = '';
//   showSuggestions: boolean = false;
//   suggestions: string[] = [];
//   searchResults: { [key: string]: string[] } = {};
//   isAscending: boolean = true;
//   lastSelectedSuggestions: string[] = [];

//   constructor(private searchService: SearchService) { }

//   ngOnInit() {

//     const lastSuggestionsJSON = localStorage.getItem('lastSelectedSuggestions');
//     if (lastSuggestionsJSON) {
//       this.lastSelectedSuggestions = JSON.parse(lastSuggestionsJSON);

//       if (this.lastSelectedSuggestions.length > 0) {
//         this.searchQuery = this.lastSelectedSuggestions[this.lastSelectedSuggestions.length - 1];
//       }
//     }
//   }

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

//     this.suggestions.forEach((suggestion) => {
//       this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
//         this.searchResults[suggestion] = results;
//       });
//     });
//   }

//   selectSuggestion(suggestion: string) {
//     this.searchQuery = suggestion;
//     this.showSuggestions = false;


//     this.lastSelectedSuggestions.push(suggestion);


//     localStorage.setItem('lastSelectedSuggestions', JSON.stringify(this.lastSelectedSuggestions));
//   }

//   toggleSuggestions() {
//     this.showSuggestions = !this.showSuggestions;
//     this.updateSuggestions();
//   }

//   toggleDirection() {
//     this.isAscending = !this.isAscending;
//     this.toggleSuggestions();
//   }


//   openSearchBar() {
//     if (this.lastSelectedSuggestions.length > 0) {
//       this.searchQuery = this.lastSelectedSuggestions[this.lastSelectedSuggestions.length - 1];
//       this.showSuggestions = true;
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchQuery: string = '';
  showSuggestions: boolean = false;
  suggestions: string[] = [];
  searchResults: { [key: string]: string[] } = {};
  isAscending: boolean = true;

  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Check local storage for a stored search query

  }

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

    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
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


