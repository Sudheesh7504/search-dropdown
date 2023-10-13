
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';




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



  constructor(private searchService: SearchService
  ) {
    this.searchQuery = this.searchService.getSearchQuery();
    this.searchResults = this.searchService.getSearchResults();

  }

  updateSearchQuery() {
    this.searchService.setSearchQuery(this.searchQuery);
    this.searchService.setSearchResults(this.searchResults);
  }

  updateSearchResults() {
    this.searchService.setSearchResults(this.searchResults);
  }

  ngOnInit() {
    // this.searchResults = this.searchService.getSearchResults();

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

        this.updateSearchResults();
      });
    });
    this.searchService.setSearchResults(this.searchResults);

  }


  selectSuggestion(suggestion: string) {

    this.searchService.setSearchQuery(suggestion);
    // this.searchService.setSearchResults(suggestion);
    this.searchQuery = suggestion;

    this.showSuggestions = false;

    this.updateSuggestions();


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


