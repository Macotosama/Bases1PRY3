import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../services/api.services';
import { Proveedor } from '../services/models/preveedores.models'

@Component({
  selector: 'app-main-proveedores',
  templateUrl: './main-proveedores.component.html',
  styleUrls: ['./main-proveedores.component.scss']
})
export class MainProveedoresComponent implements OnInit {
  public lst: any[] = ['xd', 'xd1', 'xd2', 'xd3', 'x4'];
  public columnas: string[] = ['id', 'Name', 'MaxOrderQty', 'MinOrderQty', 'StandardPrice', 'Product', 'ProductCategory', 'StandardCost',
    'OrderQty', 'StockedQty', 'SubTotal'];
  public provee: Proveedor[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
      this.getProveedores();
  }

  getProveedores() {
    this.api.getProveedores().subscribe((result: Proveedor[]) => {
        this.provee = result;
        console.log(this.provee);
      });
  }

}
