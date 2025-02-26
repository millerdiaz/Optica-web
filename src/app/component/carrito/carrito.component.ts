import { Component, Input } from '@angular/core';
import { CarritoService } from '../../services/carrito/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  cartItems: any[] = [];



  constructor(private cartService: CarritoService) {
    this.cartService.getCart().subscribe(cart => {
      this.cartItems = cart; // Actualiza la lista de productos  }
    });
}
removeFromCart(product: any) {
  this.cartService.removeFromCart(product);
}
}
