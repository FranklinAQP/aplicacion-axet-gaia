import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacter(page: string = '1'){
    
  }

}
