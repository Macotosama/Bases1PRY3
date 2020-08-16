import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { BasicProducts } from '../../services/models/grafProductos.models';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public infoPro: BasicProducts
  ) { }

  ngOnInit(): void {
  }
}
