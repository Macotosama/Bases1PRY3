import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogloginComponent } from '../dialoglogin/dialoglogin.component';
import { ApiService } from '../services/api.services';
import { Auditoria } from '../services/models/audi.models';
import { TopProduc } from '../services/models/grafProductos.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly with: string = '235px';
    readonly height: string = '300px';
    public columnas: string[] = ['idAuditoria', 'Accion', 'Fecha', 'Mensaje']
    public jaimi: Auditoria[];
    public topProduc: TopProduc[];
    public graf: Chart[] = [];
    constructor(
        public dialog: MatDialog,
        private api: ApiService
    ) { }

    ngOnInit(): void {
        this.getpAuidi();
        this.getTopProductos() ;
    }

    getTopProductos() {
        this.api.getTopProducto().subscribe((result: TopProduc[]) => {
            this.topProduc = result;
            //console.log(this.topProduc);
            this.initChart();
          });
        // console.log(this.person);
      }

    getpAuidi() {
        this.api.getpAuidi().subscribe((result: Auditoria[]) => {
            this.jaimi = result;
            //console.log(this.jaimi);
          });
      }
    

      initChart(): void {
        var ctx = document.getElementById('myChart');
        this.graf.push( new Chart(ctx, {
            type: 'line',
            data: {
                labels: [this.topProduc[4].ProductName, this.topProduc[1].ProductName,
                this.topProduc[5].ProductName, this.topProduc[3].ProductName,
                this.topProduc[0].ProductName, this.topProduc[2].ProductName],
                datasets: [{
                    label: 'precios',
                    data: [this.topProduc[4].UnitPrice, this.topProduc[1].UnitPrice,
                    this.topProduc[5].UnitPrice, this.topProduc[3].UnitPrice,
                    this.topProduc[0].UnitPrice, this.topProduc[2].UnitPrice],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }));
      }

    login(): void {
        const dialogRef = this.dialog.open(DialogloginComponent, {
            width: this.with, height: this.height, backdropClass: 'backdropBackground'
          })
          dialogRef.afterClosed().subscribe(result => {
            if(result){}
        });
    }

}
