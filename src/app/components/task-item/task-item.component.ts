import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {task} from '../../tasks';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: task;
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task){
    this.onDeleteTask.emit(task);
  }

}
