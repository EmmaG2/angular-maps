import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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

  @ViewChild('header') header!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  isDown: boolean = false;

  headerDown() {
    this.isDown = !this.isDown
  }

  menuItems: MenuItem[] = [
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
