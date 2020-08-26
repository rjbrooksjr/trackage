import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  adding = false;

  constructor(private appRef: ApplicationRef) {}

  doneAdding(): void {
    this.adding = false;
    this.appRef.tick();
  }
}
