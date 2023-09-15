import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card ',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: ProductType;


  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!:ElementRef;

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: ''
    }
  }



  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.toUpper())
  }
}
