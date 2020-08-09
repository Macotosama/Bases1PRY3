import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProductosComponent } from './main-productos/main-productos.component';
import { MainVentasComponent } from './main-ventas/main-ventas.component';
import { MainVendedoresComponent } from './main-vendedores/main-vendedores.component';
import { MainClientesComponent } from './main-clientes/main-clientes.component';
import { MainProveedoresComponent } from './main-proveedores/main-proveedores.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mainMenu', component: MainMenuComponent },
  { path: 'mainProductos', component: MainProductosComponent},
  { path: 'mainVentas', component: MainVentasComponent},
  { path: 'mainVendedores', component: MainVendedoresComponent},
  { path: 'mainClientes', component: MainClientesComponent},
  { path: 'mainProveedores', component: MainProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
