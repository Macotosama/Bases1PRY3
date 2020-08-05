import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProductosComponent } from './main-productos/main-productos.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mainMenu', component: MainMenuComponent },
  { path: 'mainProductos', component: MainProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
