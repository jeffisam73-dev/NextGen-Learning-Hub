import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface StudentCourseResponse {
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  private apiUrl = `${environment.baseUrl}/student-course`;

  constructor(private http: HttpClient) { }

  selectCourses(data: { studentId: number; courseIds?: number[] }): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(`${this.apiUrl}/select-courses`, data);
  }

  estimateFees(data: { studentId: number }): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(`${this.apiUrl}/estimate-fees`, data);
  }

  submitApplication(data: { studentId: number }): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(`${this.apiUrl}/submit-application`, data);
  }

  acceptTerms(data: { studentId: number }): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(`${this.apiUrl}/accept-terms`, data);
  }

  makePayment(data: any): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(`${this.apiUrl}/payment`, data);
  }
}
