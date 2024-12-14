import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aves } from '../interface/aves';

@Injectable({
  providedIn: 'root'
})
export class AvesAppService {
  private readonly urlApi : string = 'https://aves.ninjas.cl/api/birds';

  constructor(private readonly http: HttpClient) { };

  obtenerAves() : Observable<Aves[]>{
    return this.http.get<Aves[]>(this.urlApi);
  }
}
