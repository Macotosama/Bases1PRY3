import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { BasicSalwes } from '../../services/models/ventas.models'
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { info } from 'console';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogventasComponent implements OnInit {
  private max: number;
  public cont: number;

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogventasComponent>,
    @Inject(MAT_DIALOG_DATA) public infoPro: BasicSalwes[]
  ) {
    this.max = infoPro.length;
    this.cont = 0;
   }

  ngOnInit(): void {
  }

  after() {
    this.cont -= 1;
    if (this.cont < 0 ) {
      this.cont = this.max - 1;
    }
  }

  next() {
    this.cont += 1;
    if (this.cont === this.max ) {
      this.cont = 0;
    }
  }

}
