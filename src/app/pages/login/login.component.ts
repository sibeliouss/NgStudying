import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private todoService: TodoService){}
    ngOnInit(): void {
      this.todoService
      .getAll()
      .subscribe({next:(value)=>console.log(value)});
    }

}
