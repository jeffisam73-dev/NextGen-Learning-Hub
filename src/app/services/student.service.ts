import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CreateStudentRequest {
  // Add student creation fields based on your student entity
  name?: string;
  email?: string;
}

export interface StudentResponse {
  message: string;
  studentId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `${environment.baseUrl}/students`;

  constructor(private http: HttpClient) { }

  createNewUser(data: CreateStudentRequest): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(`${this.apiUrl}/new-user`, data);
  }
}
