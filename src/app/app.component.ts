import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pwa';

  constructor(swUpdate: SwUpdate) {
    swUpdate.available.subscribe(() => {
      if (confirm('Update verfügbar! Jetzt neu laden?')) {
        location.reload();
      }
    });
  }
}
