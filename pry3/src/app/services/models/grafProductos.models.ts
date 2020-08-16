export interface TopProduc {
    ProductID: number;
    ProductName: string;
    ProductNumber: string;
    UnitPrice: number;
    Color: string;
    ProductLine: string;
    Style: string;
    SellStartDate: string;
    SellEndDate: string;
    Size: string;
    SubCategory: string;
    CategoryName: string;
    ProductModel: string;
}

export interface LocalesProd {
    LocationName: string
}

export interface ResultFiltPro {
    Name: string;
    Quantity: number;
    ProductID: number;
}


export interface BasicProducts{
    ProductID: number;
    Name: string;
    ProductNumber: string;
    Color: string;
    SafetyStockLevel: number;
    ReorderPoint: number;
    StandardCost: number;
    ListPrice: number;
    Size: string;
    SizeUnitMEasureCode: string;
    WeightUnitMEasureCode: string;
    Weight: number;
    DaysToManufacture: number;
    ProductLine: string;
    Class: string;
    Style: string;
    ProductSubcategoryID: number;
    ProductModelID: number;
    SellStartDate: string;
    SellEndDate: string;
    DiscontinuedDate: string;
    rowguid: string;
    ModifiedDate: string;
}