import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './components/public/products/products.component';
import { DescripcionComponent } from './component/descripción/descripcion.component';
import { PagoConfirmadoComponent } from './component/pago-confirmado/pago-confirmado.component';
import { CitasComponent } from './component/citas/citas.component';
import { PromocionesComponent } from './component/promociones/promociones.component';
import { CarritoComponent } from './component/carrito/carrito.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'catalogo',component:ProductsComponent},
  {path:'examenVisual',component:CitasComponent},
  {path:'promociones', component:PromocionesComponent},
  { path: 'descripcion/:id', component: DescripcionComponent },
  {path:'carro-De-Compras',component:CarritoComponent},
  {path:'pago-confirmado',component:PagoConfirmadoComponent},
  {path:'',pathMatch:'full', redirectTo:'home'}


];


