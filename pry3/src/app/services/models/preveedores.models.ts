export interface Proveedor {
    BusinessEntityID: number
    Name: string
    PurchasingWebServiceURL: string
    MaxOrderQty: number
    MinOrderQty: number
    StandardPrice: number
    Product: string
    ProductCategory: string
    StandardCost: number
    OrderQty: number
    RejectedQty: number
    ReceivedQty: number
    StockedQty: number
    SubTotal: number 
}

export interface BasicaVendor {
    BusinessEntityID: number
    AccountNumber: string
    Name: string
    CreditRating: number
    PreferredVendorStatus: number
    ActiveFlag: number
    PurchasingWebServiceURL: string
    ModifiedDate: string
}