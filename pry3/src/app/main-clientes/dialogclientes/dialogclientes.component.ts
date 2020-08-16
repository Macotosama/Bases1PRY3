import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { BasicaCustomer } from '../../services/models/persons.models';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogclientes',
  templateUrl: './dialogclientes.component.html',
  styleUrls: ['./dialogclientes.component.scss']
})
export class DialogclientesComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogclientesComponent>,
    @Inject(MAT_DIALOG_DATA) public infoPro: BasicaCustomer
  ) { }

  ngOnInit(): void {
  }

}
