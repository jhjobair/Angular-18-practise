import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string= "Angular 18";
  inputType = "Radio";
  ClassName : string= "bg-success";
  Rollnum : number= 123;
  currentDate : Date = new Date();
  constructor(){
   
  }
}
