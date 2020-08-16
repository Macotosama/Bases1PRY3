import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.services';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BasicaPersonCreditCard } from '../../services/models/ventas.models';
@Component({
  selector: 'app-dialogventas2',
  templateUrl: './dialogventas2.component.html',
  styleUrls: ['./dialogventas2.component.scss']
})
export class DialogventasCardComponent implements OnInit {
  private max: number;
  public cont: number;

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogventasCardComponent>,
    @Inject(MAT_DIALOG_DATA) public cardsBasic: BasicaPersonCreditCard[]
  ) {
    this.max = cardsBasic.length;
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
