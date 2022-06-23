import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ez-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements AfterViewInit, OnInit {

  @ViewChild('map') MapRef!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Full Screen - Angular Maps')
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.MapRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.60306427141977, 24.043922542308422  ],
      zoom: 18
    });
  }

}
