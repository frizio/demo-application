import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
  pageTitle = 'Demo Component Interaction';
  imgUrl = 'https://picsum.photos/101';
  count = 0;
  name: string;
  username: string;
  private _role: string;
  @ViewChild('nameRef')
  nameEleRef: ElementRef;

  ngAfterViewInit(): void {
    this.nameEleRef.nativeElement.focus();
    console.log(this.nameEleRef);
  }

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
