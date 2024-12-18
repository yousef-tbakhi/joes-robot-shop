import { Component , EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product:IProduct){
    return './assets/images/robot-parts/' + product.imageName;
  }
  clickBuyButton(product:IProduct){
    this.buy.emit();
  }

  getClassesForElements(product : IProduct){
    if(product.discount > 0 )
      return ['strikeThroug','bold'];
    else 
    return [] ; 
    
  }

}
