import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { task } from '../tasks';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<task[]>{
    console.log("Inside service get task")
   return this.http.get<task[]>("http://localhost:5000/tasks");
  }
  deleteTask(task: task): Observable<task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<task>(url);
}

}
