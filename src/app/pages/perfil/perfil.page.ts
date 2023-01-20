import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private activaruta: ActivatedRoute) { }
  nombre: string = '';
  apellido: string = '';
  genero: string = '';
  usuario: string = '';
  email: string = '';
  foto: string = '';
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.activaruta.queryParams.subscribe(usuario => {
      this.nombre = usuario['nombre'],
      this.apellido = usuario['apellido'],
      this.genero = usuario['genero'],
      this.usuario = usuario['usuario'],
      this.email = usuario['correo'] || 'sin email',
      this.foto = usuario['foto']
    })
  }
}
