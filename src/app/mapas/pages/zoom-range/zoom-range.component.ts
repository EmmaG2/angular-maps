import { Title } from '@angular/platform-browser';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ez-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss']
})
export class ZoomRangeComponent implements AfterViewInit, OnInit {

  @ViewChild('map') MapaRef!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Zoom Range - Angular Maps')
  }

  ngAfterViewInit(): void {

    console.log('afterviewinit', this.MapaRef);

    this.mapa = new mapboxgl.Map({
      container: this.MapaRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.60306427141977, 24.043922542308422  ],
      zoom: 18
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

}
