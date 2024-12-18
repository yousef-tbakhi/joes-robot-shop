import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product:IProduct;

  constructor(){
    this.product={
      id:2 , 
      description:"abcdefghijklmnopqrstuvwxyz",
      name:"Friendly Bot",
      imageName:"head-friendly.png",
      category:"Heades",
      price:935,
      discount:0.2
    }
  }
}
