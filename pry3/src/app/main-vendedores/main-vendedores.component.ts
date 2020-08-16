import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api.services';
import { Vendedor } from '../services/models/vendedores.models';
import { Peras } from '../services/models/vendedores.models';
import { Jaimicos } from '../services/models/vendedores.models'
import { BasicVendedores } from '../services/models/vendedores.models';
import { MatDialog } from '@angular/material/dialog';
import { DialogvendedoresComponent } from './dialogvendedores/dialogvendedores.component';

@Component({
  selector: 'app-main-vendedores',
  templateUrl: './main-vendedores.component.html',
  styleUrls: ['./main-vendedores.component.scss'],
})
export class MainVendedoresComponent implements OnInit {
    public nombre: string = '';
    public apellido: string = '';
    public genero: string = '';
    public id: number;
    public keyPres: string;
    public holis: number;
    public loading: boolean = true;
    public lst: any[] = ['xd', 'xd1', 'xd2', 'xd3', 'x4'];
    public columnas3: string[] = ['id', 'jt', 'bs', 'n', 'sn', 'a', 'sts', 'ets'];
    public columnas: string[] = ['id', 'nombre', 'depa', 'gene', 'grup', 'lvl', 'fre', 'tar',
    'VenA', 'venQ', 'HE', 'vaca'];
    public columnas2: string[] = ['id', 'nombre', 'actions'];
    public vendores: Vendedor[];
    public peras: Peras[];
    public jaimi: Jaimicos[];
    public jaimi2: Vendedor[];
    public infoVendedores: BasicVendedores[]
    readonly with: string = '600px';
    readonly height: string = '300px';

  constructor(
    private api: ApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getVendedores();
    this.getPeras();
  }

  getBasicInfoVendedores(id: number) {
    this.api.getInfoVendedor(id).subscribe((result: BasicVendedores[]) => {
      this.infoVendedores = result;
      const dialogRef = this.dialog.open(DialogvendedoresComponent, {
        width: this.with, height: this.height,
        data: this.infoVendedores[0]
      })
    });
  }

  getMemes() {
    this.api.getMemes(this.holis).subscribe((result: Jaimicos[]) => {
        this.jaimi = result;
        this.loading = false;
        //console.log(this.jaimi);
      });
  }

  getMemes2() {
    this.api.getMemes2(this.nombre).subscribe((result: Vendedor[]) => {
        this.jaimi2 = result;
        this.loading = false;
        console.log(this.jaimi2);
      });
  }

  getVendedores() {
    this.api.getVendedor().subscribe((result: Vendedor[]) => {
        this.vendores = result;
        this.loading = false;
        //console.log(this.vendores);
      });
  }

  getPeras() {
    this.api.getAnanin().subscribe((result: Peras[]) => {
        this.peras = result;
        this.loading = false;
        //console.log(this.peras);
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
