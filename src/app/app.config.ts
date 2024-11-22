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
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

// Configuración personalizada para ngx-ui-loader
const ngxUiLoaderConfig:NgxUiLoaderConfig={
  //Configura aspectos visuales como textos que aparece mientras carga
  text:"loading...",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  bgsColor:"#7bifa2",
  fgsColor:"#7bifa2",
  fgsType:SPINNER.squareJellyBox, //la figura que sale en la pantalla
  fgsSize:100,
  hasProgressBar:false
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      
      BrowserModule,
      RouterModule,
      ReactiveFormsModule,
      //conexion a API
      HttpClientModule,
      NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
      FlexLayoutModule,
      
    ),
    AppComponent,
    MejorVendidoComponent,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    SignupComponent,
    
    provideAnimationsAsync(),

    ...MaterialModule_config.providers,
    MaterialModule(),
    ...SharedModule_config.exports
    
  ] 
};
