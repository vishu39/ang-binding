import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  `
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <input [(ngModule)]="name" type="text">
  {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

public name='vishu';


  constructor() { }

  ngOnInit(): void {
  }
logMessage(value: any){
  console.log(value);
  
}

}

//4th vidoe

// <h2>
//   Welcome {{name}}
//   </h2>

// greetUser(){
//   return "Hello" +this.name;
//   }
    

//interpolation--------------------5th video
    //these are the things we can do with interpolation
  // <h2>{{2+2}}</h2>
  // <h2>{{"HELLO " + name}}</h2>
  // <h2>{{name.length}}</h2>
  // <h2>{{name.toUpperCase()}}</h2>
  // <h2>{{greetUser()}}</h2>
  // <h2>{{siteUrl}}</h2>
  //---------------------
  //things we can do with interpolation
  //  <h2>{a=2+2}}</h2>
  //<h2>{windows.location.href}}</h2>
  // public myId='testId';
// public isdesabled=true;
// public siteUrl=window.location.href;


//property binding----------6th video
// <input type="text" value="vishu">
// <input [id]="myId" type="text" value="vishu">
// <input bind-disabled="isdesabled" type="text" value="vishu">



//class binding--------------7th vide0

// <h2 class="text-success">vishu</h2>
//   <h2 [class]="successClass">vishu</h2>
//   <h2 class="text-special" [class]="successClass">vishu</h2>
//   <h2 [class.text-danger]="hasError">vishu</h2>
//   <h2 [ngClass]="messageClass">vishu</h2>

// public successClass="text-success";
// public hasError=true;
// public isSpecial=true;
// public messageClass={
//   "text-success":!this.hasError,
//   "text-danger":!this.hasError,
//   "text-special":!this.isSpecial,}

// `
//   .text-success{
//     color: green;
//   }
//   .text-danger{
//     color:red;
//   }
//   .text-success{
//     font-style:italic;
//   }
//   `

//style binding------8th video
// <h2 [style.color]="'green'">Style Binding</h2>
// <h2 [style.color]="hasError?'red':'green'">Style Binding2</h2>
// <h2 [ngStyle]="textColor">Style Binding3</h2>


// public successClass="text-success";
// public hasError=true;
// public isSpecial=true;
// public textColor={
// color:'blue',
// fontStyle:'italic', 
// }

//event binding---------------9th video
// <button (click)="onclick($event)">Greet</button>
// <button (click)="greeting='welcome Vishu'" >Greet</button>
// {{greeting}}
// public greeting="";
// onclick(event: any){
//   console.log(event)
//   this.greeting=event.type;
// }