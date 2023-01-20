import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo/catalogo.service'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  public skip: number = 0
  constructor(public servcat: CatalogoService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.servcat.catalogo()
  }
}
