import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Iuser } from '../../users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input()
users:Iuser[]=[];

@Output()
userSelected:EventEmitter< Iuser>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
onBtnClick(users:Iuser){
  this.userSelected.emit(users);
}
}
