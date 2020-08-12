export interface Ventas {
    SalesOrderID: number
    ProductID: number
    RevisionNumber: number
    Description: string
    UnitPrice: number
    CustomerID: number
    FullNameCustomer: string
    FullNameSalesPerson: string
    Bonus: number
    SalesLastYear: number
    CommissionPct: number
}

export interface CreditCard {
    CreditCardID: number
    CardNumber: string
    CardType: string
    ExpMonth: number
    ExpMonthExpYear: number
    ModifiedDate: number
}

export interface ShoppingCartItem {
    ShoppingCartItemID: number
    ShoppingCartID: string
    ProductID: number
    DateCreated: string
    ModifiedDate: string
}