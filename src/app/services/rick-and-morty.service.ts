import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IcharacterResponse } from '../models/character.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacter(page: string = '1'): Observable<IcharacterResponse> {
    console.log('getCharacter');
    const params = new HttpParams()
      .set('page', page);
    return this.httpClient.get<IcharacterResponse>(
      `${environment.rickandmortyapi.baseUrl}${environment.rickandmortyapi.character}`,
      { params: params }
    );
  }

}
