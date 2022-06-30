import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './core/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './pages/marcadores/local-storage.service';



@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    SharedModule
  ],
  providers: [LocalStorageService]
})
export class MapasModule { }
