import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  imageUrl = 'http://lorempixel.com/400/200';
  title = 'Chapter 4';
  colSpan = 2;
  isActive = true;
  myName;

  onSave($event) {
    $event.stopPropagation();  // to stop event bubbling
    console.log('Button was clicked', $event);
  }

  onDivClick($event) {
    console.log('Div was clicked', $event);
  }

  onKeyUp() {
    // console.log($event.target.value);
    // console.log(email); // using template variable

    console.log(this.myName);
  }
  constructor() {
    this.myName = 'Manu';
   }

  ngOnInit() {
  }

}
