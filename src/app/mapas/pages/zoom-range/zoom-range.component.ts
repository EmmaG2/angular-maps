import { Title } from '@angular/platform-browser';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'ez-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss']
})
export class ZoomRangeComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('map') MapaRef!: ElementRef;
  public mapa!: mapboxgl.Map;
  public center: [number, number] = [-104.60306427141977, 24.043922542308422];

  private zoomLevel: number = 5;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Zoom Range - Angular Maps')
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.MapaRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', () => this.setZoomPage(this.mapa.getZoom()))

    this.mapa.on('zoomend', () => {
      if (this.mapa.getZoom() > 17) this.mapa.zoomTo(17);
    })

    this.mapa.on('zoomstart', () => {
      if (this.mapa.getZoom() < 2) this.mapa.zoomTo(3);
    })

    this.mapa.on('move', (event) => {
      const { lat, lng } = event.target.getCenter();
      this.center = [lng, lat];

    })
  }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => { })
    this.mapa.off('zoomend', () => { })
    this.mapa.off('zoomstart', () => { })
    this.mapa.off('move', () => { })
    console.clear()
  }

  public zoomOut(): void {
    this.mapa.zoomOut();
  }

  public zoomIn(): void {
    this.mapa.zoomIn();
  }

  public getZoomPage(): number {
    return this.zoomLevel;
  }

  public setZoomPage(newZoom: number): void {
    this.zoomLevel = newZoom;
  }

  public zoomCambio(newZoom: string): void {
    this.mapa.zoomTo(Number(newZoom))
  }
}
