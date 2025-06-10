import { Directive } from '@angular/core';

@Directive({
  selector: '[appProduct]',
  standalone: true
})
export class ProductDirective {

  constructor() { }

}
