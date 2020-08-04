import { Component, OnInit } from '@angular/core';
import { DialogregisterComponent } from '../dialogregister/dialogregister.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialoglogin',
  templateUrl: './dialoglogin.component.html',
  styleUrls: ['./dialoglogin.component.scss']
})
export class DialogloginComponent implements OnInit {
  contrasenia: string;
  usuario: string;
  readonly with: string = '235px';
  readonly height: string = '300px';

  constructor(
    public dialog: MatDialog,
    private router:Router
  ) {}

  ngOnInit(): void {
  }

  register(): void {
    const dialogRef = this.dialog.open(DialogregisterComponent, {
        width: this.with, height: this.height, backdropClass: 'backdropBackground'
      })
      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  jumpMaiHome(): void {
    this.router.navigate(['/mainMenu']);
  }
}
