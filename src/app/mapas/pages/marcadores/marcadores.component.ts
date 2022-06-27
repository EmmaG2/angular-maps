import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ez-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private title: Title) { }

  @ViewChild('map') MapaRef!: ElementRef;

  public mapa!: mapboxgl.Map;
  public center: [number, number] = [-104.60306427141977, 24.043922542308422];


  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.MapaRef.nativeElement,
      style: environment.mapStyle,
      center: this.center,
      zoom: 16
    });

    const marker = new mapboxgl.Marker({ color: '#f22445' })
      .setLngLat(this.center)
      .addTo(this.mapa)
  }

  ngOnInit(): void {
    this.title.setTitle('Marcadores - Angular Maps')
  }

  ngOnDestroy(): void {
    console.clear()
  }

}
