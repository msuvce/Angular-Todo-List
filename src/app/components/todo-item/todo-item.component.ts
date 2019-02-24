import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    
    return classes;
  }

  // Toggle complete status of a TODO
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  // Delete a TODO
  onDelete(todo) {
    console.log('Delete');
  }

}
