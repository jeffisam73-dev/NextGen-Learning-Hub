import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule }  from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseListComponent {
  available = [
  'Angular',
  'Java',
  'Python',
  'SQL'
];

selected: string[] = [];
constructor(private router:Router) {}

addCourse(course: string) {

  this.selected.push(course);

  this.available =
    this.available.filter(c => c !== course);

}

removeCourse(course: string) {

  this.available.push(course);

  this.selected =
    this.selected.filter(c => c !== course);

}

submit() {

  this.router.navigate(['/payment']);

}
}
