import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {
  precio = 0;
  UrlAll = 'https://apiint.holapisos.com/es/api/node/inmuebles?page[limit]=32&page[offset]=0&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_area_cons,field_inmu_tipo_via,field_inmu_nomb_call,field_inmu_refe';

  constructor(private http: HttpClient) { }

  getClima(): Observable<any>{
    const URL = this.UrlAll;
    return this.http.get(URL)
  }

}
