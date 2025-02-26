import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { readableStreamLikeToAsyncGenerator } from 'rxjs/internal/util/isReadableStreamLike';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarritoService } from '../../../services/carrito/carrito.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductService)
  products! : any;
  product: any;
 @Input() productos: any;
  constructor( private productsService: ProductService,
      private route: ActivatedRoute,
      private cartService: CarritoService){}

      addToCart() {
        this.cartService.addToCart(this.product);
      }

  ngOnInit() :void{
    this.productService.showProducts().subscribe({
      next:(resApi:any)=>{
        console.log(resApi);
        this.products = resApi
      }
    })
  }



}
