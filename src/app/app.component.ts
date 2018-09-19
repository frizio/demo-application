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
  private _role: string;

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value.toUpperCase();
  }

  incrementCount() {
    this.count += 1;
  }

  toUpper(value) {
    this.username = value.toUpperCase();
  }

}
