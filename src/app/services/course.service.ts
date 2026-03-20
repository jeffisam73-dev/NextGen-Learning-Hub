import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Course {
  courseid: number;
  name: string;
  startdate: string;
  enddate: string;
  trainingmode: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${environment.baseUrl}/courses`;

  constructor(private http: HttpClient) {
    console.log('CourseService initialized with API URL:', this.apiUrl);
  }

  getAvailableCourses(): Observable<Course[]> {
    console.log('Fetching courses from:', this.apiUrl);
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => {
        console.log('Courses loaded successfully:', courses);
      }),
      catchError(error => {
        console.error('Error loading courses:', error);
        return throwError(() => 
          new Error(`Failed to load courses: ${error.message}`)
        );
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred while fetching courses';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Status: ${error.status} - ${error.statusText}`;
      if (error.error && typeof error.error === 'object') {
        errorMessage += ` - ${JSON.stringify(error.error)}`;
      }
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
