import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../services/api.services';
import { Ventas } from '../services/models/ventas.models';
import { CreditCard } from '../services/models/ventas.models';
import { ShoppingCartItem } from '../services/models/ventas.models';
import { BasicSalwes } from '../services/models/ventas.models'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogventasComponent } from './dialogVentas/dialogventas.component';
import { DialogventasCardComponent } from './Dialogventascard/dialogventasCard';
import { BasicaPersonCreditCard } from '../services/models/ventas.models';

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
  public salesBasic: BasicSalwes[];
  public cardsBasic: BasicaPersonCreditCard[];
  readonly with: string = '600px';
  readonly height: string = '350px';
  readonly height2: string = '150px';

  constructor(
    private api: ApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getVentas();
    this.getTargetas();
    this.ShoppingCartItem();
  }

  infoCards(id: number) {
    this.api.getCardsBasis(id).subscribe((result: BasicaPersonCreditCard[]) => {
      this.cardsBasic = result;
      const dialogRef = this.dialog.open(DialogventasCardComponent, {
        width: this.with, height: this.height2,
        data: this.cardsBasic
      })
    });
  }

  infoVentas(id: number) {
    this.api.getBasicSales(id).subscribe((result: BasicSalwes[]) => {
      this.salesBasic = result;
      const dialogRef = this.dialog.open(DialogventasComponent, {
        width: this.with, height: this.height,
        data: this.salesBasic
      })
    });
  }

  ShoppingCartItem() {
    this.api.ShoppingCartItem().subscribe((result: ShoppingCartItem[]) => {
        this.shop = result;
        this.loading = false;
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