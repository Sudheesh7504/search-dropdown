import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';
  searchQuery = '';
  showData = true;

  toggleData() {
    this.showData = !this.showData;
  }
}
