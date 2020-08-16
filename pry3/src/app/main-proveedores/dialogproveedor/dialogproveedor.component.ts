import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { BasicaVendor } from '../../services/models/preveedores.models';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogproveedor',
  templateUrl: './dialogproveedor.component.html',
  styleUrls: ['./dialogproveedor.component.scss']
})
export class DialogproveedorComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogproveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public infoPro: BasicaVendor
  ) { }

  ngOnInit(): void {
  }

}
