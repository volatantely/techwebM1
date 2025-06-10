import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    {
        path: 'bag',
        loadComponent: () => import('./bag/bag.component').then(m => m.BagComponent)
      },    
    { path: '**', redirectTo: '' }
  ];
