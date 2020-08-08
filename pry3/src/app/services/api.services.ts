import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    constructor(private apollo: Apollo) { }

    getProductos() {
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
          return result.data.persons;
        }));
      }
}