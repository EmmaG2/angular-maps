import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ez-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements AfterViewInit {

  @ViewChild('map') MapRef!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.MapRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.60306427141977, 24.043922542308422  ],
      zoom: 18
    });
  }

}
