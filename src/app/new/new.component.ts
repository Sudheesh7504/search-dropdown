import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  @Output() dataEmitted = new EventEmitter<string>();


  constructor(private router: Router) { }
  // This function can be called to emit data to the parent component
  emitData() {
    const data = 'Data from NewComponent';
    this.dataEmitted.emit(data);
  }



}
