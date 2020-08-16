import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';
import { Proveedor } from '../services/models/preveedores.models';
import { BasicaVendor } from '../services/models/preveedores.models';
import {  MatDialog } from '@angular/material/dialog';
import { DialogproveedorComponent } from './dialogproveedor/dialogproveedor.component'

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
  public infoProve: BasicaVendor;
  public id: number;
  public name: string;
  private keyPres: string;
  readonly with: string = '600px';
  readonly height: string = '250px';

  constructor(
    private api: ApiService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
      this.getProveedores();
  }

  getBasicaVendor() {
    if (this.id != null) {
      this.api.getBasicaVendor(this.id).subscribe((result: BasicaVendor[]) => {
      this.infoProve = result[0];
      this.id = null;
      if (result.length > 0){
        const dialogRef = this.dialog.open(DialogproveedorComponent, {
        width: this.with, height: this.height,
        data: this.infoProve
      })
      }
    });
  }
  }

  getBasicaVendor2() {
    if (this.name != null) {
      this.api.getBasicaVendor2(this.name).subscribe((result: BasicaVendor[]) => {
      this.infoProve = result[0];
      this.name = null;
      if (result.length > 0){
        const dialogRef = this.dialog.open(DialogproveedorComponent, {
        width: this.with, height: this.height,
        data: this.infoProve
      })
      }
    });
  }
  }

  getProveedores() {
    this.api.getProveedores().subscribe((result: Proveedor[]) => {
        this.provee = result;
      });
  }

  handleKeyboardEvent(event: KeyboardEvent) { 
    this.keyPres = event.key;
    var numeros="0123456789";
    var especiales="8-37-38-46";
    var tecladoespecial = false;
    if (numeros.includes(this.keyPres) || especiales.includes(this.keyPres)) {
      tecladoespecial = true;
    }
    return tecladoespecial;
  }

}
