import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { DialogloginComponent } from './dialoglogin/dialoglogin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogregisterComponent } from './dialogregister/dialogregister.component';
import { MatTableModule } from '@angular/material/table';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProductosComponent } from './main-productos/main-productos.component';
import { MainVentasComponent } from './main-ventas/main-ventas.component';
import { MainVendedoresComponent } from './main-vendedores/main-vendedores.component';
import { MainClientesComponent } from './main-clientes/main-clientes.component';
import { MainProveedoresComponent } from './main-proveedores/main-proveedores.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogloginComponent,
    DialogregisterComponent,
    MainMenuComponent,
    MainProductosComponent,
    MainVentasComponent,
    MainVendedoresComponent,
    MainClientesComponent,
    MainProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    GraphQLModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
