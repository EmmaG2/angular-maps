import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ez-mini-mapa',
  template: '<div #mapa></div>',
  styles: [`
    div {
      width: 250px;
      height: 250px;
      margin: 0;
    }
  `]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('mapa') mapaRef!: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {

    const mapa = new mapboxgl.Map({
      container: this.mapaRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      accessToken: environment.token,
      center: this.lngLat,
      zoom: 17,
      interactive: false
    })

    new mapboxgl.Marker({
      color: '#be1558'
    })
      .setLngLat(this.lngLat)
      .addTo(mapa)

  }

}
