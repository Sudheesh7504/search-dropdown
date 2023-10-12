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
  showNewComponent = false;

  loadNewComponent() {
    this.showNewComponent = true;
  }
}
