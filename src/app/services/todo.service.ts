import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ToDo[]>{
    return this.httpClient.get<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
