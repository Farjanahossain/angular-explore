import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]; 

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }
   
  deleteTodo(todo:Todo) {
    //to delete from UI
    //this.todos = this.todos.filter(t => t.id !=todo.id);
    

    //to delete from server
    this.todoService.deleteTodo(todo).subscribe();

    // to delete item one by one
    this.todos = this.todos.filter(t => { return t !== todo});

   
  }
  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo =>{
      this.todos.push(todo);
    });
  }
  
}


