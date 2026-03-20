import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseListComponent implements OnInit {
  available: Course[] = [];
  selected: Course[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.loading = true;
    this.error = null;
    this.courseService.getAvailableCourses().subscribe({
      next: (courses) => {
        this.available = courses;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading courses:', err);
        this.error = 'Failed to load courses. Please try again.';
        this.loading = false;
      }
    });
  }

  addCourse(course: Course) {
    this.selected.push(course);
    this.available = this.available.filter(c => c.courseid !== course.courseid);
  }

  removeCourse(course: Course) {
    this.available.push(course);
    this.selected = this.selected.filter(c => c.courseid !== course.courseid);
  }

  submit() {
    // Store selected courses for next step
    sessionStorage.setItem('selectedCourses', JSON.stringify(this.selected));
    this.router.navigate(['/payment']);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getTotalPrice = (acc: number, course: Course) => acc + course.rate;
}
