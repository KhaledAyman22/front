import {Component, input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  productImage = input.required<string>(); // URL of the product image
  productName = input.required<string>();   // Name of the product
  productPrice = input.required<number>();   // Price of the product
  productCurrency = input.required<string>(); // Currency of the product
}
