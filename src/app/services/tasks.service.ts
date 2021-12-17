import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { task } from '../tasks';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http//localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<task[]>{
   return this.http.get<task[]>(this.apiUrl);
  }
}


