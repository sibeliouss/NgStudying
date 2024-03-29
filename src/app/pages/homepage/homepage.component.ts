import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/ToDo';
import { FilterTodolistPipe } from '../../pipes/filter-todolist.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule,FilterTodolistPipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent  {
  todoList: ToDo[]=[];
  //today:Date=new Date();
  am_pm:Date=new Date();
  
  

  searchKey:string='';

  constructor(private httpClient: HttpClient){}
  ngOnInit():void{
this.getTodos();
  }
  getTodos(){
  //   console.log('Fonksiyon öncesi');
  //   this.someAsyncOperation()
  //   .then((response:string)=>{
  //     console.log('cevap başatılı:',response);
    
  //   })
  //   .catch((error) => {
  //     console.log('Cevap başarısız promiseden şu değer geldi:', error);
  //   }) // işlem başarısız
  //   .finally(() => {
  //     console.log('Promise işlemi başarılı ya da başarısız sonlandı.');
  //   }); // işlem bitti (başarılı-başarısız)
  // // then-catch-finally
  // setTimeout(() => {
  //   console.log('Fonksiyon sonrası');
  // }, 4000);
  // console.log('Sync');

  this.httpClient
  .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
  .subscribe({
    next:(response: ToDo[])=>{
      console.log('Backendten cvp geldi.',response);
      this.todoList=response;
    },
    error:(error)=>{console.log("Backendten htalı cevap geldi.",error);},
    complete:()=>{console.log('backend isteği sonlandı.');}
  

  });

  }
  //async getTodos2() {
   // try {
     // let value: string = await this.someAsyncOperation();
      //console.log(value);
    //} catch (error) {
      //console.log('Hata:', error);
    //}
  //}

  // someAsyncOperation(): Promise<string>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve('123456');
  //     },2000);
  //   });
  // }
  postToDo(){let obj={};
this.httpClient.post('link',obj).subscribe();}

dateFormat(){
 return this.am_pm.toLocaleString();
}

  }


