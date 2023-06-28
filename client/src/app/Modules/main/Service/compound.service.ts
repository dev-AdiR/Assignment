import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Compound, baseUrl } from 'src/helpers/utils';

@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  constructor(private httpClient: HttpClient) {}

  getCompoundList(): Observable<Compound[]> {
    return this.httpClient.get<Compound[]>(`${baseUrl}`).pipe(
      map((response: any) => {
        return response.map((compound: any) => ({
          id: compound.id,
          name: compound.CompoundName,
          description: compound.CompoundDescription,
          imageSource: compound.strImageSource,
          imageAttribution: compound.strImageAttribution,
          dateModified: compound.dateModified,
        }));
      })
    );
  }

  getCompoundById(compoundId: string): Observable<Compound> {
    return this.httpClient.get<Compound>(`${baseUrl}/${compoundId}`).pipe(
      map((response: any) => {
        const compound: Compound = {
          id: response.id,
          name: response.CompoundName,
          description: response.CompoundDescription,
          imageSource: response.strImageSource,
          imageAttribution: response.strImageAttribution,
          dateModified: response.dateModified,
        };
        return compound;
      })
    );
  }

  updateCompound(compoundId: string, newData: Object): Observable<string> {
    return this.httpClient
      .put<string>(`${baseUrl}/${compoundId}`, newData)
      .pipe(
        map((response: any) => {
          return response.message;
        })
      );
  }
}
