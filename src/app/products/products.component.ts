import { Component } from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {product} from '../types/entities';
import {ProductsService} from './products.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: product[] = [];
  showModal = false;

  // Temporary new product details
  newProduct:product = {
    name: '',
    price: 0,
    currency: '',
    image: ''
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openAddProductPopup(): void {
    this.showModal = true; // Show the modal
  }

  closePopup(): void {
    this.showModal = false; // Hide the modal
    this.resetNewProduct(); // Reset the form
  }

  resetNewProduct(): void {
    this.newProduct = {
      name: '',
      price: 0,
      currency: '',
      image: ''
    };
  }

  onAddProduct(): void {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.currency && this.newProduct.image) {
      this.products.push({ ...this.newProduct }); // Add the new product to the list
      this.closePopup(); // Close the modal
    }
    this.productsService.addProduct(this.newProduct).subscribe(() => {
      this.fetchProducts();
      this.closePopup();
    });
  }
}
