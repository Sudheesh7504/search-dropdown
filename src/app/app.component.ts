import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';
  login = false;
  searchQuery = '';
  showData = true;
  showNewComponent = false;


  toggleData() {
    this.showData = !this.showData;
  }

}
