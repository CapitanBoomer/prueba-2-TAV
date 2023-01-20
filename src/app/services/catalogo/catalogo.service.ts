import { Injectable } from '@angular/core';
import { Producto, respCatalogo } from '../../interfaces/catalogo/producto';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service'
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private urlcat: string = 'https://dummyjson.com/auth/products'
  public CatDatos: respCatalogo | null = null
  constructor(private http: HttpClient, private servauth: AuthService) { }

  public catalogo() {
    this.http.get<respCatalogo>(this.urlcat, {
      headers: {
        'Authorization': 'Bearer ' + this.servauth.LoginAuth?.token,
        'Content-Type': 'application/json'
      }
    }).subscribe(datos => {
      if (datos) { this.CatDatos = datos }
    })
  }
}
