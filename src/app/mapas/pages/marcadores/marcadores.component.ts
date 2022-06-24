import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ez-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit, OnDestroy {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Marcadores - Angular Maps')
  }

  ngOnDestroy(): void {
    console.clear()
  }

}
