import { Component } from '@angular/core';
interface Iuser{
  name:String,
  age:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedUser!:Iuser;
  users=[
    {
      name:'Arun',
      age:10
    },
    {
      name:'Shankar',
      age:30
    },
    {
      name:'Anu',
      age:15
    }
  ];


onBtnClick(user:Iuser){
  this.selectedUser=user;
}
}