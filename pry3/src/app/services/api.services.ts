import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    constructor(private apollo: Apollo) { }

    getPersons() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{persons {
                BusinessEntityID
                PersonType
                NameStyle
                Title
                FirstName
                MiddleName
                LastName
                Suffix
                EmailPromotion
                AdditionalContactInfo
                Demagraphics
                  rowguid
                ModifiedData
            }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            //console.log({result});
          return result.data.persons;
        }));
      }

      getProductos() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{productos {
                ProductID
                ProductName
                ProductNumber
                UnitPrice
                Color
                ProductLine
                Style
                SellStartDate
                SellEndDate
                Size
                SubCategory
                CategoryName
                ProductModel
                Quantity
                LocationName
            }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            //console.log({result});
          return result.data.productos;
        }));
      }

      getTopProducto() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{topProductosMejoresVendidos {
              ProductID
              ProductName
              ProductNumber
              UnitPrice
              Color
              ProductLine
              Style
              SellStartDate
              SellEndDate
              Size
              SubCategory
              CategoryName
              ProductModel
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            //console.log({result});
          return result.data.topProductosMejoresVendidos;
        }));
      }

      getNoTopProducto() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{topProductosPeorVendidos {
              ProductID
              ProductName
              ProductNumber
              UnitPrice
              Color
              ProductLine
              Style
              SellStartDate
              SellEndDate
              Size
              SubCategory
              CategoryName
              ProductModel
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            //console.log(result);
          return result.data.topProductosPeorVendidos;
        }));
      }

      getLocalProd() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{ locaciones { 
              LocationName
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            //console.log({result});
          return result.data.locaciones;
        }));
      }

      getFilProd(fill: string) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{optenerlocaciones(LocationName: "${fill}"){
              Name
              Quantity
            }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.optenerlocaciones;
        }));
      }
}