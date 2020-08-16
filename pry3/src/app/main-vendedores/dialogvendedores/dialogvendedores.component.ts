import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { BasicVendedores } from '../../services/models/vendedores.models';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogvendedores',
  templateUrl: './dialogvendedores.component.html',
  styleUrls: ['./dialogvendedores.component.scss']
})
export class DialogvendedoresComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogvendedoresComponent>,
    @Inject(MAT_DIALOG_DATA) public infoVend: BasicVendedores
  ) { }

  ngOnInit(): void {
  }

}
