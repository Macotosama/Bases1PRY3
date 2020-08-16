export interface Persons {
    BusinessEntityID: number;
    PersonType: string;
    NameStyle: number;
    Title: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Suffix: string;
    EmailPromotion: number;
    AdditionalContactInfo: string;
    Demagraphics: string;
  	rowguid: string;
    ModifiedData: string;
}

export interface Mensaje {
  info: string;
}

export interface BasicaCustomer {
  CustomerID: number
  PersonID: number
  StoreID: number
  AccountNumber: string
  rowguid: string
  ModifiedDate: string
}