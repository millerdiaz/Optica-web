import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cart: any[] = []; // Array para almacenar los productos
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  constructor() {}

  addToCart(product: any) {
    this.cart.push(product);

    this.cartSubject.next([...this.cart]); // Emitir el nuevo estado del carrito

    console.log('Producto añadido al carrito:', product);
  }

  getCart() {
    return this.cartSubject.asObservable(); // Devolver el observable
  }
  removeFromCart(product: any) {
    this.cart = this.cart.filter(item => item !== product);
    this.cartSubject.next([...this.cart]);
  }

}
