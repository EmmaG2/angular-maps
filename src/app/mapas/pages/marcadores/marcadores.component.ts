import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

interface MarkerColor {
  color: string;
  center?: [number, number],
  marker?: mapboxgl.Marker;
}

@Component({
  selector: 'ez-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('map') MapaRef!: ElementRef;

  constructor(private title: Title, private renderer2: Renderer2) { }

  public mapa!: mapboxgl.Map;
  public center: [number, number] = [-104.60306427141977, 24.043922542308422];
  public markersArray: MarkerColor[] = [];
  public showModal: boolean = false;

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.MapaRef.nativeElement,
      style: environment.mapStyle,
      center: this.center,
      zoom: 16
    });

    this.leerLocalStorage();

    this.markersArray.forEach(m => {
      m.marker?.on('dragend', () => {
        this.guardarMarcadores()
      })
    })
  }

  ngOnInit(): void {
    this.title.setTitle('Marcadores - Angular Maps')
  }

  ngOnDestroy(): void {
    console.clear()
  }

  public agregarMarcador(): void {

    if (this.markersArray.length >= 8) {
      this.showModal = true;
      return;
    }

    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const newMarker: mapboxgl.Marker = new mapboxgl.Marker({
      color,
      draggable: true
    })
      .setLngLat(this.center)
      .addTo(this.mapa)

    this.markersArray.push({
      color,
      marker: newMarker
    });

    this.guardarMarcadores();

    newMarker.on('dragend', () => {
      this.guardarMarcadores();
    })
  }

  public goToMark(marker: mapboxgl.Marker): void {
    this.mapa.flyTo({
      center: marker.getLngLat(),
      zoom: 18,
      animate: true
    });
  }

  public guardarMarcadores(): void {

    const lngLatArray: MarkerColor[] = [];

    this.markersArray.forEach(m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArray.push({
        color,
        center: [lng, lat]
      })

      localStorage.setItem('marcadores', JSON.stringify(lngLatArray))

    })
  }

  public leerLocalStorage(): void {
    if (!localStorage.getItem('marcadores')) return;

    const lngLatArray: MarkerColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArray.forEach(m => {
      const marker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.center!)
        .addTo(this.mapa)

      this.markersArray.push({
        marker,
        color: m.color
      })
    })
  }

  public ocultarModal(): void {
    this.showModal = false;

  }

  public borrarMarcador(e: MouseEvent, i: number): void {
    e.preventDefault();

    this.markersArray[i].marker?.remove();
    this.markersArray.splice(i, 1)
  }

}
