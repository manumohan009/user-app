import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course = {
    title: 'The Complete Angular course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate:  new Date(2016, 3, 1)
  };


  constructor() { }

  ngOnInit() {
  }

}
