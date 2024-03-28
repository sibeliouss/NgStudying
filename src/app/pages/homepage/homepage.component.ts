import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent  {
  todoList: string[]=[];
  constructor(private httpClient: HttpClient){}
  ngOnInit():void{
this.getTodos();
  }
  getTodos(){
    console.log('Fonksiyon öncesi');
    this.someAsyncOperation()
    .then((response:string)=>{
      console.log('cevap başatılı:',response);
    
    })
    .catch((error) => {
      console.log('Cevap başarısız promiseden şu değer geldi:', error);
    }) // işlem başarısız
    .finally(() => {
      console.log('Promise işlemi başarılı ya da başarısız sonlandı.');
    }); // işlem bitti (başarılı-başarısız)
  // then-catch-finally
  setTimeout(() => {
    console.log('Fonksiyon sonrası');
  }, 4000);
  console.log('Sync');

  }
  async getTodos2() {
    try {
      let value: string = await this.someAsyncOperation();
      console.log(value);
    } catch (error) {
      console.log('Hata:', error);
    }
  }

  someAsyncOperation(): Promise<string>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('123456');
      },2000);
    });
  }

  }


