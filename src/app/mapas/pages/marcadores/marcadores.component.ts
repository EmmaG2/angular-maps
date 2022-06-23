import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ez-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Marcadores - Angular Maps')
  }

}
