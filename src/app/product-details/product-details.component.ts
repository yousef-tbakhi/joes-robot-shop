import { Component , Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!:IProduct;
  cart : IProduct [] = [] ; 

  getImageUrl(product:IProduct){
    return './assets/images/robot-parts/' + product.imageName;
  }
  addToCart(product:IProduct){
    this.cart.push(product)
    console.log("the product is added to cart successfully ")
  }
  getClassesForElements(product : IProduct){
    if(product.discount > 0 )
      return ['strikeThroug','bold'];
    else 
    return [] ; 
    
  }

}
