import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchbarComponent {
  searchQuery: string = '';
  isAscending: boolean = true;
  showSuggestions: boolean = false;
  suggestions: string[] = [];

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;
    this.updateSuggestions();
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
  }

  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.showSuggestions = false;
  }
}
