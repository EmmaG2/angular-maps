import { Title } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ez-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit, OnDestroy {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Propiedades - Angular Maps')
  }

  ngOnDestroy(): void {
    console.clear()
  }

}
