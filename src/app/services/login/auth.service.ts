import { Injectable } from '@angular/core';
import { DatosUser, RespDatos } from '../../interfaces/login/datos-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlauth: string = 'https://dummyjson.com/auth/login ';
  public LoginAuth: RespDatos | null = null;
  constructor(private http: HttpClient, private ruta: Router) { }

  public validardatos({ username, password }: DatosUser) {
    this.http.post<RespDatos>(this.urlauth, { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(datos => {
      if (datos) {
        this.LoginAuth = datos, this.ruta.navigate(['/perfil'],
          {
            queryParams: {
              correo: datos.email,
              nombre: datos.firstName,
              apellido: datos.lastName,
              genero: datos.gender,
              usuario: datos.username,
              foto: datos.image,

            }
          })
      }
    })
  }
}
