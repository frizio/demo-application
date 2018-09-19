import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Demo Component Interaction';
  imgUrl = 'https://picsum.photos/101';
  count = 0;
  name: string;
  username: string;

  incrementCount() {
    this.count += 1;
  }

  toUpper(value) {
    this.username = value.toUpperCase();
  }

}
