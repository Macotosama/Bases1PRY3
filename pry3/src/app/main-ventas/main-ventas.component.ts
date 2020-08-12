import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../services/api.services';
import { Ventas } from '../services/models/ventas.models'
import { CreditCard } from '../services/models/ventas.models'
import { ShoppingCartItem } from '../services/models/ventas.models'

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrls: ['./main-ventas.component.scss']
})
export class MainVentasComponent implements OnInit {
  public lst: any[] = ['xd', 'xd1', 'xd2', 'xd3', 'x4'];
  public columnas: string[] = ['id', 'comprador', 'vendedor', 'precio', 'bonus', 'comision'];
  public columnas2: string[] = ['id', 'nCar', 'type', 'month', 'year'];
  public columnas3: string[] = ['SC', 'PI', 'DC', 'MD']
  private loading: boolean = true;
  public ventis: Ventas[];
  public credit: CreditCard[];
  public shop: ShoppingCartItem[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getVentas();
    this.getTargetas();
    this.ShoppingCartItem();
  }

  ShoppingCartItem() {
    this.api.ShoppingCartItem().subscribe((result: ShoppingCartItem[]) => {
        this.shop = result;
        this.loading = false;
        console.log(this.shop);
      });
  }

  getTargetas() {
    this.api.getTargetas().subscribe((result: CreditCard[]) => {
        this.credit = result;
        this.loading = false;
        //console.log(this.credit);
      });
  }

  getVentas() {
    this.api.getVentas().subscribe((result: Ventas[]) => {
        this.ventis = result;
        this.loading = false;
        //console.log(this.ventis);
      });
  }
}