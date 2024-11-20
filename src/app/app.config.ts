import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MejorVendidoComponent } from './mejor-vendido/mejor-vendido.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './disenios/header/header.component';
import { SidebarComponent } from './disenios/sidebar/sidebar.component';
import { FullComponent } from './disenios/full.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    MejorVendidoComponent,
    MatIconModule,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    RouterModule,
    provideAnimationsAsync(),
    
  ], 
};
