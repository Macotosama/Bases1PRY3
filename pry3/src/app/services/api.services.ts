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
              ProductID
              Name
              Quantity
            }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.optenerlocaciones;
        }));
      }


      getInfoPro(fill: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicProducts(Identificador: ${fill}){
              ProductID
              Name
              ProductNumber
              Color
              SafetyStockLevel
              ReorderPoint
              StandardCost
              ListPrice
              Size
              SizeUnitMEasureCode
              WeightUnitMEasureCode
              Weight
              DaysToManufacture
              ProductLine
              Class
              Style
              ProductSubcategoryID
              ProductModelID
              SellStartDate
              SellEndDate
              DiscontinuedDate
              rowguid
              ModifiedDate
            }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.basicProducts;
        }));
      }

      getVentas() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{ ventas {
              SalesOrderID
              ProductID
              RevisionNumber
              Description
              UnitPrice
              CustomerID
              FullNameCustomer
              FullNameSalesPerson
              Bonus
              SalesLastYear
              CommissionPct
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.ventas;
        }));
      }

      getTargetas() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{ optenerProcCreditCards {
              CreditCardID
              CardNumber
              CardType
              ExpMonth
              ExpMonthExpYear
              ModifiedDate
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.optenerProcCreditCards;
        }));
      }

      getCardsBasis(id: number) {
        console.log(id);
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicaPersonCreditCards (CreditCardID: ${id}){
              BusinessEntityID
              CreditCardID
              ModifiedDate
              }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
            console.log(result);
          return result.data.basicaPersonCreditCards;
        }));
      }

      ShoppingCartItem() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{optenerProcShoppingCartItems {
              ShoppingCartItemID
              ShoppingCartID
              ProductID
              DateCreated
              ModifiedDate
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.optenerProcShoppingCartItems;
        }));
      }

      getBasicSales(id: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicaSalesOrderDetails(SalesOrderID: ${id}) {
              SalesOrderID
              SalesOrderDetailID
              CarrierTrackingNumber
              OrderQty
              ProductID
              SpecialOfferID
              UnitPrice
              UnitPriceDiscount
              LineTotal
              rowguid
              ModifiedDate
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.basicaSalesOrderDetails;
        }));
      }


      getVendedor() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{vendedores {
              BusinessEntityID
              FullName
              SalesQuota
              JobCandidateID
              Gender
              VacationHours
              OrganizationLevel
              SickLeaveHours
              PayFrequency
              Rate
              CommissionPct
              SalesLastYear
              DepartmentName
              GroupName
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.vendedores;
        }));
      }

      getInfoVendedor(id: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicaSalesPersons (BusinessEntityID: ${id}){
              BusinessEntityID
              TerritoryID
              SalesQuota
              Bonus
              CommissionPct
              SalesYTD
              SalesLastYear
              rowguid
              ModifiedDate
              ModifiedDate
              }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.basicaSalesPersons;
        }));
      }

      getAnanin() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{peoples{
              BusinessEntityID
               FirstName
               LastName
             }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.peoples;
        }));
      }

      getMemes(holis: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{optenerInformacionTemporalRecusosHumanosPersonas(IdentificadorVendedor: ${holis}){
              DeparmentiD
              jobTitle
              BusinessEntityID
              Nombre
              SegundoNombre
              Apellido
              startTimeShift
              endTimeShift
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.optenerInformacionTemporalRecusosHumanosPersonas;
        }));
      }

      getMemes2(nombre: string) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{optenerProcVendedores(FullName: "${nombre}"){
              BusinessEntityID
              FullName
              SalesQuota
              JobCandidateID
              Gender
              VacationHours
              OrganizationLevel
              SickLeaveHours
              PayFrequency
              Rate
              CommissionPct
              SalesLastYear
              DepartmentName
              GroupName
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.optenerProcVendedores;
        }));
      }

      getCLiente() {
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
           // console.log({result});
          return result.data.persons;
        }));
      }

      getBasicCliente(id: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicaCustomers (BusinessEntityID: ${id}){
              CustomerID
              PersonID
              StoreID
              AccountNumber
              rowguid
              ModifiedDate
              }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
           // console.log({result});
          return result.data.basicaCustomers;
        }));
      }

      getMEmeme(name1: string) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{optenerProcPersosnCustomer(FullName: "${name1}"){
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
           // console.log({result});
          return result.data.optenerProcPersosnCustomer;
        }));
      }

      insertCard(name1: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{mensajes(Identificador: ${name1}){
              info
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.mensajes;
        }));
      }

      getProveedores() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{proveedores{
              BusinessEntityID
              Name
              PurchasingWebServiceURL 
              MaxOrderQty        
              MinOrderQty
              StandardPrice
              Product
              ProductCategory
              OrderQty
              RejectedQty
              ReceivedQty
              StockedQty
              SubTotal
              }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.proveedores;
        }));
      }

      getBasicaVendor(id: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{basicaVendors2 (BusinessEntityID: ${id}){
              BusinessEntityID
              AccountNumber
              Name
              CreditRating
              PreferredVendorStatus
              ActiveFlag
              PurchasingWebServiceURL
              ModifiedDate
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.basicaVendors2;
        }));
      }

      getpAuidi() {
        return this.apollo
        .watchQuery(
          {
            query: gql`{auditorias{
              idAuditoria
              Accion
              Fecha
              Mensaje}}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          //console.log(result);
          return result.data.auditorias;
        }));
      }

      eliminartCard(name1: number) {
        return this.apollo
        .watchQuery(
          {
            query: gql`{noborrados (Identificador: ${name1}){
              info
          }}`,
            fetchPolicy: 'network-only'
          }
        ).valueChanges.pipe(map((result: any) => {
          return result.data.mensajes;
        }));
      }
}