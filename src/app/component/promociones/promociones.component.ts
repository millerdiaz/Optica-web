import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {
  productService = inject(ProductService);
  promos! : any;

  ngOnInit() :void{
    this.productService.showProducts().subscribe({
      next:(resApi:any)=>{
        console.log(resApi);
        this.promos = resApi
      }
    })
  }
}
