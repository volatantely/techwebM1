import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {
  cart = [
    {
      id: 4,
      name: 'Nike',
      desc: 'DAILY 3.0 SHOES',
      price: 98.99,
      quantity: 2,
      image: 'assets/images/produit4.png',
    }
  ];

  increment(item: any) {
    item.quantity++;
  }

  decrement(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }


  
  removeItem(item: any) {
    this.cart = this.cart.filter(i => i !== item);
  }
  
  
  getShipping(): number {
    return this.cart.length > 0 ? 10 : 0;
  }
  
  getTotal(): number {
    return this.getSubtotal() + this.getShipping();
  }

showInvoice = false;

checkout() {
  this.showInvoice = true;
}


}
