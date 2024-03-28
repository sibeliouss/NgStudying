import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  username: string='';
  writeConsole(){
    console.log(this.username);
  }
  changeFromTs(){
    this.username='örnek';
  }

}
