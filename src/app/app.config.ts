import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MejorVendidoComponent } from './mejor-vendido/mejor-vendido.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './disenios/header/header.component';
import { SidebarComponent } from './disenios/sidebar/sidebar.component';
import { FullComponent } from './disenios/full.component';
import { MaterialModule_config } from './material-component/material.module';
import { MaterialModule } from './sharet/material-module';
import { SharedModule_config } from './sharet/shared-module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      MatIconModule,
      RouterModule,
    ),
    MejorVendidoComponent,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    provideAnimationsAsync(),

    ...MaterialModule_config.providers,
    MaterialModule(),
    ...SharedModule_config.providers
    
  ], 
};
