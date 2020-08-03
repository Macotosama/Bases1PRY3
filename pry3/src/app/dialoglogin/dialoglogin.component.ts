import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialoglogin',
  templateUrl: './dialoglogin.component.html',
  styleUrls: ['./dialoglogin.component.scss']
})
export class DialogloginComponent implements OnInit {
  contrasenia: string;
  usuario: string;

  constructor() {}

  ngOnInit(): void {
  }


}
