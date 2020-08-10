import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../services/api.services';
import { Productos } from '../services/models/productos.models';
import { TopProduc } from '../services/models/grafProductos.models';
import { LocalesProd } from '../services/models/grafProductos.models';
import { ResultFiltPro } from '../services/models/grafProductos.models';

@Component({
  selector: 'app-main-productos',
  templateUrl: './main-productos.component.html',
  styleUrls: ['./main-productos.component.scss']
})
export class MainProductosComponent implements OnInit {
  public lst: any[] = ['xd', 'xd1', 'xd2', 'xd3', 'x4'];
  public columnas: string[] = ['id', 'nombre', 'stack'];
  public productos: Productos[];
  public topProduc: TopProduc[];
  public localProduc: LocalesProd[];
  public resulF: ResultFiltPro[];
  loading: boolean;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getTopProductos();
    this.getLocalProd();
    //this.initChart();
    this.initChart2();
    this.initChart3();
    this.initChart4();
  }

  getProductos() {
    this.api.getProductos().subscribe((result: Productos[]) => {
        this.productos = result;
        this.loading = false;
      });
    // console.log(this.person);
  }

  getTopProductos() {
    this.api.getTopProducto().subscribe((result: TopProduc[]) => {
        this.topProduc = result;
        //console.log(this.topProduc);
        this.loading = false;
        this.initChart();
      });
    // console.log(this.person);
  }

  getLocalProd() {
    this.api.getLocalProd().subscribe((result: LocalesProd[]) => {
        this.localProduc = result;
       // console.log(this.localProduc);
        this.loading = false;
      });
    // console.log(this.person);
  }

  getFilProd(fil: string) {
    console.log(fil);
    this.api.getFilProd(fil).subscribe((result: ResultFiltPro[]) => {
        this.resulF = result;
        console.log(this.resulF);
        this.loading = false;
      });
  }

  initChart(): void {
    var ctx = document.getElementById('ventas');
    var myChart = new Chart(ctx, {
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
    });
  }

  initChart2(): void {
    var ctx = document.getElementById('ventas2');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
    });
  }

  initChart3(): void {
    var ctx = document.getElementById('ventas3');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
    });
  }

  initChart4(): void {
    var ctx = document.getElementById('ventas4');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
    });
  }
}
