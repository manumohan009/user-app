import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app6',
  templateUrl: './app6.component.html',
  styleUrls: ['./app6.component.css']
})
export class App6Component implements OnInit {

  courses;
  courses1 = [1, 2];
  viewMode = 'map';
  isSelected = true;
  canSave = false;

  task = {
    title: 'Review application',
    assignee: null
  }

   onAdd() {
     this.courses.push({ id: 4, name: 'course4' });
   }

   onRemove( course ) {
     let index = this.courses.indexOf(course);
     this.courses.splice(index, 1);
   }

   loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
     ];
   }

   trackCourse(index, course) {
     return course ? course.id : undefined;
   }

   constructor() { }

  ngOnInit() {
  }

}
