import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'; 
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  displayedProducts: Product[] = [];

  currentPage: number = 0;
  productsPerPage: number = 4;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.updateDisplayedProducts();
    });
  }

  updateDisplayedProducts() {
    const start = this.currentPage * this.productsPerPage;
    const end = start + this.productsPerPage;
    this.displayedProducts = this.products.slice(start, end);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.productsPerPage < this.products.length) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product/', productId]);
  }
}
