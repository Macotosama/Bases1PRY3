import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogregister',
  templateUrl: './dialogregister.component.html',
  styleUrls: ['./dialogregister.component.scss']
})
export class DialogregisterComponent implements OnInit {
  contrasenia: string;
  usuario: string;

  constructor() { }

  ngOnInit(): void {
  }

}
