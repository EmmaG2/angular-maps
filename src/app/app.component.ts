import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'ez-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  static isBrowser = new BehaviorSubject<any>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId))
  }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.token;
  }
}
