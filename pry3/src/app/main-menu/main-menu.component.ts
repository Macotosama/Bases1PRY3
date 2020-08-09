import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  jumpMaiProductos(): void {
    this.router.navigate(['/mainProductos']);
  }

  jumpMaiVentas(): void {
    this.router.navigate(['/mainVentas']);
  }

  jumpMaiVendedores(): void {
    this.router.navigate(['/mainVendedores']);
  }
  
  jumpMaiClientes(): void {
    this.router.navigate(['/mainClientes']);
  }

  jumpMaiProveedores(): void {
    this.router.navigate(['/mainProveedores']);
  }
}
