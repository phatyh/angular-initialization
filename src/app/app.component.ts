import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  update: boolean = false;

  constructor(
    private updates: SwUpdate,
  ) {
    updates.available.subscribe(update => {
      this.update = true;
    });
  }

  activateUpdate(): void {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
