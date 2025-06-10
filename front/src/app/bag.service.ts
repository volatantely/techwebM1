import { Injectable } from '@angular/core';

export interface BagItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
  desc: string;
}

@Injectable({
  providedIn: 'root',
})
export class BagService {
  private items: BagItem[] = [];

  // Récupérer les produits dans le bag
  getItems(): BagItem[] {
    return this.items;
  }

  // Ajouter un produit au bag
  addToBag(product: BagItem) {
    const existing = this.items.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.items.push({ ...product });
    }
  }

  // Supprimer un produit du bag te
  removeFromBag(name: string) {
    this.items = this.items.filter(item => item.name !== name);
  }

  // Calculer le total du bag
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
