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
  public notTopProduc: TopProduc[];
  public localProduc: LocalesProd[];
  public resulF: ResultFiltPro[];
  public labels2: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  public datos2: number[] = [12, 19, 3, 5, 2, 3];
  public graf: Chart[] = [];
  public sss: Chart;
  loading: boolean;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getNotTopProductos();
    this.getTopProductos();
    this.getLocalProd();
    //this.initChart();
    this.initChart2();
    //this.initChart3();
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

  getNotTopProductos() {
    this.api.getNoTopProducto().subscribe((result: TopProduc[]) => {
        (this.notTopProduc = result);
       // console.log(this.notTopProduc);
        this.loading = false;
        this.initChart3();
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
   // console.log(fil);
    this.api.getFilProd(fil).subscribe((result: ResultFiltPro[]) => {
        this.resulF = result;
        this.labels2=[this.resulF[4].Name, this.resulF[1].Name,this.resulF[5].Name, this.resulF[3].Name,this.resulF[0].Name, this.resulF[2].Name];
        this.datos2=[this.resulF[4].Quantity, this.resulF[1].Quantity, this.resulF[5].Quantity, this.resulF[3].Quantity,this.resulF[0].Quantity, this.resulF[2].Quantity];
        this.sss.chart.data.labels = this.labels2;
        this.sss.chart.data.datasets.forEach((dataset) => {
            dataset.data = this.datos2;
        });
        this.sss.update();
        this.loading = false;
      });
  }
  initChart(): void {
    var ctx = document.getElementById('ventas');
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

  initChart2(): void {
    var ctx = document.getElementById('ventas2');
    this.sss = ( new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.labels2,
            datasets: [{
                label: '# de stacks',
                data: this.datos2,
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

  initChart3(): void {
    var ctx = document.getElementById('ventas3');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [this.notTopProduc[4].ProductName, this.notTopProduc[1].ProductName,
            this.notTopProduc[5].ProductName, this.notTopProduc[3].ProductName,
            this.notTopProduc[0].ProductName, this.notTopProduc[2].ProductName],
            datasets: [{
                label: '# of Votes',
                data: [this.notTopProduc[4].UnitPrice, this.notTopProduc[1].UnitPrice,
                this.notTopProduc[5].UnitPrice, this.notTopProduc[3].UnitPrice,
                this.notTopProduc[0].UnitPrice, this.notTopProduc[2].UnitPrice],
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
