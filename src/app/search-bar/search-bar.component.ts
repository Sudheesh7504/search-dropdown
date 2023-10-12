

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
  lastSelectedSuggestion: string = ''; // Track the last selected suggestion

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

    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
        this.searchResults[suggestion] = results;
      });
    });
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.showSuggestions = false;

    // Store the last selected suggestion
    this.lastSelectedSuggestion = suggestion;
  }

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;
    this.updateSuggestions();
  }

  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }

  // Function to open the search bar and display the last selected suggestion
  openSearchBar() {
    this.searchQuery = this.lastSelectedSuggestion;
    this.showSuggestions = true;
  }
}


