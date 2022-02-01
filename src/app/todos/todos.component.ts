import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  async add(title: string) {
    await this.todoService.add(title);
  }

}
