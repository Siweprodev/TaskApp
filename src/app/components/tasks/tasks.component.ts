import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { task } from '../../tasks';
import {TASKS} from '../../mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks));
    ;
  }


}
