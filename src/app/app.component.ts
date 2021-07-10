import { Component } from '@angular/core';
import { Iuser} from './users';
import { Iprod } from './Iproduct';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  total=0;
  cart: {[x:string]: number} = {}
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
    
  products:Iprod[]=[
    {
      id:"iph",
      title:"Iphone8",
      description:"this is iphone8",
      price:100,
      imgURL:"https://www.shopwish.in/wp-content/uploads/2021/01/iphone-9.png"
    },
    {
      id:"sam",
      title:"Samsung s20",
      description:"this is samsung s20",
      price:200,
      imgURL:"https://images-na.ssl-images-amazon.com/images/I/81snLg55xeL._SL1500_.jpg"
    }
  ];


onUserSelect(user:Iuser):void{
  this.selectedUser=user;
} 

itemAddedToCart(prod:Iprod){
this.cart[prod.id]=this.cart[prod.id] || 0;
  this.cart[prod.id]++;
  this.total=Object.values(this.cart).reduce((acc:any,inival:any)=>acc+inival) ;
}
}