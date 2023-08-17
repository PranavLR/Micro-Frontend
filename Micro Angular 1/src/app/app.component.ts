import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-Angular';

  sendData() {
    const event = new CustomEvent("event", { detail: 'Hello Ng 2' })
    dispatchEvent(event);
  }
  
  
}
