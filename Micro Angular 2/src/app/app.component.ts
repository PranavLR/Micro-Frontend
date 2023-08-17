import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  message: any;
  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event: any)=> {
      console.log(event);
      this.message = event?.detail
    })
  }
  title = 'MicroAngular2';
}
