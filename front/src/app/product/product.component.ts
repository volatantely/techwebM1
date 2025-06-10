import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // ajuste le chemin si besoin
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-product',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  currentProductIndex = 0;
  currentProduct: any;
  quantity = 1;

  constructor(private productService: ProductService, private router: Router, private bagService: BagService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const id = +idParam;
        this.loadProductById(id);
      }
    });
  }
  loadProductById(id: number): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;

        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
          this.currentProductIndex = index;
          this.currentProduct = this.products[index];
        } else {
          console.error('Produit non trouvé pour id =', id);
        }
      },
      error: (err) => {
        console.error('Erreur de chargement des produits', err);
      }
    });
  }

  nextProduct() {
    if (this.currentProductIndex < this.products.length - 1) {
      this.currentProductIndex++;
      this.currentProduct = this.products[this.currentProductIndex];
      this.quantity = 1;
    }
  }

  previousProduct() {
    if (this.currentProductIndex > 0) {
      this.currentProductIndex--;
      this.currentProduct = this.products[this.currentProductIndex];
      this.quantity = 1;
    }
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
