import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Iprod } from 'src/app/Iproduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products:Iprod[]=[];

  @Output()
  onAddToCart:EventEmitter<Iprod>=new EventEmitter<Iprod>();

  constructor() { }

  ngOnInit(): void {
  }
onBtnClick(product:Iprod){
  this.onAddToCart.emit(product);
  
}
}
