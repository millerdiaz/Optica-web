import { Component, inject, Input } from '@angular/core';
import { ProductsComponent } from '../../components/public/products/products.component';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
  producService = inject(ProductService)
  product: any;
  @Input() products: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CarritoService
  ) {}
  addToCart() {
    this.cartService.addToCart(this.product);
  }
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
     // Captura el id de la URL
    if (productId) {
      this.productService.getOne(productId).subscribe({
        next: (resApi: any) => {
          this.product = resApi;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }


}




}
