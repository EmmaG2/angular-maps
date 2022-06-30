import { Component } from '@angular/core';

interface MenuItem {
  ruta: string,
  nombre: string,
}
@Component({
  selector: 'ez-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public headerDown() {
    this.isDown = !this.isDown
  }

  public isDown: boolean = false;

  public menuItems: MenuItem[] = [
    {
      ruta: '/mapas/full-screen',
      nombre: 'Full Screen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades'
    }
  ];
}
